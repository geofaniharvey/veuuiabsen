import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import AbsenIndex from '../views/absen/Index.vue'
import ProfilIndex from '../views/mahasiswa/Profil.vue'
import Editmhs from '../views/mahasiswa/Editmhs.vue'
import Absen from '../views/absen/Absen.vue'
import Jadwal from '../views/jadwal/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Profil',
    component: ProfilIndex
  },
  {
    path: '/',
    name: 'Edit Profil',
    component: Editmhs
  },
  {
    path: '/',
    name: 'Absen',
    component: Absen
  },
  {
    path: '/',
    name: 'AbsenIndex',
    component: AbsenIndexS
  },
  {
    path: '/',
    name: 'Jadwal',
    component: Jadwal
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
