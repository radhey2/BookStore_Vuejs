import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Cart from '../components/Cart.vue'
import Order from '../components/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:HomePage
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
