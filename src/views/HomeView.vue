<template>

  <main id="main" class="main">

     <section class="section">
      <div class="row">
        <div class="col-lg-12">

            <div class="row">
              <div class="col-sm-9">
                <div class="pagetitle"> 
                  <h1 class="text-left">Pengaduan</h1>
                  <nav>
                    <ol class="breadcrumb breadJa">
                      <router-link :to="{ name: '/'}" class="breadcrumb-item">Home</router-link>
                    </ol>
                  </nav>
                </div>
              </div> 
              <div class="col-3">
              </div>
            </div>
                
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

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Sales <span>| Today</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>145</h6>
                          <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div><!-- End Sales Card -->

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
// import axios from 'axios';

export default {
  components:{
  },
  data() {
    return {
      items: [],
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
               
            ]);
            
        } catch (error) {
            alert("server error")
            console.error('Error:', error);
        }
    },
    
  },
}
</script>

<style scope>


  .breadJa{
    margin-top: 10px;
  }
  /*fade*/
  .fade-in-dashboard {
        animation: fadeIn 0.2s ease-in;
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