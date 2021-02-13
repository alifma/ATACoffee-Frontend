import axios from 'axios'
const moduleOrders = {
  namespaced: true,
  state: () => {
    return {
      apiURL: 'http://52.91.116.102:3001',
      orders: [],
      pendingOrders: [],
      userOrders: [],
      dataTesting: {
        id: 7,
        name: 'admin@atac.com',
        access: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJhZG1pbkBhdGFjLmNvbSIsImFjY2VzcyI6MSwiaWF0IjoxNjEzMDQwNDM0fQ.FGOETBx3rxQej09x9m2BSxrRg9gEbu_GDPm3aKuiWVY'
      }
    }
  },
  mutations: {
    setAllOrders (state, payload) {
      state.orders = payload
    },
    setPendingOrders (state, payload) {
      state.pendingOrders = payload
    },
    setUserOrders (state, payload) {
      state.userOrders = payload
    }
  },
  actions: {
    actionGetAllOrders (context, data) {
      console.log(data)
      axios.get(`${context.state.apiURL}/orders?limit=${data.limit}&user=${data.user}`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
        context.commit('setAllOrders', response.data.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    createOrders (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.state.apiURL}/orders/`, data, { headers: { token: context.rootState.auth.token } })
          .then((response) => {
            resolve(response.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getAllOrders (state) {
      return state.orders
    }
  }
}
export default moduleOrders
