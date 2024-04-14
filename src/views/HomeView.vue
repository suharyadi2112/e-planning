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
                        <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter  class="fade-in-dashboard-home"  ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.current_count' :duration='2  ' :autoinit='true' />
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalPengaduan.increase_percentage >= 0, 'text-danger': itemsTotalPengaduan.increase_percentage < 0}">
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
                        <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                       
                        <vue3-autocounter  class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.current_count' :duration='2  ' :autoinit='true' />
                        <span class="card-title text-muted small">{{ prioritas ? prioritas.charAt(0).toUpperCase() + prioritas.slice(1) : '-' }}</span>
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalPrioritas.increase_percentage >= 0, 'text-danger': itemsTotalPrioritas.increase_percentage < 0}">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPrioritas.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Prioritas Card -->

            <!-- Kategori Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card revenue-card">

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

                    <li v-for="(kategori, kategoriId) in itemsAddional.kategoriList" :key="kategoriId">
                        <a class="dropdown-item" href="#" @click="totalKategori(kategoriId)">{{ kategori }}</a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Kategori <span class="fade-in-dashboard-home">| {{ intervalKategori ? intervalKategori.charAt(0).toUpperCase() + intervalKategori.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-sort-alpha-up"></i>
                    </div>
                    <div class="ps-3">
                      <h6>
                        <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter  class="fade-in-dashboard-home" style="margin-right: 6px;"  ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.current_count' :duration='2  ' :autoinit='true' />
                        
                        <span class="card-title text-muted small fade-in-dashboard-home kategori-item" :data-tooltip="itemsTotalKategori.kategori">
                            {{ itemsTotalKategori.kategori ? itemsTotalKategori.kategori.substring(0, 10) : '' }}{{ itemsTotalKategori.kategori && itemsTotalKategori.kategori.length > 10 ? '...' : '' }}
                        </span>
                       
                      </h6>
                      <span class="small pt-1 fw-bold" :class="{'text-success': itemsTotalKategori.increase_percentage >= 0, 'text-danger': itemsTotalKategori.increase_percentage < 0}">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalKategori.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Revenue Card -->

            <!-- Customers Card -->
            <div class="col-xxl-3 col-xl-12">

              <div class="card info-card customers-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Customers <span>| This Year</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>1244</h6>
                      <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div><!-- End Customers Card -->

            <div class="col-xxl-6 col-xl-12">
              <div class="card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Recent Activity <span>| Today</span></h5>

                    <div class="activity">

                      <div class="activity-item d-flex">
                        <div class="activite-label">32 min</div>
                        <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                        <div class="activity-content">
                          Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
                        </div>
                      </div><!-- End activity item-->

                      <div class="activity-item d-flex">
                        <div class="activite-label">56 min</div>
                        <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                        <div class="activity-content">
                          Voluptatem blanditiis blanditiis eveniet
                        </div>
                      </div><!-- End activity item-->
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

export default defineComponent({
  name: 'DemoTes',
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  data() {
    return {
      itemsTotalPengaduan: {},
      itemsTotalPrioritas: {},
      itemsTotalKategori: {},
      interval: 'month',
      intervalPrioritas: 'month',
      intervalKategori: 'month',
      prioritas: 'tinggi',
      kategori: '-',
      itemsAddional: {},
      baseUrl: process.env.BE_APP_BASE_URL,
      token: localStorage.getItem('tokenCallIT'),
      
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
              this.fetchDataAdditonal()
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
                },
            })

            this.itemsTotalPengaduan = response.data.data.totalPersenPengaduan;
            this.itemsTotalPrioritas = response.data.data.totalPersenPrioritas;
            this.itemsTotalKategori = response.data.data.totalPersenKategori;

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
</style>