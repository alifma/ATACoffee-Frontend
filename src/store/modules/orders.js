import axios from 'axios'
const moduleOrders = {
  namespaced: true,
  state: () => {
    return {
      orders: '',
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
    }
  },
  actions: {
    actionGetAllOrders (context) {
      axios.get('http://52.91.116.102:3001/orders', { headers: { token: context.state.dataTesting.token } }).then((response) => {
        console.log(response.data.data)
        context.commit('setAllOrders', response.data.data)
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
    }
  }
}
export default moduleOrders
