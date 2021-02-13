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
      detailOrdersHead: {},
      detailOrdersBody: [],
      shipping: 10000
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
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.apiURL}/orders?limit=${data.limit}&page=${data.page}&pending=1&sort=${data.sort}`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
          context.commit('setPendingOrders', response.data)
          resolve(response.data)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },
    actionGetDetailOrders (context, inv) {
      return new Promise((resolve, reject) => {
        axios.get(`http://52.91.116.102:3001/orders/${inv}`, { headers: { token: context.state.dataTesting.token } }).then((response) => {
          context.commit('setDetailOrderHead', response.data.data.head[0])
          context.commit('setDetailOrderBody', response.data.data.body)
          resolve(response.data)
        }).catch((error) => {
          reject(error)
          console.log(error)
        })
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
    },
    updateOrders (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`${context.state.apiURL}/orders/${data.inv}`, data.info, { headers: { token: context.rootState.auth.token } })
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
    getPendingPagination: state => state.pendingPagination,
    totalPrice (state) {
      return state.detailOrdersBody.reduce((a, b) => a + b.amount * b.price, 0)
    },
    tax (state) {
      return state.detailOrdersBody.reduce((a, b) => a + b.amount * b.price, 0) * 0.1
    },
    shipping: state => state.shipping
  }
}
export default moduleOrders
