<template>

  <main id="main" class="main">

     <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <!-- Pengaduan Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#" @click="totalPengaduanInterval('today')">Today</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPengaduanInterval('month')">This Month</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPengaduanInterval('year')">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title fade-in-dashboard-home">Pengaduan <span class="fade-in-dashboard-home">| {{ interval ? interval.charAt(0).toUpperCase() + interval.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-flag"></i>
                    </div>
                    <div class="ps-4 fade-in-dashboard-home">
                      <h6>
                        <vue3-autocounter class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.current_count' :duration='2  ' :autoinit='true' />
                        <span class="card-title text-muted small">Pengaduan</span>
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalPengaduan.increase_percentage >= 0, 'text-danger': itemsTotalPengaduan.increase_percentage < 0}">
                        <span class="card-title text-muted small">
                          <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <!-- End Pengaduan Card -->

            <!-- Prioritas Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card revenue-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Interval</h6>
                    </li>

                    <li><a class="dropdown-item" href="#" @click="totalPrioritasInterval('today')">Today</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPrioritasInterval('month')">This Month</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPrioritasInterval('year')">This Year</a></li>
                  </ul>

                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Prioritas</h6>
                    </li>

                    <li><a class="dropdown-item" href="#" @click="totalPrioritas('tinggi')">Tinggi</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPrioritas('sedang')">Sedang</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalPrioritas('rendah')">Rendah</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Prioritas <span class="fade-in-dashboard-home">| {{ intervalPrioritas ? intervalPrioritas.charAt(0).toUpperCase() + intervalPrioritas.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-sort-alpha-up"></i>
                    </div>
                    <div class="ps-3">
                      <h6>
                        <vue3-autocounter  class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.current_count' :duration='2  ' :autoinit='true' />
                        <span class="card-title text-muted small">{{ prioritas ? prioritas.charAt(0).toUpperCase() + prioritas.slice(1) : '-' }}</span>
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalPrioritas.increase_percentage >= 0, 'text-danger': itemsTotalPrioritas.increase_percentage < 0}">
                        <span class="card-title text-muted small">
                          <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Prioritas Card -->

            <!-- Kategori Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card customers-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Interval</h6>
                    </li>

                    <li><a class="dropdown-item" href="#" @click="totalKategoriInterval('today')">Today</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalKategoriInterval('month')">This Month</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalKategoriInterval('year')">This Year</a></li>
                  </ul>

                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Kategori</h6>
                    </li>

                    <li v-for="(kategori, kategoriId) in itemsAddional.kategoriList" :key="kategoriId" >
                        <template v-if="kategori">
                          <a class="dropdown-item" href="#" @click="totalKategori(kategoriId)">{{ kategori }}</a>
                        </template>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Kategori <span class="fade-in-dashboard-home">| {{ intervalKategori ? intervalKategori.charAt(0).toUpperCase() + intervalKategori.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-tags"></i>
                    </div>
                    <div class="ps-3">
                      <h6>
                        <vue3-autocounter  class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.current_count' :duration='2  ' :autoinit='true' />
                        
                        <span class="card-title text-muted small fade-in-dashboard-home kategori-item" :data-tooltip="itemsTotalKategori.kategori">
                            {{ itemsTotalKategori.kategori ? itemsTotalKategori.kategori.substring(0, 10) : '' }}{{ itemsTotalKategori.kategori && itemsTotalKategori.kategori.length > 10 ? '...' : '' }}
                        </span>
                       
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalKategori.increase_percentage >= 0, 'text-danger': itemsTotalKategori.increase_percentage < 0}">
                      <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Kategoi Card -->

            <!-- Lantai Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card lantai-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Interval</h6>
                    </li>

                    <li><a class="dropdown-item" href="#" @click="totalLantaiInterval('today')">Today</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalLantaiInterval('month')">This Month</a></li>
                    <li><a class="dropdown-item" href="#" @click="totalLantaiInterval('year')">This Year</a></li>
                  </ul>

                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter Lantai</h6>
                    </li>

                    <li v-for="(lantainya, lantaiID) in itemsAddional.lantaiList" :key="lantaiID">
                        <a class="dropdown-item" href="#" @click="totalLantai(lantainya)">{{ lantainya }}</a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Lantai <span class="fade-in-dashboard-home">| {{ intervalLantai ? intervalLantai.charAt(0).toUpperCase() + intervalLantai.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-building-fill-up"></i>
                    </div>
                    <div class="ps-3">
                      <h6>
                        <vue3-autocounter  class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalLantai.current_count' :duration='2  ' :autoinit='true' />
                        
                        <span class="card-title text-muted small fade-in-dashboard-home kategori-item" :data-tooltip="itemsTotalLantai.lantai">
                            Lantai {{ itemsTotalLantai.lantai ? itemsTotalLantai.lantai.substring(0, 4) : '' }}{{ itemsTotalLantai.lantai && itemsTotalLantai.lantai.length > 4 ? '...' : '' }}
                        </span>
                       
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalLantai.increase_percentage >= 0, 'text-danger': itemsTotalLantai.increase_percentage < 0}">
                      <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalLantai.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalLantai.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Lantai Card -->
            
            <!-- Workers Card -->
            <div class="col-xxl-8 col-xl-12">
              <div class="card">

                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter Tahun</h6>
                      </li>

                      <li><a class="dropdown-item" href="#" @click="workerJobInterval('2026')">2026</a></li>
                      <li><a class="dropdown-item" href="#" @click="workerJobInterval('2025')">2025</a></li>
                      <li><a class="dropdown-item" href="#" @click="workerJobInterval('2024')">2024</a></li>
                      <li><a class="dropdown-item" href="#" @click="workerJobInterval('2023')">2023</a></li>
                    </ul>
                  </div>
              
                  <div class="card-body">
                    <h5 class="card-title">Workers Jobs <span>| Workers dengan total jobs {{ tahunJobWorkers }}</span></h5>
                    <template v-if="!loadingHome">
                        <div style="width:100%">
                            <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                        </div>
                    </template>
                    <div class="activity fade-in-dashboard-home" v-else>
                     
                      <div id="chart">
                        <apexchart type="line" height="393" :options="chartOptions" :series="series"></apexchart>
                      </div>

                    </div>
                  </div>
              </div>
            </div><!-- End Wokrer Card -->
            
            <!-- Actvity Card -->
            <div class="col-xxl-4 col-xl-12">
              <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Recent Pengaduan <span>| 10 Pengaduan terakhir</span></h5>
                    <template v-if="!loadingHome">
                        <div style="width:100%">
                            <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                        </div>
                    </template>
                    <div class="activity scrollable-div fade-in-dashboard-home" v-else>

                      <div class="activity-item d-flex" v-for="(activity, index) in itemsPengaduanAktivitas" :key="index">
                        <div class="activite-label">{{ shortenTimeAktifitas(activity.lama_waktu) }}</div>
                        <i class="bi bi-circle-fill activity-badge" :class="getBadgeColorAktivitasPengaduan(activity.prioritas)"></i>
                        <div class="activity-content" style="text-align: justify">{{ activity.judul_pengaduan }}</div>
                      </div><!-- End activity item-->
                      <br>
                    </div>
                     <div class="activity-description pt-4" style="text-align: center; font-size: 12px;">
                        <span class="p-2" ><i class="bi bi-circle-fill activity-badge text-danger" ></i> Tinggi</span>
                        <span class="p-2" ><i class="bi bi-circle-fill activity-badge text-warning" ></i> Sedang</span>
                        <span class="p-2"><i class="bi bi-circle-fill activity-badge text-primary" ></i> Rendah</span>
                        <span class="p-2"><i class="bi bi-circle-fill activity-badge text-secondary" ></i> TBA</span>
                      </div>
                  </div>
              </div>
            </div><!-- End Recent Activity -->


              
          </div>
        </div>
      </div>
    </section>

  </main><!-- End #main -->

</template> 

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';
import { chartOptions } from './apexchartjs/charttoption.js';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import ProgressBar from 'primevue/progressbar';

export default defineComponent({
  name: 'DemoTes',
  components: {
    ProgressBar,
    'vue3-autocounter': Vue3autocounter
  },
  data() {
    return {
      itemsTotalPengaduan: {},
      itemsTotalPrioritas: {},
      itemsTotalKategori: {},
      itemsTotalLantai: {},
      itemsPengaduanAktivitas: {},
      interval: 'month',
      intervalPrioritas: 'month',
      intervalKategori: 'month',
      intervalLantai: 'month',
      prioritas: 'tinggi',
      kategori: '-',
      lantai: '-',
      tahunJobWorkers : '-',
      tahunTotalLantai : '-',
      bulanTotalLantai : '-',
      itemsAddional: {},

      series: [], //untuk chart worker dan jumlah jobnya
      chartOptions: chartOptions,
     
      baseUrl: process.env.BE_APP_BASE_URL,
      token: localStorage.getItem('tokenCallIT'),
      infoIDLogin: localStorage.getItem('userInfoId'),
      loadingHome: false,
      
      
    }
  },

  mounted() {
    this.fetchBothDashboardHome();
  },

  methods: {
    async fetchBothDashboardHome() {
        try {
            await Promise.all([
              this.fetchData(),
              this.fetchDataAdditonal(),
            ]);
            
        } catch (error) {
            alert("server error")
            console.error('Error:', error);
        }
    },

    async fetchData() {
        try {
            const response = await axios(`${this.baseUrl}/api/dashboard-home`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
                params: {
                  interval: this.interval,
                  intervalPrioritas: this.intervalPrioritas,
                  prioritas: this.prioritas,
                  kategori_id: this.kategori,
                  intervalKategori: this.intervalKategori,
                  lantai: this.lantai,
                  intervalLantai: this.intervalLantai,
                  tahunJobWorker: this.tahunJobWorkers,
                  tahunTotalLantai: this.tahunTotalLantai,
                  bulanTotalLantai: this.bulanTotalLantai,
                },
            })

            this.itemsTotalPengaduan = response.data.data.totalPersenPengaduan;
            this.itemsTotalPrioritas = response.data.data.totalPersenPrioritas;
            this.itemsTotalKategori = response.data.data.totalPersenKategori;
            this.itemsTotalLantai = response.data.data.totalPersenLantai;
            this.itemsPengaduanAktivitas = response.data.data.getPengaduanActivity;
            this.updateSeriesWorkerWithTotalJobs(response.data.data.totalKerjaanPerBulan);

            this.loadingHome = true;

        } catch (error) {
            if (error.response && error.response.status == 401) {
                this.Toasttt('Unauthorized. You do not have access.', 'warning');
                this.$router.push('/login');
            }

            if (error.response && error.response.status == 500 || error.response.status == 501) {
                this.Toasttt('Oops. Something Wrong.', 'error');
                this.$router.push('/pengaduan');
            }
            console.error("Terjadi kesalahan:", error);
        }
    },
    totalPengaduanInterval(interval) {
      this.interval = interval
      this.fetchData()
    },
    totalPrioritasInterval(itvl) {
      this.intervalPrioritas = itvl
      this.fetchData()
    },
    totalPrioritas(protas) {
      this.prioritas = protas
      this.fetchData()
    },
    totalKategoriInterval(intvlKat){
      this.intervalKategori = intvlKat
      this.fetchData()
    },
    totalKategori(katt){
      this.kategori = katt
      this.fetchData()
    },
    totalLantaiInterval(intvlLan){
      this.intervalLantai = intvlLan
      this.fetchData()
    },
    totalLantai(lann){
      this.lantai = lann
      this.fetchData()
    },
    workerJobInterval(intvl){
      this.tahunJobWorkers = intvl
      this.fetchData()
    },
    

    async fetchDataAdditonal() {
        try {
            const response = await axios(`${this.baseUrl}/api/get_additional_info`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
            })

            this.itemsAddional = response.data.data;

        } catch (error) {
            if (error.response && error.response.status == 401) {
                this.Toasttt('Unauthorized. You do not have access.', 'warning');
                this.$router.push('/login');
            }

            if (error.response && error.response.status == 500 || error.response.status == 501) {
                this.Toasttt('Oops. Something Wrong.', 'error');
                this.$router.push('/pengaduan');
            }
            console.error("Terjadi kesalahan:", error);
        }
    },

    getBadgeColorAktivitasPengaduan(prioritas) {
        // Tentukan kelas warna berdasarkan prioritas
        if (prioritas.toLowerCase() === 'tinggi') {
          return 'text-danger';
        } else if (prioritas.toLowerCase() === 'sedang') {
          return 'text-warning';
        } else if (prioritas.toLowerCase() === 'rendah') {
          return 'text-primary';
        } else {
          return 'text-secondary';
        }
    },
    shortenTimeAktifitas(time) {
      return time
        .replace('tahun', 'yr')
        .replace('bulan', 'bln')
        .replace('hari', 'hr')
        .replace('jam', 'jam');
    },
    // handle string to array number series apexchart workers with total jobs
    updateSeriesWorkerWithTotalJobs(newData) {
      this.series = [];

      newData.forEach(item => {
        this.series.push({
          name: item.name,
          data: item.totalKerjaan.split(',').map(Number),
          color: this.getRandomColor() // Add a random color
        });
      });
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
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
});
</script>

<style scope>

  .breadJa{
    margin-top: 10px;
  }
  /*fade*/
  .fade-in-dashboard-home {
        animation: fadeIn 0.3s ease-in;
  }
  .fade-out-dashboard-home {
      animation: fadeOut 0.5s ease-out;
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

  .kategori-item {
    position: relative;
    cursor: pointer; /* Menjadikan kursor berubah saat dihover */
  }

  .kategori-item::after {
      content: attr(data-tooltip); /* Mengambil nilai dari atribut data-tooltip */
      position: absolute;
      top: 100%; /* Muncul di bawah elemen yang mengandung kategori */
      left: 50%; /* Tengah dari elemen yang mengandung kategori */
      transform: translateX(-50%); /* Pusatkan horizontal */
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
      opacity: 0; /* Sembunyikan tooltip secara default */
      transition: opacity 0.3s; /* Efek transisi */
  }

  .kategori-item:hover::after {
      opacity: 1; /* Tampilkan tooltip saat elemen dihover */
  }

  .scrollable-div {
    height: 365px; /* Atur tinggi sesuai kebutuhan */
    overflow: auto; /* Atur overflow menjadi auto untuk menampilkan scrollbar hanya jika diperlukan */
  }
  .scrollable-div::-webkit-scrollbar {
    width: 0; /* Atur lebar scrollbar menjadi 0 untuk menyembunyikannya */
    height: 0; /* Atur tinggi scrollbar menjadi 0 untuk menyembunyikannya */
  }
</style>