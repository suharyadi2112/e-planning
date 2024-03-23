<!-- ModalChangePassword -->
<template>
    <div class="modal fade" id="modalChangePassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header bg-warning">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Change Password</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
  
          <form @submit.prevent="submitFormChangePassword">
            <div class="modal-body row g-3">
              <div class="col-12" v-if="errorMessages.length > 0">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                </div>
              </div>

              <div class="col-md-12">
                <div class="input-group has-validation">
                  <div class="form-floating is-invalid">
                    <form class="form-floating">
                        <input type="password" :class="{ 'form-control': true,'is-invalid': error.password }"  id="password" placeholder="********" v-model="formData.password" name="password">
                        <label for="password">Password</label>
                    </form>
                  </div>
                  <div v-if="error.password" class="invalid-feedback">
                    Password harus diisi.
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="input-group has-validation">
                  <div class="form-floating is-invalid">
                    <form class="form-floating">
                        <input type="password" :class="{ 'form-control': true,'is-invalid': error.password_confirmation }"  id="password_confirmation" placeholder="********" v-model="formData.password_confirmation" name="password_confirmation">
                        <label for="password_confirmation">Password Confirmation</label>
                    </form>
                  </div>
                  <div v-if="error.password_confirmation" class="invalid-feedback">
                    Password Confirmation harus diisi.
                  </div>
                </div>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> <i class="bi bi-x-circle"></i></button>
              <button class="btn btn-warning" style="float: right;" type="submit" :disabled="loadingSubmitChangePassword">
                <span v-if="!loadingSubmitChangePassword"><i class="bi bi-arrow-repeat"></i> Change Password</span>
                <span v-else>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <label> Change Password</label>
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
    computed: {
      
    },
    data() {
      return {
        baseUrl: process.env.BE_APP_BASE_URL,
        token: localStorage.getItem('tokenCallIT'),
        idUser: localStorage.getItem('userInfoId'),
        formData: {
          password:'',
          password_confirmation:'',
        },
        error : {},//error clientside
        loadingSubmitChangePassword : false, //progres btn
        errorMessages: [],//error serverside
      }
    },
    methods: {
      submitFormChangePassword() {
        this.loadingSubmitChangePassword = true //progres btn
        this.error = {};
        //validation
        const requiredFields = ['password', 'password_confirmation'];
        requiredFields.forEach(field => { 
          
          console.log(this.formData[field])
          if (!this.formData[field]) {
            this.error[field] = true;
            setTimeout(()=>{ this.loadingSubmitChangePassword = false },1000);
          }else{
            this.error[field] = false;// fill
          }
        });
        const hasErrors = requiredFields.some(field => this.error[field]);
        if (!hasErrors) {
          this.sendStoreChangePassword();
        }
      },
      async sendStoreChangePassword() {
        try {
            const response = await axios.put(`${this.baseUrl}/api/change_password/${this.idUser}`, this.formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                },
            });
  
            this.Toasttt('Successfully', 'success', 'Password Successfully Change')
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
          this.loadingSubmitChangePassword = false
        }
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
  