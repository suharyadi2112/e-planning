<template>
<main id="main" class="main">
    <section class="section profile">
      <div class="row">
        <div class="col-sm-10">
            <div class="pagetitle"> 
            <h1 class="text-left">More Detail Pengaduan</h1>
                <nav>
                    <ol class="breadcrumb breadJa">
                    <router-link :to="{ name: '/'}" class="breadcrumb-item">Home</router-link>
                    <router-link :to="{ name: 'pengaduandashboard'}" class="breadcrumb-item">Dashboard Pengaduan</router-link>
                    <router-link :to="{ name: 'detailpagepengaduan'}" class="breadcrumb-item">More Detail Pengaduan</router-link>
                    </ol>
                </nav>
            </div>
        </div> 
        <div class="col-sm-2 text-end">
            <router-link to="/pengaduan">
                <button  class="btn btn-warning btn-sm m-1 shadow" title="Back">
                    <i class="bi bi-arrow-left"></i> 
                </button>
            </router-link>
        </div>
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

            <template v-if="!ProfileOne">
                <div style="width:100%">
                    <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                </div>
            </template>
            
            <template v-else>
                <div style="text-align: center;" class="fade-in">
                    <img src="../../../public/assets/img/logologin.png" alt="Profile" class="rounded-circle">
                    <h2>{{ items.kode_laporan }} </h2>
                    <br>
                    <div class="alert" 
                        :class="{
                            'alert-danger': items.prioritas === 'Tinggi',
                            'alert-warning': items.prioritas === 'Sedang',
                            'alert-primary': items.prioritas !== 'Tinggi' && items.prioritas !== 'Sedang'
                        }" 
                        role="alert">
                        Prioritas : <b>{{ items.prioritas.toUpperCase() }}</b>
                    </div>
                </div>
            </template>
            </div>  
          </div>
        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview" aria-selected="true" role="tab">Overview</button>
                </li>
                <li class="nav-item" role="assignto">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#assign-to-overview" aria-selected="true" role="tab">Assign To</button>
                </li>
              </ul>
            
              <div class="tab-content pt-2">
                <template v-if="!ProfileOne">
                    <div style="width:100%">
                        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                    </div>
                </template>
                <template v-else>
            
                    <div class="tab-pane fade profile-overview active show" id="profile-overview" role="tabpanel">
                        <h5 class="card-title">Pengaduan Details</h5>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Pelapor</div>
                            <div class="col-lg-9 col-md-8">{{ items.pelapor_id ? items.pelapor.name.toUpperCase() : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Lokasi</div>
                            <div class="col-lg-9 col-md-8">{{ items.lokasi ? items.lokasi.toUpperCase() : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Lantai</div>
                            <div class="col-lg-9 col-md-8">{{ items.lantai ? items.lantai.toUpperCase() : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Judul Pengaduan</div>
                            <div class="col-lg-9 col-md-8" style="text-align: justify;">{{ items.judul_pengaduan ? items.judul_pengaduan : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Prioritas</div>
                            <div class="col-lg-9 col-md-8">{{ items.prioritas ? items.prioritas.toUpperCase() : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">No.Telp</div>
                            <div class="col-lg-9 col-md-8">{{ formattedPhoneNumber }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Status Pelaporan</div>
                            <div class="col-lg-9 col-md-8"><span style="width:70px;" :class="{'badge bg-secondary': items.status_pelaporan.toLowerCase() === 'waiting', 'badge bg-warning': items.status_pelaporan.toLowerCase() === 'progress', 'badge bg-success': items.status_pelaporan.toLowerCase() !== 'waiting' && items.status_pelaporan.toLowerCase() !== 'progress'}">{{ items.status_pelaporan.toLowerCase() }}</span></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Tanggal Pelaporan</div>
                            <div class="col-lg-9 col-md-8">{{ items.tanggal_pelaporan ? items.tanggal_pelaporan : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Tanggal Selesai</div>
                            <div class="col-lg-9 col-md-8">{{ items.tanggal_selesai ? items.tanggal_selesai : '-' }}</div>
                        </div>

                    </div>


                    <div class="tab-pane fade assign-to-overview active show" id="assign-to-overview" role="tabpanel">

                        tes

                    </div>

                </template>

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
      </div>
    </section>
</main>
</template>

<style scope>
    .fade-in {
        animation: fadeIn 0.2s ease-in;
    }
    .fade-out {
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

<script>
import axios from 'axios';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import ProgressBar from 'primevue/progressbar';

export default {
    components: {
        ProgressBar,
    },
    data() {
        return {
            items: {},
            baseUrl: process.env.BE_APP_BASE_URL,
            token: localStorage.getItem('tokenCallIT'),
            idPengaduan : null,
            ProfileOne : false,
        }
    },
    mounted() {
        this.idPengaduan = this.$route.params.id;
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                this.ProfileOne = false;
                this.loading = true; 
                // await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await axios(`${this.baseUrl}/api/get_pengaduan/${this.idPengaduan}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    },
                })

                this.items = response.data.data;
                this.ProfileOne = true;

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
    },
    
    computed: {
        formattedPhoneNumber() {
            if (this.items && this.items.nomor_handphone) {
                let cleanedPhoneNumber = this.items.nomor_handphone.startsWith('0') ? this.items.nomor_handphone.substring(1) : this.items.nomor_handphone;
                return '+62 ' + cleanedPhoneNumber;
            } else {
                return 'tidak ada data';
            }
        }
    },

}
</script>