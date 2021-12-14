import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'
import store from '@/store/index'


Vue.use(VueRouter)



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
  },
  {
    path: '/registro',
    name:  'Registro',
    component: Registro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const isAuth = store.getters.isAuth
  //Se a rota não for a de login e registro e o usuário não tiver logado
  if(to.name !== 'Login' && to.name !== 'Registro' && !isAuth) next('/login')
  else next()
})

export default router
