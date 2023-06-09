import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css';
import $ from 'jquery'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Agregamos la URL base de nuestra API
// axios.defaults.baseURL = 'http://localhost:3000/api';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
