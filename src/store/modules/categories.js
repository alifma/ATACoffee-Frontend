// import axios from 'axios'
const moduleCategories = {
  namespaced: true,
  state: () => {
    return {
      categories: []
    }
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    getCategories (context) {
      // return new Promise((resolve, reject) => {
      // axios.get(`${context.rootState.apiURL}/categories`, { headers: { token: context.rootState.auth.token } })
      // .then((response) => {
      // cons ole.log(response.data)
      // context.commit('setCategories', response.data.data)
      // }).catch((err) => {
      // console.log(err)
      // })
      // })
      console.log(context)
    }
  },
  getters: {
    categories: state => state.categories
  }
}
export default moduleCategories
