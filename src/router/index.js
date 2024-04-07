import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestingView from '../views/TestingView.vue'
import LoginView from '../views/LoginView.vue'
//reference data
import SiswaDashboard from '../views/siswa/SiswaViews.vue'
import KategoriPengaduan from '../views/kategoripengaduan/KategoriPengaduan.vue'

//users
import ProfileUser from '../views/users/ProfileViews.vue'
import UsersDashboard from '../views/users/UsersViews.vue'

//pengaduan
import PengaduanDashboard from '../views/pengaduan/PengaduanView.vue'
import DetailPagePengaduan from '../views/pengaduan/PengaduanDetailPageView.vue'

//permission
import NProgress from 'nprogress';

const routes = [
  { path: '/', name: '/', components: { default: HomeView }, meta: { requiresAuth: true } },
  { path: '/testing', name: 'testing', components: { default: TestingView }, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', components: { default: LoginView }, meta: { layout: 'login' } },
  //siswa
  { path: '/siswa', name: 'siswadashboard', components: { default: SiswaDashboard }, meta: { requiresAuth: true } },
  //user 
  { path: '/profile-user', name: 'profileuser', components: { default: ProfileUser }, meta: { requiresAuth: true } },
  { path: '/users', name: 'users', components: { default: UsersDashboard }, meta: { requiresAuth: true } },
  //kategori pengaduan
  { path: '/kategori-pengaduan', name: 'kategoripengaduan', components: { default: KategoriPengaduan }, meta: { requiresAuth: true } },
  //pengaduan
  { path: '/pengaduan', name: 'pengaduandashboard', components: { default: PengaduanDashboard }, meta: { requiresAuth: true } },
  { path: '/detail-page-pengaduan/:id', name: 'detailpagepengaduan', components: { default: DetailPagePengaduan }, meta: { requiresAuth: true } },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  // Cek apakah rute memerlukan autentikasi dan pengguna belum login
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn()) {
    // Jika belum login, arahkan ke halaman login
    next({ name: 'login' });
  } else {
    next();
  }
});

// cek apakah pengguna sudah login
function isLoggedIn() {
  const token = localStorage.getItem('tokenCallIT');
  return token !== null && token !== undefined;
}

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})


export default router
