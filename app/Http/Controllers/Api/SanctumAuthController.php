<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
//model
use App\Models\User;

class SanctumAuthController extends Controller
{
    private $keyToken;

    public function __construct()
    {
        $this->keyToken = env('KEY_TOKEN_LOGIN', false); //setup redis
    }

    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => "fail", "message" => $validator->errors(), "data" => null], 400);
        }

        if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {

            try {

                $userRoles = auth()->user()->getRoleNames()->toArray();
                $user      = Auth::user();

                $token = $user->createToken($this->keyToken);

                return response()->json(
                    [
                        "status"  => "success",
                        "message" => "Success login",
                        "data"    => [
                            "token_type"   => "Bearer",
                            "access_token" => $token->plainTextToken,
                            "user_info"    => $user,
                        ],
                    ], 200)->header('X-User-Roles', implode(', ', $userRoles));

            } catch (\Exception $e) {
                return response()->json(["status" => "fail", "message" => $e->getMessage(), "data" => null], 500);
            }
        } else {
            return response()->json(["status" => "fails", "message" => "Unauthorised", "data" => null], 401);
        }
    }

    public function register(Request $request)
    {

        DB::beginTransaction();

        $validator = Validator::make($request->all(), [
            'name'     => 'required|min:4',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'roless'   => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => "fail", "message" => $validator->errors(), "data" => null], 400);
        }

        try {

            $user = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => bcrypt($request->password)
            ]);

            // reset cache permission
            app()[PermissionRegistrar::class]->forgetCachedPermissions();
            $roleToAssign = Role::findById($request->roless, 'api');
            $user->assignRole($roleToAssign);

            DB::commit(); // commit data
            return response()->json(["status" => "success", "message" => "Data successfully stored", "data" => $request->all()], 200);
        } catch (\Exception $e) {

            DB::rollBack(); // roolback data
            return response()->json(["status" => "fail", "message" => $e->getMessage(), "data" => $request->all()], 500);
        }
    }


    public function logout(Request $request)
    {

        DB::beginTransaction();

        try {

            Auth::user()->tokens()->delete();

            DB::commit();
            return response()->json(["status" => "success", "message" => "Logout Success", "data" => null], 200);

        } catch (\Exception $e) {

            DB::rollBack();
            return response()->json(["status" => "fail", "message" => $e->getMessage(), "data" => null], 500);

        }

    }

}
