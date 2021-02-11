import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/Signup.vue'
import SignIn from '../views/Sigin.vue'
import Product from '../views/Product.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ProductAdd from '../views/ProductAdd.vue'
import ProductEdit from '../views/ProductEdit.vue'

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
    path: '/product/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
