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
                <form class="row g-3">
                    
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
                            <input type="text" :class="{ 'form-control': true,'is-invalid': error.nomor_handphone }"  id="nomor_handphone" placeholder="-" v-model="formData.nomor_handphone" name="nomor_handphone">
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
                        <span class="input-group-text bg-primary text-white"><i class="bi bi-chat-square-text"></i></span>
                        <div class="form-floating is-invalid">
                            <textarea type="text" :class="{ 'form-control': true,'is-invalid': error.judul_pengaduan }"  id="judul_pengaduan" placeholder="-" v-model="formData.judul_pengaduan" name="judul_pengaduan"></textarea>
                            <label for="judul_pengaduan">Judul Pengaduan</label>
                            </div>

                            <div class="invalid-feedback">
                                <span v-if="error.judul_pengaduan"> Judul Pengaduan harus diisi.</span>
                            </div>
                            <small class="text-muted" style="font-size:12px">ex *PC Patah</small>
                        </div>
                    </div>

                 
                </form><!-- End floating Labels Form -->

            <!-- content -->
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
        },
        
        error : {},//error clientside

        loading : false,
        baseUrl: process.env.BE_APP_BASE_URL,
        token: localStorage.getItem('tokenCallIT'),
    }
  },
  mounted() {
    this.fetchKategoriPengaduan();
  },
  methods: {
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
  hr {
      margin-top: 2px;
      margin-bottom: 2px;
  }
  /* ponsel */
  @media screen and (max-width: 767px) { 
    .AddPengaduan {
      font-size: 0; 
    }
    .AddPengaduan i {
      font-size: 1rem; 
    }
    .searchBoxText i {
      font-size: 1rem;
    }
    .searchBoxText {
      font-size: 0;
    }
    .GridSearchBox {
      padding-top: 8px;
    }
  }
  /* dekstop */
  @media screen and (min-width: 768px) {
    .AddPengaduan{
      float: right;
    }
    .searchBox{
      width: 50%;
    }
  }

  /*fade*/
  .fade-in {
        animation: fadeIn 0.1s ease-in;
  }
  .fade-out {
      animation: fadeOut 0.1s ease-out;
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