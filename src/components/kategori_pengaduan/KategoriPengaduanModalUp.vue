<!-- ModalFormUpKategoriPengaduan -->
<template>
    <div class="modal fade" id="updateKatpeng" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">Update Kategori</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
  
          <form @submit.prevent="submitFormKategoriPengaduan">
          <div v-if="!hasLoadedKatPeng">
              <div class="d-flex justify-content-center text-primary m-3">
                <strong role="status" class="pt-1" style="padding-right: 2rem;">Retrieving Data...</strong>
                <div class="spinner-border shadow" aria-hidden="true"></div>
              </div>
            </div>
            <div v-else class="modal-body row g-3">
              <div class="col-12" v-if="errorMessages.length > 0">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                </div>
              </div>

              <div class="col-md-12">
                <div class="input-group has-validation">
                  <div class="form-floating is-invalid">
                    <form class="form-floating">
                        <input type="text" :class="{ 'form-control': true,'is-invalid': error.nama }" placeholder="Bug Aplikasi" v-model="formData.nama" name="nama">
                        <label for="nama">Nama Kategori Pengaduan</label>
                    </form>
                  </div>
                  <div v-if="error.nama" class="invalid-feedback">
                    Nama Kategori Pengaduan harus diisi.
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> <i class="bi bi-x-circle"></i></button>
              <button class="btn btn-primary" style="float: right;" type="submit" :disabled="loadingUpdateKatPeng">
                <span v-if="!loadingUpdateKatPeng"><i class="bi bi-arrow-repeat"></i> Update Kategori Pengaduan</span>
                <span v-else>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <label> Update Kategori Pengaduan</label>
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
      dataLoadedKatpeng : Boolean,
      dataFormUpdateKatpeng: Object,
    },
    computed: {
      hasLoadedKatPeng() {
        return this.dataLoadedKatpeng;
      },
    },
    data() {
      return {
        baseUrl: process.env.BE_APP_BASE_URL,
        token: localStorage.getItem('tokenCallIT'),
        formData: { ...this.dataFormUpdateKatpeng },
        error : {},//error clientside
        loadingUpdateKatPeng : false, //progres btn
        errorMessages: [],//error serverside
      }
    },
    watch: {
      dataFormUpdateKatpeng(newData) {
        this.error = {}; //reset error 
        this.formData = { ...newData,
          data: {
            ...newData.data,
          }
        };
      }
    },
    methods: {
      submitFormKategoriPengaduan() {
        this.loadingUpdateKatPeng = true //progres btn
        this.error = {};
        //validation
        const requiredFields = ['nama'];
        requiredFields.forEach(field => { 
          
          console.log(this.formData[field])
          if (!this.formData[field]) {
            this.error[field] = true;
            setTimeout(()=>{ this.loadingUpdateKatPeng = false },1000);
          }else{
            this.error[field] = false;// fill
          }
        });
        const hasErrors = requiredFields.some(field => this.error[field]);
        if (!hasErrors) {
          this.sendUpdateKategoriPengaduan();
        }
      },
      async sendUpdateKategoriPengaduan() {
        try {
            const response = await axios.put(`${this.baseUrl}/api/update_kategori_pengaduan/${this.formData.id}`, this.formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                },
            });
  
            this.Toasttt('Successfully', 'success', 'Data Kategori Pengaduan Successfully Updated')
            this.$emit('katpengUpdate'); //sent signal to views
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
          this.loadingUpdateKatPeng = false
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
  