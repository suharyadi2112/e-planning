<template>
  <main id="main" class="main">

     <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card shadow">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-sm-9">
                  <div class="pagetitle"> 
                    <h1 class="text-left">Pengaduan</h1>
                    <nav>
                      <ol class="breadcrumb breadJa">
                        <router-link :to="{ name: '/'}" class="breadcrumb-item">Home</router-link>
                        <router-link :to="{ name: 'pengaduandashboard'}" class="breadcrumb-item">Dashboard Pengaduan</router-link>
                        <router-link :to="{ name: 'addpengaduan'}" class="breadcrumb-item">Add Pengaduan</router-link>
                      </ol>
                    </nav>
                  </div>
                </div> 
              </div>

            <!-- content -->
            <div v-if="!hasLoaded">
                <div class="d-flex justify-content-center text-primary m-3">
                    <strong role="status" class="pt-1" style="padding-right: 2rem;">Retrieving Data...</strong>
                    <div class="spinner-border shadow" aria-hidden="true"></div>
                </div>
            </div>
            
            <form v-else class="row g-3 fade-in-add-pengaduan-view"  @submit.prevent="submitFormPengaduan">
                
                <div class="col-12" v-if="errorMessages.length > 0">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                    </div>
                </div>

                    <div class="col-md-3">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white"><i class="bi bi-list-ol"></i></span>
                        <div class="form-floating is-invalid">
                            <select :class="{ 'form-select': true, 'is-invalid': error.kategori_pengaduan_id }" v-model="formData.kategori_pengaduan_id" id="nama_kategori" aria-label="Floating label" name="nama_kategori">
                                <option value="" selected disabled>Choose...</option>
                                <option v-for="namaKategori in itemKategoriPengaduan" :key="namaKategori.id" :value="namaKategori.id">
                                {{ namaKategori.nama }}
                                </option>
                            </select>
                            <label for="nama_kategori">Nama Kategori</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.kategori_pengaduan_id"> Nama Kategori harus diisi.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white"><i class="bi bi-telephone"></i></span>
                        <div class="form-floating is-invalid">
                            <input type="number" :class="{ 'form-control': true,'is-invalid': error.nomor_handphone }"  id="nomor_handphone" placeholder="-" v-model="formData.nomor_handphone" name="nomor_handphone">
                            <label for="nomor_handphone">Nomor Handphone</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.nomor_handphone"> Nomor Handphone harus diisi.</span>
                            </div>
                            <small class="text-muted" style="font-size:12px">ex *082283778949</small>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white"><i class="bi bi-building"></i></span>
                        <div class="form-floating is-invalid">
                            <select :class="{ 'form-select': true, 'is-invalid': error.lantai }" v-model="formData.lantai" id="lantai" aria-label="Floating label" name="lantai">
                                <option value="" selected disabled>Choose...</option>
                                <option value="01" >Lantai 01</option>
                                <option value="02" >Lantai 02</option>
                                <option value="03" >Lantai 03</option>
                                <option value="04" >Lantai 04</option>
                                <option value="05" >Lantai 05</option>
                                <option value="06" >Lantai 06</option>
                                <option value="07" >Lantai 07</option>
                                <option value="08" >Lantai 08</option>
                                <option value="09" >Lantai 09</option>
                                <option value="10" >Lantai 10</option>
                                <option value="basement" >Basement</option>
                            </select>
                            <label for="lantai">Lantai</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.lantai"> Lantai harus diisi.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white"><i class="bi bi-pin-map"></i></span>
                        <div class="form-floating is-invalid">
                            <input type="text" :class="{ 'form-control': true,'is-invalid': error.lokasi }"  id="lokasi" placeholder="-" v-model="formData.lokasi" name="lokasi">
                            <label for="lokasi">Lokasi</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.lokasi"> Lokasi harus diisi.</span>
                            </div>
                            <small class="text-muted" style="font-size:12px">ex *Ruangan apotek PC paling ujung</small>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white" ><i class="bi bi-chat-square-text"></i></span>
                        <div class="form-floating is-invalid">
                            <textarea type="text" :class="{ 'form-control': true,'is-invalid': error.judul_pengaduan }"  id="judul_pengaduan" placeholder="-" v-model="formData.judul_pengaduan" name="judul_pengaduan" style="height: 100px;"></textarea>
                            <label for="judul_pengaduan">Judul Pengaduan</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.judul_pengaduan"> Judul Pengaduan harus diisi.</span>
                            </div>
                            <small class="text-muted" style="font-size:12px; text-align: justify;">ex *Gangguan Koneksi WiFi di Lantai 3, Kecepatan Internet Lambat, serta Masalah Intermiten pada Telepon IP yang Mengganggu Komunikasi Internal dan Eksternal.</small>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="input-group mb-3 has-validation">
                        <span class="input-group-text bg-primary text-white" ><i class="bi bi-chat-square-text"></i></span>
                        <div class="form-floating is-invalid">
                            <textarea type="text" :class="{ 'form-control': true,'is-invalid': error.dekskripsi_pelaporan }"  id="dekskripsi_pelaporan" placeholder="-" v-model="formData.dekskripsi_pelaporan" name="dekskripsi_pelaporan" style="height: 100px;"></textarea>
                            <label for="dekskripsi_pelaporan">Deskripsi Pelaporan</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.dekskripsi_pelaporan"> Deskripsi Pelaporan harus diisi.</span>
                            </div>
                            <small class="text-muted" style="font-size:12px; text-align: justify;">ex *Kendala Akses Internet, Keterbatasan Bandwidth, dan Kejadian Terputusnya Sambungan yang Menghambat Produktivitas Tim.</small>
                        </div>
                    </div>
                    
                    <hr>

                    <div class="col-md-6 mb-0">
                        <div class="input-group mb-3 ">
                            <span class="input-group-text bg-success text-white"><i class="bi bi-card-image"></i></span>
                            <div class="form-floating is-invalid">
                                <input type="file" :class="{ 'form-control': true}" id="picture_pre" name="picture_pre" @change="onFileChange"
                                accept=".jpg, .jpeg, .png, .gif, .svg" multiple 
                                >
                                <label for="picture_pre">Picture Pre</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-grid gap-3">
                            <div class="alert alert-info" style="padding:6.2px;">
                                <div v-if="formData.picture_pre && formData.picture_pre.length > 0">
                                    <div class="row">
                                        <div v-for="(image, index) in picture_pre_preview" :key="index" class="col-md-4 mb-3">
                                            <img :src="image" alt="Uploaded Image" style="width:100%;" class="mb-2">
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center" v-else>
                                    <i class="bi bi-images"></i> Choose picture pre first
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12">
                        <router-link :to="{ name: 'pengaduandashboard' }" class="btn btn-secondary">
                            <i class="bi bi-arrow-return-left"></i> Back
                        </router-link>
                        <button class="btn btn-primary" style="float: right;" type="submit" :disabled="loadingSubmitPengaduan">
                            <span v-if="!loadingSubmitPengaduan"><i class="bi bi-cloud-arrow-up"></i> Submit Pengaduan</span>
                            <span v-else>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <label> Submit Pengaduan</label>
                            </span>
                        </button>
                    </div>
            </form><!-- End floating Labels Form -->

            </div>
          </div>
        </div>
      </div>
    </section>

  </main><!-- End #main -->

</template> 

<script>

import axios from 'axios';

export default {
  components:{
  },
  data() {
    return {
        itemKategoriPengaduan : {},
        formData: {
            kategori_pengaduan_id:'',
            lokasi : '',
            lantai : '',
            nomor_handphone : '',
            judul_pengaduan : '',
            dekskripsi_pelaporan: '',
            picture_pre: null,
        },
        picture_pre_preview: null, //untuk preview

        hasLoaded : false, //loaded content
        error : {},//error clientside
        errorMessages: {}, //error serverside
        loadingSubmitPengaduan: false,
        loading : false,
        baseUrl: process.env.BE_APP_BASE_URL,
        token: localStorage.getItem('tokenCallIT'),
    }
  },
  mounted() {
    this.fetchBoth();
  },
  methods: {

    async fetchBoth() {
      try {
            // Menjalankan kedua metode fetch async secara paralel
            await Promise.all([
                this.fetchKategoriPengaduan(),
            ]);

            this.hasLoaded = true;
            
        } catch (error) {
            alert("server error")
            console.error('Error:', error);
        }
    },

    async fetchKategoriPengaduan() {
        try {
            this.loading = true; 
            // await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await axios(`${this.baseUrl}/api/get_kategori_pengaduan_list`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
            })
            
            console.log(response.data.data,"cek data")
            this.itemKategoriPengaduan = response.data.data;

        } catch (error) {
            if (error.response && error.response.status == 401) {
                this.Toasttt('Unauthorized. You do not have access.', 'warning');
                this.$router.push('/login');
            }
            console.error("Terjadi kesalahan:", error);
        } finally {
            this.loading = false;  
        }
    },

    //event file picture pre
    onFileChange(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            this.formData.picture_pre = []; // Inisialisasi array untuk menyimpan file-file picture_pre
            this.picture_pre_preview = []; // Inisialisasi array untuk preview photo pre
            this.error.picture_pre = false;
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                this.formData.picture_pre.push(file);

                // ------Menyimpan base64 untuk preview photo------//
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.picture_pre_preview.push(e.target.result);
                };
                reader.readAsDataURL(file);
                // ------------------------------------------------//

            }
        } else {
            this.error.picture_pre = true;
        }
    },

    // submit form pengaduan
    submitFormPengaduan() {
        this.loadingSubmitPengaduan = true //progres btn
        this.error = {};
        //validation
        const requiredFields = ['kategori_pengaduan_id', 'lokasi', 'lantai', 'judul_pengaduan', 'dekskripsi_pelaporan','nomor_handphone'];
        requiredFields.forEach(field => { 
            
            console.log(this.formData[field])
            if (!this.formData[field]) {
            this.error[field] = true;
            setTimeout(()=>{ this.loadingSubmitPengaduan = false },1000);
            }else{
            this.error[field] = false;// fill
            }
        });
        const hasErrors = requiredFields.some(field => this.error[field]);
        if (!hasErrors) {
            this.sendStoreKategoriPengaduan();
        }
    },

    //store form data
    async sendStoreKategoriPengaduan() {
        try {
            const response = await axios.post(`${this.baseUrl}/api/store_pengaduan`, this.formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${this.token}`,
                },
            });

            this.Toasttt('Successfully', 'success', 'Data Pengaduan Successfully Stored')
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
            this.loadingSubmitPengaduan = false
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
}
</script>


<style scope>
  .breadJa{
    margin-top: 10px;
  }

  /*fade*/
  .fade-in-add-pengaduan-view {
        animation: fadeIn 0.2s ease-in;
  }
  .fade-out-add-pengaduan-view {
      animation: fadeOut 0.2s ease-out;
  }
  @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  @keyframes fadeOut {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
      }
  }  

</style>