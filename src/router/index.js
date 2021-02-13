import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/Signup.vue'
import SignIn from '../views/Sigin.vue'
import Product from '../views/Product.vue'
import ProductDetails from '../views/ProductDetails.vue'
import orders from '../views/orders.vue'
import detailOrders from '../views/detailOrders.vue'
import ProductAdd from '../views/ProductAdd.vue'
import ProductEdit from '../views/ProductEdit.vue'
import Profile from '../views/Profile.vue'
import Checkout from '../views/Checkout.vue'
import WaitingList from '../views/WaitingList.vue'
import WaitingListDetails from '../views/WaitingListDetails.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/add',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders
  },
  {
    path: '/orders/:inv',
    name: 'detailOrders',
    component: detailOrders
  },
  {
    path: '/product/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/waitinglist',
    name: 'waitingList',
    component: WaitingList
  },
  {
    path: '/waitinglist/:inv',
    name: 'waitingList details',
    component: WaitingListDetails
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
