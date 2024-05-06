<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
        <router-link to="/" class="nav-link collapsed" :class="{ active: isActive('/') }">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </router-link>

        <router-link to="/pick-pengaduan-by-worker" class="nav-link collapsed" :class="{ active: isActive('/pick-pengaduan-by-worker') }">
          <i class="bi bi-stopwatch"></i>
          <span>Auction Pengaduan</span>
        </router-link>

        <router-link to="/pengaduan" class="nav-link collapsed" :class="{ active: isActive('/pengaduan') }">
          <i class="bi bi-megaphone"></i>
          <span>Pengaduan</span>
        </router-link>

        <a class="nav-link collapsed" data-bs-target="#ReferenceData" data-bs-toggle="collapse" href="#">
        <i class="bi bi-database-fill-gear"></i><span>Reference Data</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>

        <ul id="ReferenceData" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <router-link to="/kategori-pengaduan" class="nav-link collapsed" :class="{ active: isActive('/kategori-pengaduan') }">
                <i class="bi bi-circle"></i><span>Kategori Pengaduan</span>
                </router-link>
            </li>

            <li>
                <router-link to="/users" class="nav-link collapsed" :class="{ active: isActive('/users') }">
                <i class="bi bi-circle"></i><span>Users</span>
                </router-link>
            </li>
            
        </ul>
    </li>
    </ul>

    </aside><!-- End Sidebar-->
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>
