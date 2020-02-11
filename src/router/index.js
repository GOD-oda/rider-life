import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Station from '../views/Station'
import User from '../views/User'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stations/:id',
    name: 'stations',
    component: Station
  },
  {
    path: '/users/:id',
    name: 'users',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
