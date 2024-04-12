<template>
<main id="main" class="main">
    <section class="section profile">
      <div class="row">
        <div class="col-sm-7">
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
        <div class="col-sm-5 text-end">
            <router-link to="/pengaduan">
                <button  class="btn btn-warning btn-sm m-1 shadow" title="Back to dashboard pengaduan">
                    <i class="bi bi-arrow-left"> dashboard</i> 
                </button>
            </router-link>
            <router-link :to="{ name: 'editpengaduan', params: { id: this.$route.params.id } }" >
                <button  class="btn btn-outline-primary btn-sm m-1 shadow" title="Go to edit pengaduan">
                    <i class="bi bi-arrow-left"> go to edit pengaduan</i> 
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
                <div style="text-align: center;" class="fade-in-worker-single">
                    <img src="../../../public/assets/img/logologin.png" alt="Profile" class="rounded-circle">
                    <h2>{{ items.kode_laporan }} </h2>
                    <br>
                    <div class="alert" 
                        :class="{
                            'alert-danger': items.prioritas.toLowerCase() === 'tinggi',
                            'alert-warning': items.prioritas.toLowerCase() === 'sedang',
                            'alert-primary': items.prioritas.toLowerCase() !== 'tinggi' && items.prioritas.toLowerCase() !== 'sedang'
                        }" 
                        role="alert">
                        Prioritas : <b>{{ items.prioritas.toUpperCase() }}</b>
                    </div>

                    <div class="alert" 
                        :class="{
                            'alert-warning': items.status_pelaporan.toLowerCase() === 'progress',
                            'alert-success': items.status_pelaporan.toLowerCase() === 'done',
                            'alert-secondary': items.status_pelaporan.toLowerCase() === 'waiting',
                            'alert-primary': items.status_pelaporan.toLowerCase() !== 'progress' && items.status_pelaporan.toLowerCase() !== 'done' && items.status_pelaporan.toLowerCase() !== 'waiting'
                        }" 
                        role="alert">
                        <ProgressBar mode="indeterminate" style="height: 4px;" v-if="changeStatusLoading"></ProgressBar> 
                        <span class="fade-in-worker-single" v-else> Status Pelaporan : <b>{{ items.status_pelaporan.toUpperCase() }}</b></span>
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
              <ul v-if="ProfileOne" class="nav nav-tabs nav-tabs-bordered fade-in-worker-single" role="tablist">
                <li class="nav-item" role="pengaduanTab">
                  <button @click="navigateToAssignToOverview('profile-overview')" class="nav-link" :class="{ 'active': activeTab === 'profile-overview' }" data-bs-toggle="tab" data-bs-target="#profile-overview" aria-selected="true" role="tab"><i class="bi bi-eye"></i> Overview</button></li>

                <li class="nav-item" role="pengaduanTab">
                  <button @click="navigateToAssignToOverview('assign-to-overview')" class="nav-link" :class="{ 'active': activeTab === 'assign-to-overview' }" data-bs-toggle="tab" data-bs-target="#assign-to-overview" aria-selected="true" role="tab"><i class="bi bi-people-fill"></i> Assign To</button></li>

                <li class="nav-item" role="pengaduanTab">
                  <button @click="navigateToAssignToOverview('picture-pre')" class="nav-link" :class="{ 'active': activeTab === 'picture-pre' }" data-bs-toggle="tab" data-bs-target="#picture-pre" aria-selected="true" role="tab"><i class="bi bi-images"></i> Picture Pre</button></li>

                <li class="nav-item" role="pengaduanTab">
                  <button @click="navigateToAssignToOverview('picture-post')" class="nav-link" :class="{ 'active': activeTab === 'picture-post' }" data-bs-toggle="tab" data-bs-target="#picture-post" aria-selected="true" role="tab"><i class="bi bi-image-alt"></i> Picture Post</button></li>

                <li class="nav-item" role="pengaduanTab">
                  <button @click="navigateToAssignToOverview('update-status')" class="nav-link bg-warning text-black" :class="{ 'active': activeTab === 'update-status' }" data-bs-toggle="tab" data-bs-target="#update-status" aria-selected="true" role="tab"><i class="bi bi-patch-question-fill"></i> <b>Status & Prioritas</b></button></li>
              </ul>
            
              <div class="tab-content pt-2">
                <template v-if="!ProfileOne">
                    <div style="width:100%">
                        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                    </div>
                </template>
                <template v-else>

                    <!-- OVERVIEW DETAIL PENGADUAN -->
                    <div class="tab-pane fade-in profile-overview fade-in-worker-single" :class="{ 'active': activeTab === 'profile-overview' }" id="profile-overview" role="tabpanel">
                        <h5 class="card-title">Pengaduan Details</h5>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Pelapor</div>
                            <div class="col-lg-9 col-md-8">{{ items.pelapor_id ? items.pelapor.name.toUpperCase() : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Judul Pengaduan</div>
                            <div class="col-lg-9 col-md-8" style="text-align: justify;">{{ items.judul_pengaduan ? items.judul_pengaduan : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Deskripsi Pengaduan</div>
                            <div class="col-lg-9 col-md-8" style="text-align: justify;">{{ items.dekskripsi_pelaporan ? items.dekskripsi_pelaporan : '-' }}</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Prioritas</div>
                            <div class="col-lg-9 col-md-8">
                                <span style="width:90px;" :class="{
                                    'badge bg-danger': items.prioritas && items.prioritas.toLowerCase() === 'tinggi',
                                    'badge bg-warning': items.prioritas && items.prioritas.toLowerCase() === 'sedang',
                                    'badge bg-primary': !items.prioritas || (items.prioritas.toLowerCase() !== 'tinggi' && items.prioritas.toLowerCase() !== 'sedang')
                                }">{{ items.prioritas ? items.prioritas.toUpperCase() : '-' }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-4 label">Status Pelaporan</div>
                            <div class="col-lg-9 col-md-8"><span style="width:90px;" :class="{'badge bg-secondary': items.status_pelaporan.toLowerCase() === 'waiting', 'badge bg-warning': items.status_pelaporan.toLowerCase() === 'progress', 'badge bg-success': items.status_pelaporan.toLowerCase() !== 'waiting' && items.status_pelaporan.toLowerCase() !== 'progress'}">{{ items.status_pelaporan.toUpperCase() }}</span></div>
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
                            <div class="col-lg-3 col-md-4 label">No.Telp</div>
                            <div class="col-lg-9 col-md-8">{{ formattedPhoneNumber }}</div>
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

                    <!-- WORKER ASSIGN -->
                    <div class="tab-pane fade-in-worker-single assign-to-overview" :class="{ 'active': activeTab === 'assign-to-overview' }" id="assign-to-overview" role="tabpanel">
                        <div class="col-12" v-if="errorMessages.length > 0">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="clearErrorMessages"></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <h3 class="card-title">Workers on this job <span>| {{ items.workers.length }} Orang</span></h3>
                            </div> 
                            <div class="col-7">
                                <div class="input-group" style="margin-top:5px">
                                    <span class="input-group-text text-white bg-success" id="basic-addon1"><i class="bi bi-person-check-fill"></i></span>
                                    <VueMultiselect
                                    v-model="selectedValuesWorkers"
                                    placeholder="Select your workers"
                                    :options="itemUserWorkers"
                                    :resetAfter="true"
                                    :custom-label="nameWithJabatan"
                                    label="name"
                                    track-by="id"
                                    class="form-control"
                                    style="cursor: pointer; padding:0px; "
                                    @select="handleSubmitWorker"
                                    />
                                </div>
                                <small class="text-muted" style="font-size:12px; text-align: justify;"><i>#note tambah workers bisa dilakukan disini.</i></small>
                            </div>
                        </div>
                        <table class="table table-hover shadow-sm">
                            <thead>
                                <tr class="table-primary">
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Handphone</th>
                                    <th scope="col">Jabatan</th>
                                    <th scope="col" class="text-center"><i class="bi bi-person-fill-gear"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="loadingAddWorker">
                                    <td colspan="10">
                                        <div class="d-flex justify-content-center text-primary m-3">
                                        <strong role="status" class="pt-1" style="padding-right: 2rem;">Loading...</strong>
                                        <div class="spinner-border shadow" aria-hidden="true"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="itemWorker in items.workers" :key="itemWorker.id" class="fade-in-worker-single">
                                    <td style="vertical-align:middle;">{{ itemWorker.name }}</td>
                                    <td style="vertical-align:middle;">{{ itemWorker.email }}</td>
                                    <td style="vertical-align:middle;">{{ itemWorker.handphone }}</td>
                                    <td style="vertical-align:middle;">{{ itemWorker.jabatan }}</td>
                                    <td class="text-center" style="vertical-align:middle;">
                                        <button @click="DeleteWorkerSingle(itemWorker.id)" class="btn btn-outline-danger btn-sm m-1 shadow" title="Delete">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="!loadingAddWorker && items.workers.length === 0">
                                    <td colspan="4" class="text-center"><i class="bi bi-emoji-tear"></i> This report has not been assigned to any workers yet.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- PICTURE PRE -->
                    <div class="tab-pane fade-in-worker-single picture-pre" :class="{ 'active': activeTab === 'picture-pre' }" id="picture-pre" role="tabpanel">
                        <div class="col-12" v-if="errorMessages.length > 0">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="clearErrorMessages"></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <h3 class="card-title">Picture Pre <span>| {{ items.detailpengaduan.filter(item => item.tipe === 'pre').length }} picture</span></h3>
                            </div> 
                            <div class="col-sm-7 pt-md-2 pb-3">
                                <button class="btn btn-info btn-sm shadow buttonAddPicturePre" @click="addPicturePre()" role="button">
                                    <i class="bi bi-plus-circle"></i> add picture pre
                                </button>
                            </div>
                        </div>
                        <div v-if="loadingAddWorker" class="d-flex justify-content-center text-primary m-3">
                            <strong role="status" class="pt-1" style="padding-right: 2rem;">Loading...</strong>
                            <div class="spinner-border shadow" aria-hidden="true"></div>
                        </div>
                        <template v-else> 
                            <div v-if="items.detailpengaduan.filter(item => item.tipe === 'pre').length > 0" class="gallery fade-in-worker-single">
                                <template v-for="itemDetailPengaduan in items.detailpengaduan" :key="itemDetailPengaduan.id" >
                                    <template v-if="itemDetailPengaduan.tipe === 'pre'">
                                        <div class="gallery-item" >
                                            <!-- hanya picture pre yang ditampikan -->
                                            <img v-if="itemDetailPengaduan.tipe === 'pre'" :src="`${baseUrl}/storage/${itemDetailPengaduan.picture}`" alt="Photo pengaduan pre">
                                            <div class="overlay">
                                                <div class="overlay-content">
                                                    <a @click="PopUpPictures(itemDetailPengaduan.picture, items.lokasi, items.lantai, itemDetailPengaduan.tipe)" class="text-white" style="cursor: zoom-in;">Popup this picture</a>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </div>
                            <div v-else class="alert alert-info" role="alert" style="text-align:center;">
                            <i class="bi bi-emoji-dizzy"></i> No photos picture pre!
                            </div>
                        </template>

                    </div>

                    <!-- PICTURE POST -->
                    <div class="tab-pane fade-in-worker-single picture-post" :class="{ 'active': activeTab === 'picture-post' }" id="picture-post" role="tabpanel">

                        <div class="col-12" v-if="errorMessages.length > 0">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="clearErrorMessages"></button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-5">
                                 <h3 class="card-title">Picture Post <span>| {{ items.detailpengaduan.filter(item => item.tipe === 'post').length }} picture</span></h3>
                            </div> 
                            <div class="col-sm-7 pt-md-2 pb-3">
                                <button class="btn btn-info btn-sm shadow buttonAddPicturePost" @click="addPicturePost()" role="button">
                                    <i class="bi bi-plus-circle"></i> add picture post
                                </button>
                            </div>
                        </div>
                        <div v-if="loadingAddWorker" class="d-flex justify-content-center text-primary m-3">
                            <strong role="status" class="pt-1" style="padding-right: 2rem;">Loading...</strong>
                            <div class="spinner-border shadow" aria-hidden="true"></div>
                        </div>
                        <template v-else> 
                            <div v-if="items.detailpengaduan.filter(item => item.tipe === 'post').length > 0" class="gallery fade-in-worker-single">
                                <template v-for="itemDetailPengaduan in items.detailpengaduan" :key="itemDetailPengaduan.id" >
                                    <template v-if="itemDetailPengaduan.tipe === 'post'">
                                        <div class="gallery-item" >
                                            <!-- hanya picture pre yang ditampikan -->
                                                <img :src="`${baseUrl}/storage/${itemDetailPengaduan.picture}`" alt="Photo pengaduan post">
                                                <div class="overlay">
                                                    <div class="overlay-content">
                                                        <a @click="PopUpPictures(itemDetailPengaduan.picture, items.lokasi, items.lantai, itemDetailPengaduan.tipe)" class="text-white" style="cursor: zoom-in;">Popup this picture</a>
                                                    </div>
                                                </div>
                                        </div>
                                    </template>
                                </template>
                            </div>
                        <div v-else class="alert alert-info" role="alert" style="text-align:center;">
                           <i class="bi bi-emoji-dizzy"></i> No photos picture post!
                        </div>
                        </template>
                    </div>

                    <!-- UPDATE STATUS & PRIORITAS -->
                    <div class="tab-pane fade-in-worker-single update-status" :class="{ 'active': activeTab === 'update-status' }" id="update-status" role="tabpanel">
                        
                        <div class="col-12" v-if="errorMessages.length > 0">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <li v-for="(errorMessage, index) in errorMessages" :key="index"><i class="bi bi-exclamation-circle"></i> {{ errorMessage }}</li>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="clearErrorMessages"></button>
                            </div>
                        </div>

                        
                        <div v-if="loadingAddWorker" class="d-flex justify-content-center text-primary m-3">
                            <strong role="status" class="pt-1" style="padding-right: 2rem;">Loading...</strong>
                            <div class="spinner-border shadow" aria-hidden="true"></div>
                        </div>
                        
                        <template v-else> 

                            <div class="row">
                                <div class="col-sm-5">
                                    <h3 class="card-title">Update Prioritas <span> | <b>{{ items.prioritas }}</b> current prioritas</span></h3>
                                </div> 
                                <div class="col-sm-7 pt-md-2 pb-3">
                                
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="col-sm-12 d-flex justify-content-center align-items-center">
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradioPrioritas1" autocomplete="off" :checked="items.prioritas.toLowerCase() === 'rendah'" @click="updateStatusPengaduan('rendah')">
                                            <label class="btn btn-outline-primary" for="btnradioPrioritas1"> 
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'rendah'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <i v-else class="bi bi-1-circle-fill"></i>
                                            <br>Rendah</label>

                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradioPrioritas2" autocomplete="off" :checked="items.prioritas.toLowerCase() === 'sedang'" @click="updateStatusPengaduan('sedang')">
                                            <label class="btn btn-outline-warning" for="btnradioPrioritas2">
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'sedang'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                 <i v-else class="bi bi-2-circle-fill"></i>
                                            <br>Sedang</label>

                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradioPrioritas3" autocomplete="off" :checked="items.prioritas.toLowerCase() === 'tinggi'" @click="updateStatusPengaduan('tinggi')">
                                            <label class="btn btn-outline-danger" for="btnradioPrioritas3">
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'tinggi'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                 <i v-else class="bi bi-3-circle-fill"></i>
                                            <br>Tinggi</label>
                                        </div>
                                    </div><br>
                                    <div class="alert p-0 m-0 w-50 mx-auto text-center" :class="{
                                        'bg-primary text-white': items.prioritas.toLowerCase() === 'rendah',
                                        'bg-warning': items.prioritas.toLowerCase() === 'sedang',
                                        'bg-danger text-white': items.prioritas.toLowerCase() === 'tinggi',
                                    }">
                                        <ProgressBar mode="indeterminate" style="height: 4px" v-if="changeStatusLoading"></ProgressBar>
                                        
                                        <h3 class="m-0 fade-in-worker-single" v-else>
                                            <i>{{ items.prioritas }}</i>
                                        </h3>
                                    </div> 
                                    <!-- <hr class="mt-3"> -->
                                    <!-- <small class="text-muted" style="font-size:12px;">#note: pilih diantara 3 pilihan tersebut untuk merubah status</small> -->
                                </div>

                                <div class="col-sm-6">
                                </div>


                            </div> <!-- div row -->

                            <hr class="mt-3">
                        
                            <div class="row">
                                <div class="col-sm-5">
                                    <h3 class="card-title">Update Status <span> | <b>{{ items.status_pelaporan }}</b> current status</span></h3>
                                </div> 
                                <div class="col-sm-7 pt-md-2 pb-3">
                                
                                </div>
                            </div>
                            <!-- List group With Icons -->
                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="col-sm-12 d-flex justify-content-center align-items-center">
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="items.status_pelaporan.toLowerCase() === 'waiting'" @click="updateStatusPengaduan('waiting')">
                                            <label class="btn btn-outline-secondary" for="btnradio1"> 
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'waiting'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <i v-else class="bi bi-cart-plus"></i> 
                                            <br>Waiting</label>

                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" :checked="items.status_pelaporan.toLowerCase() === 'progress'" @click="updateStatusPengaduan('progress')">
                                            <label class="btn btn-outline-warning" for="btnradio2">
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'progress'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <i v-else class="bi bi-hourglass-split"></i> 
                                            <br>Progress</label>

                                            <input v-if="!changeStatusLoading" type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" :checked="items.status_pelaporan.toLowerCase() === 'done'" @click="updateStatusPengaduan('done')">
                                            <label class="btn btn-outline-success" for="btnradio3">
                                                <div v-if="changeStatusLoading && currentStatus.toLowerCase() === 'done'" class="spinner-border spinner-border-sm" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <i v-else class="bi bi-check-lg"></i> 
                                            <br>Done</label>
                                        </div>
                                    </div><br>
                                    <div class="alert p-0 m-0 w-50 mx-auto text-center" :class="{
                                        'bg-secondary text-white': items.status_pelaporan.toLowerCase() === 'waiting',
                                        'bg-warning': items.status_pelaporan.toLowerCase() === 'progress',
                                        'bg-success text-white': items.status_pelaporan.toLowerCase() === 'done',
                                    }">
                                        <ProgressBar mode="indeterminate" style="height: 4px" v-if="changeStatusLoading"></ProgressBar>
                                        
                                        <h3 class="m-0 fade-in-worker-single" v-else>
                                            <i>{{ items.status_pelaporan }}</i>
                                        </h3>
                                    </div> 
                                    <!-- <hr class="mt-3"> -->
                                    <!-- <small class="text-muted" style="font-size:12px;">#note: pilih diantara 3 pilihan tersebut untuk merubah status</small> -->
                                </div>

                                <div class="col-sm-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <i class="bi bi-people-fill me-1 text-primary"></i> Workers 
                                            <span class="badge" :class="{ 'bg-success': items.workers.length > 0, 'bg-danger': items.workers.length === 0 }" style="float: right; ">
                                                 <span v-if="items.workers.length === 0">
                                                    <i class="bi bi-hourglass-split"></i> Incomplete
                                                </span>
                                                <span v-else>
                                                    <i class="bi bi-check-lg"></i> Done
                                                </span>
                                            </span>
                                        </li>
                                        <li class="list-group-item">
                                            <i class="bi bi-images me-1 text-primary"></i> Picture Pre 
                                            <span class="badge" :class="{ 'bg-success': items.detailpengaduan.filter(detail => detail.tipe === 'pre').length > 0, 'bg-danger': items.detailpengaduan.filter(detail => detail.tipe === 'pre').length === 0 }" style="float: right; ">
                                                <span v-if="items.detailpengaduan.filter(detail => detail.tipe === 'pre').length === 0">
                                                    <i class="bi bi-hourglass-split"></i> Incomplete
                                                </span>
                                                <span v-else>
                                                    <i class="bi bi-check-lg"></i> Done
                                                </span>
                                            </span>
                                        </li>
                                        <li class="list-group-item">
                                            <i class="bi bi-images me-1 text-primary"></i> Picture Post
                                            <span class="badge" :class="{ 'bg-success': items.detailpengaduan.filter(detail => detail.tipe === 'post').length > 0, 'bg-danger': items.detailpengaduan.filter(detail => detail.tipe === 'post').length === 0 }" style="float: right; ">
                                                <span v-if="items.detailpengaduan.filter(detail => detail.tipe === 'post').length === 0">
                                                    <i class="bi bi-hourglass-split"></i> Incomplete
                                                </span>
                                                <span v-else>
                                                    <i class="bi bi-check-lg"></i> Done
                                                </span>
                                            </span>
                                        </li>
                                    </ul><!-- End List group With Icons -->
                                </div>


                            </div> <!-- div row -->

                        </template>
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
import VueMultiselect from 'vue-multiselect'

export default {
    components: {
        ProgressBar,
        VueMultiselect,
    },
    data() {
        return {
            items: {},
            itemUserWorkers : {},
            selectedValuesWorkers: '',
            loadingAddWorker: false,
            DelWorkerSingleBtn: false,
            formData: {
                user_id:[],
                picture_pre:null,
                picture_post:null,
            },
            baseUrl: process.env.BE_APP_BASE_URL,
            token: localStorage.getItem('tokenCallIT'),
            idPengaduan : null,
            ProfileOne : false,
            errorMessages: {}, //error serverside

            activeTab: '', // Inisialisasi variabel activeTab
            changeStatusLoading: false,
            currentStatus: ''  //untuk loading spinner
        }
    },
    created() {
        const tab = this.$route.query.tab;
        if (tab) {
            this.activeTab = tab;
        }else{
            this.activeTab = 'profile-overview';
        }
    },
    mounted() {
        this.idPengaduan = this.$route.params.id;
        this.fetchBoth();
    },
    methods: {
        async fetchBoth() {
            try {
                // Menjalankan kedua metode fetch async secara paralel
                await Promise.all([
                    this.fetchData(),
                    this.fetchWorkers(),
                ]);

                this.ProfileOne = true;
                
            } catch (error) {
                alert("server error")
                console.error('Error:', error);
            }
        },
        async fetchData() {
            try {
                // await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await axios(`${this.baseUrl}/api/get_pengaduan/${this.idPengaduan}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    },
                })

                this.items = response.data.data;
                this.loadingAddWorker = false;
                this.changeStatusLoading = false;

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

        async fetchWorkers() {
            try { 
                // await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await axios(`${this.baseUrl}/api/get_user_worker`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    },
                })
                
                console.log(response.data.data,"cek data users")
                this.itemUserWorkers = response.data.data;

            } catch (error) {
                if (error.response && error.response.status == 401) {
                    this.Toasttt('Unauthorized. You do not have access.', 'warning');
                    this.$router.push('/login');
                }
                console.error("Terjadi kesalahan:", error);
            }
        },

        async updateStatusPengaduan(statusNya){ 
            try {
                this.changeStatusLoading = true;
                this.currentStatus = statusNya;
                const response = await axios.put(`${this.baseUrl}/api/update_status_pengaduan/${this.idPengaduan}`, { status_pelaporan: statusNya }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.token}`,
                    },
                });
                
                this.Toasttt('Successfully', 'success', 'Status Pengaduan Successfully Changed')
                return response;
            } catch (error) {
                this.errorMessages = [];
                if(error.response.data.message && error.response.status == 400){
                    for (let field in error.response.data.message) { //list error 400
                    this.errorMessages.push(...error.response.data.message[field]);
                    }
                }
                if (error.response && error.response.status == 500 || error.response.status == 501) {
                    this.Toasttt('Oops. Something Wrong.', 'error');
                    this.$router.push('/pengaduan');
                }
                console.log(error.response.data.message)
                this.changeStatusLoading = false;
            }finally{
                this.fetchData();
            }
        },

        handleSubmitWorker() { //handle worker
            try {
                this.formData.user_id.push(this.selectedValuesWorkers.id); // Set user_id menjadi array, kebutuhan payload
                console.log("Pilihan dipilih:", this.formData.user_id);

                this.addWorkerToPengaduanSingle(this.formData);
                
                this.formData.user_id = [];
                this.errorMessages = [];
            } catch (error) {
                console.error('Error #i34:', error);
            }
        },

        async addWorkerToPengaduanSingle(dataWorker) {
            try {
                this.loadingAddWorker = true;
                const response = await axios.put(`${this.baseUrl}/api/assign_worker_to_pengaduan/${this.idPengaduan}`, dataWorker, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.token}`,
                    },
                });
                
                this.Toasttt('Successfully', 'success', 'Worker Successfully Assigned to Pengaduan')
                this.fetchData();
                return response;
            } catch (error) {
                if(error.response.data.message && error.response.status == 400){
                    for (let field in error.response.data.message) { //list error 400
                    this.errorMessages.push(...error.response.data.message[field]);
                    }
                }
                console.log(error.response.data.message)
                this.loadingAddWorker = false
            }
        },

        async DeleteWorkerSingle(idWorker){
            try {
                this.DelWorkerSingleBtn = true
                this.loadingAddWorker = true;
                const response = await axios.delete(`${this.baseUrl}/api/del_worker_from_pengaduan/${this.idPengaduan}/${idWorker}`,  {
                    headers: {
                    'Authorization': `Bearer ${this.token}`,
                    },
                });

                this.fetchData();
                return response

            } catch (error) {
                if (error.response && error.response.status == 400) {
                    this.$swal.showValidationMessage(`
                        Request failed: ${error.response.data.message}
                    `);
                }
                console.error(error,"check error");
            }finally{
                this.DelWorkerSingleBtn = false //un disable button del
            }
        },

        nameWithJabatan ({ name, jabatan }) { //custom label
            return `${name} — [${jabatan}]`
        },

        PopUpPictures(urlPictures, lokasi, lantai, tipe) {
            this.$swal({
                title: `Picture-${tipe} Pengaduan`,
                text: `Location Photo ${lokasi} - ${lantai} `,
                imageUrl: `${this.baseUrl}/storage/${urlPictures}`,
                // imageWidth: 400,
                // imageHeight: 200,
                imageAlt: `Picture ${tipe}`
            });
        },

        async addPicturePre(){
            const { value: files } = await this.$swal({
                title: "Select picture pre",
                input: "file",
                inputAttributes: {
                    "accept": "image/*",
                    "aria-label": "Upload picture pre",
                    "multiple": true,
                },
                allowOutsideClick: false,
                showCloseButton: true ,
                showCancelButton: true, 
                confirmButtonText: 'Submit', 
                cancelButtonText: 'Close',
                inputValidator: (value) => {
                    if (!value || value.length === 0) {
                        return 'You need to select at least one file';
                    }
                }
              
            });
            
            try {

                if (files && files.length > 0) {

                    this.loadingAddWorker = true

                    const formData = new FormData();
                    Array.from(files).forEach(file => {
                        formData.append('picture_pre[]', file);
                    });
                    // Kirim formulir dengan gambar ke server
                    const response = await axios.post(`${this.baseUrl}/api/store_picture_pre_pengaduan/${this.idPengaduan}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${this.token}`,
                        },
                    });

                    this.Toasttt('Successfully', 'success', 'Picture Pre Successfully Stored');
                    this.errorMessages = [];
                    this.fetchData();
                    return response;
                
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    this.errorMessages = [];
                    for (let field in error.response.data.message) { //list error 400
                        this.errorMessages.push(...error.response.data.message[field]);
                    }
                }
                console.error(error.response.data.message);
            }
        },

        async addPicturePost(){
            const { value: files } = await this.$swal({
                title: "Select picture post",
                input: "file",
                inputAttributes: {
                    "accept": "image/*",
                    "aria-label": "Upload picture post",
                    "multiple": true,
                },
                allowOutsideClick: false,
                showCloseButton: true ,
                showCancelButton: true, 
                confirmButtonText: 'Submit', 
                cancelButtonText: 'Close',
                inputValidator: (value) => {
                    if (!value || value.length === 0) {
                        return 'You need to select at least one file';
                    }
                }
              
            });
            
            try {

                if (files && files.length > 0) {

                    this.loadingAddWorker = true

                    const formData = new FormData();
                    Array.from(files).forEach(file => {
                        formData.append('picture_post[]', file);
                    });
                    // Kirim formulir dengan gambar ke server
                    const response = await axios.post(`${this.baseUrl}/api/store_picture_post_pengaduan/${this.idPengaduan}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${this.token}`,
                        },
                    });

                    this.Toasttt('Successfully', 'success', 'Picture Post Successfully Stored');
                    this.errorMessages = [];
                    this.fetchData();
                    return response;
                
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    this.errorMessages = [];
                    for (let field in error.response.data.message) { //list error 400
                        this.errorMessages.push(...error.response.data.message[field]);
                    }
                }
                console.error(error.response.data.message);
            }
        },

        clearErrorMessages() { //clear error maessage kalo close alert
            this.errorMessages = [];
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

        navigateToAssignToOverview(tab) { //tab navigasi
            this.$router.push({ 
                query: { tab: tab } 
            });
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


<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scope>
    .fade-in-worker-single {
        animation: fadeIn 0.2s ease-in;
    }
    .fade-out-worker-single {
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
    /*picture pre*/
    .gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
    .gallery-item {
        position: relative;
        overflow: hidden;
    }
    .gallery-item img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover; /* Menyesuaikan gambar ke area yang tersedia tanpa merubah aspek rasio */
        aspect-ratio: 1 / 1; /* Menetapkan rasio aspek gambar menjadi 1:1 */
    }
    .gallery-item:hover img {
        transform: scale(1.1);
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .gallery-item:hover .overlay {
        opacity: 1;
    }
    .overlay-content {
        text-align: center;
    }

    /* ponsel */
    @media screen and (max-width: 767px) { 
        .buttonAddPicturePre{
        }
        .buttonAddPicturePost{
        }
    }
    /* dekstop */
    @media screen and (min-width: 768px) {
        .buttonAddPicturePre{
            float: right;
        }
        .buttonAddPicturePost{
            float: right;
        }
    }
</style>