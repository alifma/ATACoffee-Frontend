import axios from 'axios'
const moduleOrders = {
  namespaced: true,
  state: () => {
    return {
      orders: [],
      ordersPagination: [],
      pendingOrders: [],
      pendingPagination: [],
      userOrders: [],
      detailOrdersHead: {},
      detailOrdersBody: [],
      shipping: 10000,
      report: [],
      reportPagination: [],
      optionPageReport: [],
      optionPage: [],
      optionPending: []
    }
  },
  mutations: {
    setReport (state, payload) {
      state.report = payload.data
      state.reportPagination = payload.pagination
    },
    setAllOrders (state, payload) {
      state.orders = payload.data
      state.ordersPagination = payload.pagination
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
    },
    setOptionPageReport (state, payload) {
      const holderPage = []
      for (let i = 1; i <= payload; i++) {
        const value = { text: `${i}`, value: `${i}` }
        holderPage.push(value)
      }
      state.optionPageReport = holderPage
    },
    setOptionPage (state, payload) {
      const holderPage = []
      for (let i = 1; i <= payload; i++) {
        const value = { text: `${i}`, value: `${i}` }
        holderPage.push(value)
      }
      state.optionPage = holderPage
    },
    setOptionPending (state, payload) {
      const holderPage = []
      for (let i = 1; i <= payload; i++) {
        const value = { text: `${i}`, value: `${i}` }
        holderPage.push(value)
      }
      state.optionPending = holderPage
    }
  },
  actions: {
    actionGetAllOrders (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/orders?limit=${data.limit}&user=${data.user}&pending=${data.pending}&page=${data.page}`, { headers: { token: localStorage.getItem('token') } })
          .then((response) => {
            context.commit('setAllOrders', response.data)
            context.commit('setOptionPage', response.data.pagination.totalPages)
            resolve(response.data)
          }).catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    },
    actionGetPendingOrders (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/orders?limit=${data.limit}&page=${data.page}&pending=1&sort=${data.sort}`, { headers: { token: localStorage.getItem('token') } }).then((response) => {
          context.commit('setPendingOrders', response.data)
          context.commit('setOptionPending', response.data.pagination.totalPages)
          resolve(response.data)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },
    actionGetDetailOrders (context, inv) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/orders/${inv}`, { headers: { token: localStorage.getItem('token') } }).then((response) => {
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
        axios.post(`${context.rootState.apiURL}/orders/`, data, { headers: { token: localStorage.getItem('token') } })
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
        axios.patch(`${context.rootState.apiURL}/orders/${data.inv}`, data.info, { headers: { token: localStorage.getItem('token') } })
          .then((response) => {
            resolve(response.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteOrders (context, inv) {
      return new Promise((resolve, reject) => {
        axios.delete(`${context.rootState.apiURL}/orders/${Number(inv)}`, { headers: { token: localStorage.getItem('token') } })
          .then((response) => {
            // console.log(response)
            resolve(response.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    actionGetReport (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/orders?limit=${data.limit}&pending=${data.pending}&page=${data.page}&range=${data.range}`, { headers: { token: localStorage.getItem('token') } })
          .then((response) => {
            context.commit('setReport', response.data)
            context.commit('setOptionPageReport', response.data.pagination.totalPages)
            resolve(response.data)
            // console.log(response)
          }).catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    report: state => state.report,
    reportPagination: state => state.reportPagination,
    getAllOrders: state => state.orders,
    getAllOrdersPagination: state => state.ordersPagination,
    getDetailOrdersHead: state => state.detailOrdersHead,
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
    shipping: state => state.shipping,
    optionPageReport: state => state.optionPageReport,
    optionPage: state => state.optionPage,
    optionPending: state => state.optionPending
  }
}
export default moduleOrders
