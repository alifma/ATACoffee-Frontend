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
import store from '../store/index'
import Swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: false }
  },
  {
    path: '/login',
    name: 'SignIn',
    component: SignIn,
    meta: { auth: false }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { auth: false }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { auth: false }
  },
  {
    path: '/product/add',
    name: 'ProductAdd',
    component: ProductAdd,
    meta: { auth: true }
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    meta: { auth: false }
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders,
    meta: { auth: true }
  },
  {
    path: '/orders/:inv',
    name: 'detailOrders',
    component: detailOrders,
    meta: { auth: true }
  },
  {
    path: '/product/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit,
    meta: { auth: true }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: { auth: true }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta: { auth: true }
  },
  {
    path: '/waitinglist',
    name: 'waitingList',
    component: WaitingList,
    meta: { auth: true }
  },
  {
    path: '/waitinglist/:inv',
    name: 'waitingList details',
    component: WaitingListDetails,
    meta: { auth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { auth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.matched[0].meta.auth)
  // console.log(store.getters['auth/getToken'])
  if (to.matched[0].meta.auth === true) {
    if (store.getters['auth/getToken']) {
      if (to.path === '/waitinglist' || to.path === '/waitinglist/:inv' || to.path === '/dashboard') {
        if (Number(store.getters['auth/getAccess']) === 1) {
          next()
        } else {
          Swal.fire({
            icon: 'error',
            title: '',
            text: 'Admin Access Only!'
          })
          next({
            path: '/product'
          })
        }
      } else {
        next()
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: '',
        text: 'Please Log-in!'
      })
      next({
        path: '/login'
      })
    }
  } else {
    // if (store.getters['auth/getToken']) {
    if (to.path === '/login' || to.path === '/register') {
      if (store.getters['auth/getToken']) {
        Swal.fire({
          icon: 'info',
          title: '',
          text: 'You already Logged in!'
        })
        next({
          path: '/product'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

export default router
