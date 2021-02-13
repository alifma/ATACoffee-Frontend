import axios from 'axios'
const moduleOrders = {
  namespaced: true,
  state: () => {
    return {
      apiURL: 'http://52.91.116.102:3001',
      orders: [],
      pendingOrders: [],
      pendingPagination: [],
      userOrders: [],
      dataTesting: {
        id: 7,
        name: 'admin@atac.com',
        access: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJhZG1pbkBhdGFjLmNvbSIsImFjY2VzcyI6MSwiaWF0IjoxNjEzMDQwNDM0fQ.FGOETBx3rxQej09x9m2BSxrRg9gEbu_GDPm3aKuiWVY'
      },
      detailOrdersHead: '',
      detailOrdersBody: ''
    }
  },
  mutations: {
    setAllOrders (state, payload) {
      state.orders = payload
    },
    setDetailOrderHead (state, payload) {
      state.detailOrdersHead = payload
    },
    setDetailOrderBody (state, payload) {
      state.detailOrdersBody = payload
    },
    setPendingOrders (state, payload) {
      state.pendingOrders = payload.data
      state.pendingPagination = payload.pagination
    },
    setUserOrders (state, payload) {
      state.userOrders = payload
    }
  },
  actions: {
    actionGetAllOrders (context, data) {
      axios.get(`${context.state.apiURL}/orders?limit=${data.limit}&user=${data.user}&pending=${data.pending}`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
        context.commit('setAllOrders', response.data.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    actionGetPendingOrders (context, data) {
      axios.get(`${context.state.apiURL}/orders?limit=${data.limit}&pending=1`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
        context.commit('setPendingOrders', response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    actionGetDetailOrders (context, inv) {
      axios.get(`http://52.91.116.102:3001/orders/${inv}`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
        console.log(response.data.data.body)
        context.commit('setDetailOrderHead', response.data.data.head[0])
        context.commit('setDetailOrderBody', response.data.data.body)
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
    },
    getDetailOrdersHead (state) {
      return state.detailOrdersHead
    },
    getDetailOrdersBody (state) {
      return state.detailOrdersBody
    },
    getPendingOrders: state => state.pendingOrders,
    getPendingPagination: state => state.pendingPagination
  }
}
export default moduleOrders
