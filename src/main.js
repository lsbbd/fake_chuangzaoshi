import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import './assets/vender/caomei1.2.8/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
