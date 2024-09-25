import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 注册全局组件
import HzHeader from "@/components/HzHeader"
import HzFooter from "@/components/HzFooter"
import HzTabbar from "@/components/HzTabbar"
Vue.component('HzHeader', HzHeader)
Vue.component('HzFooter', HzFooter)
Vue.component('HzTabbar', HzTabbar)

import '@/assets/_nuxt-portal/css/da524e6.css'
import '@/assets/_nuxt-portal/css/ea4cf36.css'
import '@/assets/_nuxt-portal/css/cc0f050.css'
import '@/assets/_nuxt-portal/css/64808fb.css'
import '@/assets/_nuxt-portal/css/680491a.css'
import '@/assets/_nuxt-portal/css/3fe74ec.css'
import '@/assets/_nuxt-portal/css/a10cbb6.css'
import '@/assets/_nuxt-portal/css/fb4a138.css'
import '@/assets/_nuxt-portal/css/6fda788.css'
import '@/assets/_nuxt-portal/css/18c806b.css'
import '@/assets/_nuxt-portal/css/b26a916.css'
import '@/assets/_nuxt-portal/css/style-4087bdf9.css'
import '@/assets/_nuxt-portal/css/d6b9013.css'
import '@/assets/_nuxt-portal/css/7bf17ae.css'

// login
import '@/assets/_nuxt-portal/css/5a23de0.css'
import '@/assets/_nuxt-portal/css/7a024ef.css'
import '@/assets/_nuxt-portal/css/a6b8b33.css'
import '@/assets/_nuxt-portal/css/dca219e.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
