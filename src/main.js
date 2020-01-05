import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAHpoNf-L1AfVJ-F4eXYcaY0DK5yV37T8Q',
  authDomain: 'rider-life.firebaseapp.com',
  databaseURL: 'https://rider-life.firebaseio.com',
  projectId: 'rider-life',
  storageBucket: 'rider-life.appspot.com',
  messagingSenderId: '452313555987',
  appId: '1:452313555987:web:5709f491c1832b28328be6',
  measurementId: 'G-FFSEW3BL4V'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
