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
  
  /* Filter dropdown */
  .filter {
    position: absolute;
    right: 0px;
    top: 15px;
  }

  .filter .icon {
    color: #aab7cf;
    padding-right: 20px;
    padding-bottom: 5px;
    transition: 0.3s;
    font-size: 16px;
  }

  .filter .icon:hover,
  .filter .icon:focus {
    color: #4154f1;
  }

  .filter .dropdown-header {
    padding: 8px 15px;
  }

  .filter .dropdown-header h6 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #aab7cf;
    margin-bottom: 0;
    padding: 0;
  }

  .filter .dropdown-item {
    padding: 8px 15px;
  }

  /* Info Cards */
  .info-card {
    padding-bottom: 10px;
  }

  .info-card h6 {
    font-size: 28px;
    color: #012970;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  
  .card-icon {
    font-size: 32px;
    line-height: 0;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .sales-card .card-icon {
    color: #4154f1;
    background: #f6f6fe;
  }

  .revenue-card .card-icon {
    color: #2eca6a;
    background: #e0f8e9;
  }

  .customers-card .card-icon {
    color: #ff771d;
    background: #ffecdf;
  }

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

    /* Activity */
  .activity {
    font-size: 14px;
  }

  .activity .activity-item .activite-label {
    color: #888;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    min-width: 64px;
  }

  .activity .activity-item .activite-label::before {
    content: "";
    position: absolute;
    right: -11px;
    width: 4px;
    top: 0;
    bottom: 0;
    background-color: #eceefe;
  }

  .activity .activity-item .activity-badge {
    margin-top: 3px;
    z-index: 1;
    font-size: 11px;
    line-height: 0;
    border-radius: 50%;
    flex-shrink: 0;
    border: 3px solid #fff;
    flex-grow: 0;
  }

  .activity .activity-item .activity-content {
    padding-left: 10px;
    padding-bottom: 20px;
  }

  .activity .activity-item:first-child .activite-label::before {
    top: 5px;
  }

  .activity .activity-item:last-child .activity-content {
    padding-bottom: 0;
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