import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Station from '../views/Station'

Vue.use(VueRouter)

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
