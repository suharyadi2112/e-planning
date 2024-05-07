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
                      </ol>
                    </nav>
                  </div>
                </div> 
                <div class="col-3">
                    <router-link to="/add-pengaduan" class="btn btn-info btn-sm shadow AddPengaduan" role="button">
                        <i class="bi bi-plus-circle"></i> add pengaduan
                    </router-link>
                </div>
              </div>
              <!-- table -->
                <div class="row">
                  <div class="col-4 mb-0 pb-0 pt-2">
                    <div class="dropdown">
                      <button class="btn btn-primary dropdown-toggle btn-sm shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Entries
                      </button>
                      <ul class="dropdown-menu shadow-sm">
                        <li v-for="option in entriesOptions" :key="option">
                          <a class="dropdown-item" style="cursor: pointer;" @click="changeEntries(option)">{{ option }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-8 GridSearchBox">
                    <form class="row p-0" @submit.prevent="searchData">
                      <div class="input-group mb-3 Search ms-auto searchBox">
                        <input type="text" v-model="searchQuery" class="form-control shadow-sm form-control-sm" placeholder="judul pengaduan" aria-label="search" aria-describedby="button-addon2">
                        <button class="btn btn-outline-primary shadow-sm searchBoxText btn-sm" type="submit" id="button-addon2"><i class="bi bi-search"></i></button>
                        <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvanceSearch" aria-expanded="false" aria-controls="collapseAdvanceSearch">
                          <i class="bi bi-three-dots"></i>
                        </button>
                         <button type="button" class="btn btn-warning btn-sm" @click="resetSearchParams"><i class="bi bi-recycle"></i> Reset all</button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- multi search -->
                <div class="collapse" id="collapseAdvanceSearch">
                <div class="row g-6 bg-secondary pt-2 m-2 rounded input-group-sm" >
                  <div class="col-sm">
                      <select class="form-select mb-2 form-select-sm" v-model="pelaporaAS" id="specificSizeSelect" name="pelapor">
                        <option value="" selected>Pelapor...</option>
                        <option v-for="(pelapor, index) in itemsAddional.pelaporList" :key="index" :value="index ? index : ''">
                            {{ pelapor ? pelapor.charAt(0).toUpperCase() + pelapor.slice(1) : '-' }}
                        </option>
                      </select>
                      
                  </div>
                  <div class="col-sm">
                      <select class="form-select mb-2 form-select-sm"  v-model="lantaiAS" id="specificSizeSelect">
                        <option value="" selected>Lantai...</option>
                        <option v-for="(lantai, index) in itemsAddional.lantaiList" :key="index" :value="lantai ? lantai : ''">
                            {{ lantai ? lantai.charAt(0).toUpperCase() + lantai.slice(1) : '-' }}
                        </option>
                      </select>
                  </div>
                  <div class="col-sm">
                      <select class="form-select mb-2 form-select-sm"  v-model="kategoriAS" id="specificSizeSelect">
                        <option value="" selected>Kategori...</option>
                        <option v-for="(kategori, index) in itemsAddional.kategoriList" :key="index" :value="index ? index : ''">
                            {{ kategori ? kategori.charAt(0).toUpperCase() + kategori.slice(1) : '-' }}
                        </option>
                      </select>
                  </div>
                  <div class="col-sm">
                      <select class="form-select mb-2 form-select-sm"  v-model="prioritasAS" id="specificSizeSelect">
                        <option value="" selected>Prioritas...</option>
                        <option v-for="(prioritas, index) in itemsAddional.prioritasList" :key="index" :value="prioritas ? prioritas : ''">
                            {{ prioritas ? prioritas.charAt(0).toUpperCase() + prioritas.slice(1) : '-' }}
                        </option>
                      </select>
                  </div>
                  <div class="col-sm">
                      <select class="form-select mb-2 form-select-sm"  v-model="statusAS" id="specificSizeSelect">
                        <option value="" selected>Status...</option>
                        <option v-for="(status, index) in itemsAddional.statusPelaporan" :key="index" :value="status ? status : ''">
                            {{ status ? status.charAt(0).toUpperCase() + status.slice(1) : '-' }}
                        </option>
                      </select>
                  </div>
                  <div class="col-auto">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="submit" class="btn btn-outline-light btn-sm" @click="searchDataAddtional"><i class="bi bi-search"></i> Search</button>
                    </div>
                  </div>
                  </div>
                </div>
                
                <div class="table-responsive">
                  <table class="table table-hover table-bordered shadow-sm caption-top table-sm">
                    <caption class="pb-2 pt-0">List pengaduan</caption>
                    <thead class="table-primary">
                      <tr style="vertical-align:middle; text-align: center;">
                        <th scope="col" style="text-align: center;">#</th>
                        <th scope="col">Kode</th>
                        <th scope="col">Pelapor</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Lantai</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Prioritas</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr v-if="loading">
                        <td colspan="10">
                          <div class="d-flex justify-content-center text-primary m-3">
                            <strong role="status" class="pt-1" style="padding-right: 2rem;">Loading...</strong>
                            <div class="spinner-border shadow" aria-hidden="true"></div>
                          </div>
                        </td>
                      </tr>
                      <tr v-else v-for="item in items" :key="item.id" style="vertical-align:middle;" class="fade-in-pengaduan-view">
                        <th scope="row"  width="5%;" style="text-align: center;">{{ item.number }}</th>
                        <td nowrap="" width="10px;" style="text-align: center;"  @click="toggleExpandNameKode(item.id)">
                            <router-link :to="'/detail-page-pengaduan/' + item.id">
                                <span v-if="!expandedNameKode.includes(item.id)">
                                  {{ shortenNameKode(item.kode_laporan) }}
                                </span>
                                <span v-else>
                                  {{ item.kode_laporan }}
                                </span>
                            </router-link>
                        </td>
                        <td nowrap=""  width="10px;" style="text-align: center;" >
                          {{ item.pelapor && item.pelapor.name ? item.pelapor.name.charAt(0).toUpperCase() + item.pelapor.name.slice(1) : '-' }}
                        </td>
                      
                        <td style="text-align: justify; width:20%;" @click="toggleExpandName(item.id)">
                          <span v-if="!expandedName.includes(item.id)">
                            {{ shortenName(item.judul_pengaduan) }}
                          </span>
                          <span v-else>
                            {{ item.judul_pengaduan }}
                          </span>
                        </td>

                        <td nowrap=""  width="5px;" style="text-align: center;" >{{ item.lantai }}</td>
                        <td nowrap=""  width="10px;" style="text-align: center;" >
                        
                          {{ item.kategoripengaduan ? item.kategoripengaduan.nama : '-' }}
                          
                        </td>

                        <td nowrap="" width="10px;" style="text-align: center;">
                            <span style="width:60px;" :class="{'badge bg-danger': item.prioritas.toLowerCase() === 'tinggi', 'badge bg-warning': item.prioritas.toLowerCase() === 'sedang', 'badge bg-primary': item.prioritas.toLowerCase() !== 'tinggi' && item.prioritas.toLowerCase() !== 'sedang'}">{{ item.prioritas.toLowerCase() }}</span>
                        </td>

                        <td nowrap="" width="10px;" style="text-align: center;">
                            <span style="width:70px;" :class="{'badge bg-secondary': item.status_pelaporan.toLowerCase() === 'waiting', 'badge bg-warning': item.status_pelaporan.toLowerCase() === 'progress', 'badge bg-success': item.status_pelaporan.toLowerCase() !== 'waiting' && item.status_pelaporan.toLowerCase() !== 'progress'}">{{ item.status_pelaporan.toLowerCase() }}</span>
                        </td>

                        <td nowrap="" width="10px;" style="text-align: center;">
                            
                            <button @click="infoDetailPengaduan(item.judul_pengaduan, item.lantai, item.lokasi, item.nomor_handphone, item.dekskripsi_pelaporan, item.tanggal_pelaporan, item.tanggal_selesai)" class="btn btn-dark btn-sm m-1 shadow" :disabled="OpenUpdateKatPengBtn" title="Update">
                              <i class="bi bi-eye"></i>
                            </button>

                            <router-link :to="'/edit-pengaduan/'+item.id" class="btn btn-info btn-sm shadow text-warning-emphasis" role="button">
                              <i class="bi bi-pencil"></i>
                            </router-link>

                            <button @click="DeletePengaduan(item.id)" class="btn btn-outline-danger btn-sm m-1 shadow" :disabled="DeletePengaduanBtn" title="Delete">
                              <i class="bi bi-trash"></i>
                            </button>
                        </td>
                      </tr>
                      <tr v-if="!loading && items.length === 0">
                        <td colspan="10" class="text-center">No results found.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- table -->
                <div class="row">
                  <div class="col-9">
                    <!-- Showing Entries Message -->
                    <p class="text-muted">
                      Showing {{ startEntry }} to {{ endEntry }} of {{ totalItems }} entries
                    </p>
                  </div>
                <div class="col-3">
                  <!-- Pagination -->
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end">
                        <li class="page-item shadow-sm" :class="{ 'disabled': currentPage === 1 }">
                          <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
                        </li>
                        <li class="page-item shadow-sm" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage == page }">
                          <a class="page-link shadow-sm" href="#" @click.prevent="setPage(page)">{{ page }}</a>
                        </li>
                        <li class="page-item shadow-sm" :class="{ 'disabled': currentPage === totalPages }">
                          <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
                        </li>
                      </ul>
                    </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main><!-- End #main -->

</template> 

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  components:{
  },
  data() {
    return {
      items: [],
      itemsAddional: [],
      currentPage: 1,
      totalPages: 0,
      searchQuery: '',
      entriesOptions: [5, 10 ,20, 50, 100], // Add entries options untuk dropdown
      selectedEntries: 5, // Initial selected value for entries dropdown
      baseUrl: process.env.BE_APP_BASE_URL,
      token: localStorage.getItem('tokenCallIT'),
      loading: false,

      startEntryData : 0,
      endEntryData: 0,
      totalItemsData : 0, 

      OpenUpdateKatPengBtn : false,
      FetchUpdateData : false,

      // advance search
      pelaporaAS: '',
      lantaiAS: '',
      kategoriAS: '',
      prioritasAS: '',
      statusAS: '',
      
      FormDataUpdate : {}, //data for update
      LoadKatpeng: true,

      DeletePengaduanBtn : false,
      expandedName: [], //judul expand

      expandedNameKode: [],//kode expand
    }
  },
  created() { //ambil param
    const searchParams = ['pelaporaAS', 'lantaiAS', 'kategoriAS', 'prioritasAS', 'statusAS', 'searchQuery', 'currentPage'];
    searchParams.forEach(key => {
        if (key === 'currentPage') {
            this[key] = sessionStorage.getItem(key) || 1;
        } else {
            this[key] = sessionStorage.getItem(key) || '';
        }
    });
  },
  mounted() {
    this.fetchBothDashboard();
  },
  computed: {
    startEntry() {
      return this.startEntryData
    },
    endEntry() {
      return this.endEntryData
    },
    totalItems(){
      return this.totalItemsData
    },
  },
  methods: {
    async fetchBothDashboard() {
        try {
            // Menjalankan kedua metode fetch async secara paralel
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
        this.loading = true; //loading fetch
        const response = await axios(`${this.baseUrl}/api/get_pengaduan/`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          params: {
            page: this.currentPage,
            search: this.searchQuery,
            per_page: this.selectedEntries,
            //advance search
            pelapor_id: this.pelaporaAS,
            lantai: this.lantaiAS,
            kategori_pengaduan_id: this.kategoriAS,
            prioritas: this.prioritasAS,
            status_pelaporan: this.statusAS,
          },
        });

        const datas = response.data;
        datas.data.data = datas.data.data.map((item, index) => {
          return {
            ...item,
            // Nomor urut dimulai dari 1 untuk setiap halaman
            // Anda dapat menghitung nomor urut dengan rumus (currentPage - 1) * selectedEntries + index + 1
            // Misalnya, jika halaman pertama dan 5 entri per halaman, maka nomor urut = index + 1
            // Jika halaman kedua, nomor urut = 5 + index + 1, dan seterusnya
            number: (this.currentPage - 1) * this.selectedEntries + index + 1,
          };
        });


        this.items = datas.data.data;
        this.totalPages = Math.ceil(datas.data.total / this.selectedEntries);

        console.log(this.items)

        // info entries
        this.startEntryData = datas.data.from 
        this.endEntryData = datas.data.to 
        this.totalItemsData = datas.data.total 

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
    searchData() {
      sessionStorage.setItem('searchQuery', this.searchQuery);
      this.currentPage = 1;
      this.fetchData();
    },
    prevPage() {
      if (this.currentPage > 1) {
        sessionStorage.setItem('currentPage', this.currentPage);
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        sessionStorage.setItem('currentPage', this.currentPage);
        this.fetchData();
      }
    },
    setPage(page) {
      this.currentPage = page;
      sessionStorage.setItem('currentPage', this.currentPage);
      this.fetchData();
    },
    changeEntries(option) {
      this.currentPage = 1;// ulangi currentpage, jika pilihan change entries
      this.selectedEntries = option;
      sessionStorage.setItem('currentPage', this.currentPage);
      this.fetchData();
    },
    refreshData(){
      this.fetchData();
    },
    
    async searchDataAddtional() {//search additional
      try {
        const searchParams = {
            pelaporaAS: this.pelaporaAS,
            lantaiAS: this.lantaiAS,
            kategoriAS: this.kategoriAS,
            prioritasAS: this.prioritasAS,
            statusAS: this.statusAS
        };

        Object.keys(searchParams).forEach(key => {
            sessionStorage.setItem(key, searchParams[key]);
        });
        await this.fetchData();
      } catch (error) {
        console.error(error,"error additional");
      }
    },

    resetSearchParams() {
        const searchParamsReset = ['pelaporaAS', 'lantaiAS', 'kategoriAS', 'prioritasAS', 'statusAS','searchQuery', 'currentPage'];
        searchParamsReset.forEach(key => {
            sessionStorage.removeItem(key);
        });
        searchParamsReset.forEach(key => {
            this[key] = '';
            if (key === 'currentPage') {
              this[key] = sessionStorage.getItem(key) || 1;
            } else {
              this[key] = sessionStorage.getItem(key) || '';
            }
        });
     
        this.fetchData();
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

    //detail
    infoDetailPengaduan(judul, lantai, lokasi, handphone, deskripsi, tglpelaporan, tglselesai) {
        this.$swal({
            title: `<strong>Detail Pengaduan</strong>`,
            icon: "info",
            html: `
                <br>
                <div style="text-align:left;">
                <div class="alert alert-success" role="alert">
                    <p>${judul}.</p>
                </div>
                <table class="table table-striped">
                    <tr>
                        <th scope="col">Lantai</th>
                        <th scope="col">:</th>
                        <td>${lantai}</td>
                    </tr>
                    <tr>
                        <th scope="col">Lokasi</th>
                        <th scope="col">:</th>
                        <td>${lokasi}</td>
                    </tr>
                    <tr>
                        <th scope="col">Handphone</th>
                        <th scope="col">:</th>
                        <td>${handphone}</td>
                    </tr>
                    <tr>
                        <th scope="col">Tanggal Pelaporan</th>
                        <th scope="col">:</th>
                        <td>${tglpelaporan ? this.formatDate(tglpelaporan) : '-'}</td>
                    </tr>
                    <tr>
                        <th scope="col">Tanggal Selesai</th>
                        <th scope="col">:</th>
                        <td>${tglselesai ? tglselesai : '-'}</td>
                    </tr>
                </table>
                <div class="alert alert-primary" role="alert">
                    <h4 class="alert-heading"><b>Deskripsi Pengaduan!</b></h4><hr style="padding-top:10px;">
                    <p>${deskripsi}</p>
                </div>
                
            </div>`,
            showCloseButton: true,
            focusConfirm: false,
        });
    },

    toggleExpandName(itemId) {
      if (this.expandedName.includes(itemId)) {
        this.expandedName = this.expandedName.filter(id => id !== itemId);
      } else {
        this.expandedName.push(itemId);
      }
    },
    shortenName(name) {
      if (name.length > 20) {
        return name.substring(0, 20) + ' ... '; 
      } else {
        return name;
      }
    },

    toggleExpandNameKode(itemId) {
      if (this.expandedNameKode.includes(itemId)) {
        this.expandedNameKode = this.expandedNameKode.filter(id => id !== itemId);
      } else {
        this.expandedNameKode.push(itemId);
      }
    },
    shortenNameKode(name) {
      if (name.length > 10) {
        return name.substring(0, 1) + '...' + name.substring(name.length - 5);
      } else {
        return name;
      }
    },

    // ------------------update section---------------------
    async openUpdateKatPeng(id){
      this.OpenUpdateKatPengBtn = true
      this.FetchUpdateData = false
      this.LoadKatpeng = false
      try {
          const response = await axios.get(`${this.baseUrl}/api/get_kategori_pengaduan/${id}`,{
              headers: {
                  'Authorization': `Bearer ${this.token}`,
              },
          });
          this.FormDataUpdate = response.data.data
          this.LoadKatpeng = true
          console.log(this.FormDataUpdate,"tes")
          return response
          
      } catch (error) {
        this.Toasttt("Server Error", "error", "")
      } finally { 
        this.OpenUpdateKatPengBtn = false
      }
    },

    DeletePengaduan(id){
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        showLoaderOnConfirm: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        preConfirm: async () => {
          try {
              this.DeletePengaduanBtn = true
              const response = await axios.delete(`${this.baseUrl}/api/delete_pengaduan/${id}`,  {
                headers: {
                  'Authorization': `Bearer ${this.token}`,
                },
              });
              
              this.DeletePengaduanBtn = false
              return response

            } catch (error) {
              if (error.response && error.response.status == 400) {
                this.$swal.showValidationMessage(`
                  Request failed: ${error.response.data.message}
                `);
              }

              if (error.response && error.response.status == 500 || error.response.status == 501) {
                    this.Toasttt('Oops. Pengaduan Not Found.', 'error');
                    this.$router.push('/pengaduan');
                }
              console.error(error,"check error");
            }
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire({
            title: "Success!",
            text: "Success Delete Data",
            icon: "success",
          }).then(() => {
            this.refreshData()
          })
        }
      });
    },

    formatDate(date) {
      return date ? moment.utc(date).format('YYYY-MM-DD HH:mm') : '-';
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
  .fade-in-pengaduan-view {
        animation: fadeIn 0.2s ease-in;
  }
  .fade-out-pengaduan-view {
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