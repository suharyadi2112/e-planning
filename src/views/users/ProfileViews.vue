<template>
<main id="main" class="main">
    <section class="section profile">
      <div class="row">
        <div class="col-sm-10">
            <div class="pagetitle"> 
            <h1 class="text-left">Profile Users</h1>
                <nav>
                    <ol class="breadcrumb breadJa">
                    <router-link :to="{ name: '/'}" class="breadcrumb-item">Home</router-link>
                    <router-link :to="{ name: 'profileuser'}" class="breadcrumb-item">Profile User</router-link>
                    </ol>
                </nav>
            </div>
        </div> 
        <div class="col-sm-2 text-end">
            <router-link to="/">
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
                <img src="https://picsum.photos/300/300" alt="Profile" class="rounded-circle">
                <h2 style="text-align: center;">{{ items.name }} </h2>
                <br>
                <h3>Jabatan : {{ items.jabatan }}</h3>
                <div class="social-links mt-2">
                    <a :href="items.facebook" class="facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a :href="items.instagram" class="instagram" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a :href="items.linkedin" class="linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
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
              </ul>
            
              <div class="tab-content pt-2">
                <template v-if="!ProfileOne">
                    <div style="width:100%">
                        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                    </div>
                </template>
                <template v-else>
            
                    <div class="tab-pane fade profile-overview active show" id="profile-overview" role="tabpanel">
                    <h5 class="card-title">Profile Details</h5>

                    <div class="row">
                        <div class="col-lg-3 col-md-4 label">No.Telp</div>
                        <div class="col-lg-9 col-md-8">{{ formattedPhoneNumber }}</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-4 label">Status</div>
                        <div class="col-lg-9 col-md-8">{{ items.status ? items.status : '-' }}</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">{{ items.email ? items.email : '-' }}</div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-3 col-md-4 label">Role</div>
                        <div class="col-lg-9 col-md-8">{{ items.role ? items.role : '-' }}</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-4 label">Divisi</div>
                        <div class="col-lg-9 col-md-8">{{ items.divisi ? items.divisi : '-' }}</div>
                    </div>

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
            idUser: localStorage.getItem('userInfoId'),
            ProfileOne : false
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                this.ProfileOne = false;
                const response = await axios(`${this.baseUrl}/api/get_user/${this.idUser}`, {
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
            }
        },
    },
    
    computed: {
        formattedPhoneNumber() {
            if (this.items && this.items.handphone) {
                let cleanedPhoneNumber = this.items.handphone.startsWith('0') ? this.items.handphone.substring(1) : this.items.handphone;
                return '+62 ' + cleanedPhoneNumber;
            } else {
                return 'tidak ada data';
            }
        }
    },

}
</script>