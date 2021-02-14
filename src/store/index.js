import Vue from 'vue'
import Vuex from 'vuex'
import moduleAuth from './modules/auth'
import moduleCarts from './modules/cart'
import moduleCategories from './modules/categories'
import modulregister from './modules/formregister'
import moduleOrders from './modules/orders'
import moduleProducts from './modules/products'
Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
      apiURL: process.env.VUE_APP_APIURL
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    register: modulregister,
    products: moduleProducts,
    categories: moduleCategories,
    auth: moduleAuth,
    orders: moduleOrders,
    carts: moduleCarts
  }
})
export default store
