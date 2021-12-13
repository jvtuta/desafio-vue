import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import store from '@/store/index'


Vue.use(VueRouter)

const isAuth = store.state.auth


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.name !== 'Login' && !isAuth) next('/login')
  else next()
})

export default router
