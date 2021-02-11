import Vue from 'vue'
import Vuex from 'vuex'
import modulregister from './modules/formregister'
Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    register: modulregister
  }
})
export default store
