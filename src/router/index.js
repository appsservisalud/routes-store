import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'

import CuentasView from '../views/CuentasView.vue'
import PypView from '../views/PypView.vue'
import SoporteView from '../views/SoporteView.vue'

import LayoutIndex from '../Layouts/LayoutIndex.vue'
import LayoutHome from '../Layouts/LayoutHome.vue'
import LayoutAbout from '../Layouts/LayoutAbout.vue'
import LayoutLogin from '../Layouts/LayoutLogin.vue'



const routes = [
  {
    path: '/',
    name: 'index',
    component:  IndexView,
    meta:{layout:LayoutIndex}
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{layout:LayoutHome}
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{layout:LayoutAbout}
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{layout:LayoutLogin}
  },
  {
    path: '/cuentas',
    name: 'cuentas',
    component: CuentasView,
    meta:{layout:LayoutHome}
  },
  {
    path: '/pyp',
    name: 'pyp',
    component: PypView,
    meta:{layout:LayoutHome}
  },
  {
    path: '/soporte',
    name: 'soporte',
    component: SoporteView,
    meta:{layout:LayoutHome}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
