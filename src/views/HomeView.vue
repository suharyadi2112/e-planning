<template>

  <main id="main" class="main">

     <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <!-- Sales Card -->
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
                  <h5 class="card-title fade-in-dashboard">Pengaduan <span class="fade-in-dashboard">| {{ itemsTotalPengaduan.interval ? itemsTotalPengaduan.interval.charAt(0).toUpperCase() + itemsTotalPengaduan.interval.slice(1) : '-' }}</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-flag"></i>
                    </div>
                    <div class="ps-4 fade-in-dashboard">
                      <h6>
                        <span class="card-title text-muted small">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.previous_count' :duration='2' :autoinit='true' /> &nbsp;</span>
                        <vue3-autocounter  class="fade-in-dashboard"  ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.current_count' :duration='2  ' :autoinit='true' />
                      </h6>
                      <span class="text-success small pt-1 fw-bold">
                        <vue3-autocounter ref='counter' :startAmount='0' :endAmount='itemsTotalPengaduan.increase_percentage' suffix='%' :duration='2' :autoinit='true' />
                      </span> <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <!-- End Sales Card -->

            <!-- Revenue Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card revenue-card">

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
                  <h5 class="card-title">Revenue <span>| This Month</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

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
      interval: 'month',
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
                },
            })

            this.itemsTotalPengaduan = response.data.data.totalPersenPengaduan;

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
    }
    
  },
});
</script>

<style scope>

  .breadJa{
    margin-top: 10px;
  }
  /*fade*/
  .fade-in-dashboard {
        animation: fadeIn 0.3s ease-in;
  }
  .fade-out-dashboard {
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
</style>