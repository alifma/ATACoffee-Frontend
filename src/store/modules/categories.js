import axios from 'axios'
const moduleCategories = {
  namespaced: true,
  state: () => {
    return {
      categories: [],
      categoriesList: []
    }
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
      state.categoriesList = payload.map((i) => ({
        value: i.id,
        text: i.name
      }))
    }
  },
  actions: {
    getCategories (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/categories`, { headers: { token: context.rootState.auth.token } })
          .then((response) => {
            context.commit('setCategories', response.data.data)
            resolve(response.data.data)
          }).catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    categories: state => state.categoriesList
  }
}
export default moduleCategories
