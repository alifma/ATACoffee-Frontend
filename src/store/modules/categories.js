// import axios from 'axios'
const moduleCategories = {
  namespaced: true,
  state: () => {
    return {
      apiURL: 'http://52.91.116.102:3001',
      categories: []
    }
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    getCategories(context) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.apiURL}/products?limit=12`, { headers: { token: context.state.dataTesting.token } })
        .then((response) => {
          // console.log(response.data)
          context.commit('setAllItems', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
      }) 
    }
  },
  getters: {
    categories: state => state.categories
  }
}
export default moduleCategories
