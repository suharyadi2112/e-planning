<!-- ModalFormAddUsers -->
<template>
    <div class="modal fade" id="modalAddUsers" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">Adding Users</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
  
          <form @submit.prevent="submitFormUsers">
            <div class="modal-body row g-3">
              <div class="col-12" v-if="errorMessages.length > 0">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                </div>
              </div>

         
            <div class="col-md-12 mb-0">
                <div class="input-group mb-3 has-validation">
                  <span class="input-group-text bg-info text-white"><i class="bi bi-person"></i></span>
                    <div class="form-floating is-invalid">
                        <input type="text" :class="{ 'form-control': true,'is-invalid': error.name }" id="name" placeholder="Masukan nama" name="name"  v-model="formData.name">
                        <label for="name">Masukan nama</label>
                    </div>
                  
                    <div class="invalid-feedback">
                      <span  v-if="error.name">Please choose a username.</span>
                    </div>
                </div>
            </div>


            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-primary text-white"><i class="bi bi-envelope-at-fill"></i></span>
                    <div class="form-floating is-invalid">
                        <input type="email" :class="{ 'form-control': true,'is-invalid': error.email }" id="email" placeholder="Masukan email" name="email"  v-model="formData.email">
                        <label for="email">Masukan email</label>
                    </div>
                  
                    <div class="invalid-feedback">
                        <span v-if="error.email">Email harus diisi.</span>
                    </div>

                </div>
            </div>

            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-primary text-white"><i class="bi bi-phone"></i></span>
                    <div class="form-floating is-invalid ">
                        <input type="text" :class="{ 'form-control': true, 'is-invalid': error.handphone || invalidNumber }" id="handphone" placeholder="Masukan nomor handphone" name="handphone" v-model="formData.handphone" @input="validateNumber">
                        <label for="handphone">Masukan nomor handphone</label>
                    </div>

                    <div class="invalid-feedback">
                        <p v-if="invalidNumber">Nomor handphone harus berupa angka.</p>
                        <span v-if="error.handphone">Nomor handphone harus diisi.</span>
                    </div>

                </div>
            </div>

            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-primary text-white"><i class="bi bi-person-fill-up"></i></span>
                    <div class="form-floating is-invalid">
                        <input type="text" :class="{ 'form-control': true,'is-invalid': error.jabatan }" id="jabatan" placeholder="Masukan jabatan" name="jabatan"  v-model="formData.jabatan">
                        <label for="jabatan">Masukan jabatan</label>
                    </div>

                    <div class="invalid-feedback">
                        <span v-if="error.jabatan">Jabatan harus diisi.</span>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-primary text-white"><i class="bi bi-building-check"></i></span>
                    <div class="form-floating is-invalid">
                        <input type="text" :class="{ 'form-control': true,'is-invalid': error.divisi }" id="divisi" placeholder="Masukan divisi" name="divisi"  v-model="formData.divisi">
                        <label for="divisi">Masukan divisi</label>
                    </div>

                    <div class="invalid-feedback">
                        <span v-if="error.divisi">Divisi harus diisi.</span>
                    </div>

                </div>
            </div>

            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-warning"><i class="bi bi-universal-access-circle"></i></span>
                    <div class="form-floating is-invalid">
                        <select :class="{ 'form-select': true, 'is-invalid': error.role }" v-model="formData.role" id="role" aria-label="Floating label" name="role">
                            <option value="" selected>Choose...</option>
                            <option value="admin" >Admin</option>
                            <option value="worker" >Worker</option>
                        </select>
                        <label for="role">Masukan nomor role</label>
                    </div>

                    <div class="invalid-feedback">
                        <span v-if="error.role">Role harus diisi.</span>
                    </div>

                </div>
            </div>

            <div class="col-md-6 mb-0">
                <div class="input-group mb-3 has-validation">
                    <span class="input-group-text bg-primary text-white"><i class="bi bi-key-fill"></i></span>
                    <div class="form-floating is-invalid">
                        <input type="password" :class="{ 'form-control': true,'is-invalid': error.password }" id="passwordd" name="password"  v-model="formData.password" placeholder="password">
                        <label for="passwordd">Masukan nomor password</label>
                    </div>

                    <div class="invalid-feedback">
                        <span v-if="error.password">Password harus diisi.</span>
                    </div>

                </div>
            </div>

            </div>


            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> <i class="bi bi-x-circle"></i></button>
              <button class="btn btn-primary" style="float: right;" type="submit" :disabled="loadingSubmitUsers">
                <span v-if="!loadingSubmitUsers"><i class="bi bi-arrow-repeat"></i> Submit Users</span>
                <span v-else>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <label> Submit Users</label>
                </span>
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    components: { },
    props: {

    },
    computed: {
      
    },
    data() {
      return {
        baseUrl: process.env.BE_APP_BASE_URL,
        token: localStorage.getItem('tokenCallIT'),
        formData: {
          name:'',
          handphone:'',
          jabatan:'',
          email:'',
          role: '',
          divisi : '',
          password: '',

        },
        invalidNumber: false,
        error : {},//error clientside
        loadingSubmitUsers : false, //progres btn
        errorMessages: [],//error serverside
      }
    },
    methods: {
      submitFormUsers() {
        this.loadingSubmitUsers = true //progres btn
        this.error = {};
        //validation
        const requiredFields = ['name','handphone','jabatan','email','role','divisi', 'password'];
        requiredFields.forEach(field => { 
          
          console.log(this.formData[field])
          if (!this.formData[field]) {
            this.error[field] = true;
            setTimeout(()=>{ this.loadingSubmitUsers = false },1000);
          }else{
            this.error[field] = false;// fill
          }
        });

        // Validasi nomor handphone
        if (this.formData['handphone'] && !/^\d+$/.test(this.formData['handphone'])) {
            this.error['handphone'] = true;
            setTimeout(() => { this.loadingSubmitUsers = false }, 1000);
        } else {
          this.error['handphone'] = false;
        }
        
        const hasErrors = requiredFields.some(field => this.error[field]);
        if (!hasErrors) {
          this.sendStoreUsers();
        }
      },
      async sendStoreUsers() {
        try {
            const response = await axios.post(`${this.baseUrl}/api/store_user`, this.formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                },
            });
  
            this.Toasttt('Successfully', 'success', 'Data Users Stored')
            this.$emit('userAdd'); //sent signal to views
            this.errorMessages = [];
            return response
  
        } catch (error) {
          if(error.response.data.message && error.response.status == 400){
            this.errorMessages = [];
            for (let field in error.response.data.message) { //list error 400
              this.errorMessages.push(...error.response.data.message[field]);
            }
          }
          console.log(error.response.data.message)
        } finally { 
          this.loadingSubmitUsers = false
        }
      },

      validateNumber(event) {
        this.invalidNumber = isNaN(event.target.value);
      },

      Toasttt(msg, type, detail){
        const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#F8F8F8",
            didOpen: (toast) => {
                toast.onmouseenter = this.$swal.stopTimer;
                toast.onmouseleave = this.$swal.resumeTimer;
            }
        });
            Toast.fire({
            icon: type,
            title: msg,
            text: detail,
        });
      },
    },
  };
  </script>
  