import Index from '@/views/Index'
import Login from '@/views/Login'
// import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Enter from '@/views/Enter.vue'
import Verify from "@/components/Verify.vue";
import Profile from "@/views/Profile.vue"
import Rewards from '@/views/Rewards.vue'
import Earning from '@/views/Earning.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  // 注意：一旦采用了 history 模式，地址栏就没有 #，需要后台配置访问规则
  mode: 'history',
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/dashboard', component: Dashboard},
    {path: '/enter', component: Enter},
    {path: '/verify', component: Verify},
    {path: '/rewards', component: Rewards},
    {path: '/profile', component: Profile},
    {path: '/earning', component: Earning},
    // {name: 'search', path: '/search/:words?', component: Search },
    {path: '*', component: NotFound }
  ]
})

export default router