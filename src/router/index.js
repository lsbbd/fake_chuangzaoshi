import Vue from 'vue'
import Router from 'vue-router'
import Chuangzaoshi from '@/pages/chuangzaoshi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/chuangzaoshi'
    },
    {
      path: '/chuangzaoshi',
      name: 'chuangzaoshi',
      component: Chuangzaoshi
    }
  ]
})
