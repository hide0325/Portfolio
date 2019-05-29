import Vue from 'vue'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

import App from "@/App.vue"

import { sync } from 'vuex-router-sync'
import router from '@/routes.js'
import store from '@/store/store.js'

sync(store, router);

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
