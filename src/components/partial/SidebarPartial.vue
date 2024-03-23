<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
        <router-link to="/" class="nav-link collapsed">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
        </router-link>
    </li><!-- End Dashboard Nav -->

    <li class="nav-item">
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
