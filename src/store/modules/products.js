import axios from 'axios'
const moduleProducts = {
  namespaced: true,
  state: () => {
    return {
      apiURL: 'http://52.91.116.102:3001',
      detail: {
        name: '',
        image: 'defaultFood.png',
        price: 0,
        desc: '',
        delivery: [],
        size: []
      },
      dataTesting: {
        id: 7,
        name: 'admin@atac.com',
        access: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJhZG1pbkBhdGFjLmNvbSIsImFjY2VzcyI6MSwiaWF0IjoxNjEzMDQwNDM0fQ.FGOETBx3rxQej09x9m2BSxrRg9gEbu_GDPm3aKuiWVY'
      },
      listItems: [],
      paginationItem: []
    }
  },
  mutations: {
    setDetail (state, payload) {
      state.detail = payload
      state.detail.name = payload.name
      state.detail.image = payload.image
      state.detail.price = payload.price
      state.detail.desc = payload.description
      state.detail.delivery = payload.deliveryMethod.split(',')
      state.detail.size = payload.size.split(',')
    },
    setAllItems (state, payload) {
      state.listItems = payload.data
      state.paginationItem = payload.pagination
    }
  },
  actions: {
    getDetail (context, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.apiURL}/items/${id}`, { headers: { token: context.state.dataTesting.token } })
          .then((response) => {
            context.commit('setDetail', response.data.data[0])
            resolve(response.data.data[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateDetail (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`${context.state.apiURL}/items/${data.id}`, data.fd, { headers: { token: context.state.dataTesting.token } })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllProduct (context, data) {
      axios.get(`${context.state.apiURL}/items?limit=${data.limit}&category=${data.category}&page=${data.page}&name=${data.name}`, { headers: { token: context.state.dataTesting.token } })
        .then((response) => {
          context.commit('setAllItems', response.data)
        }).catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${context.state.apiURL}/items/${id}`, { headers: { token: context.state.dataTesting.token } })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addProduct (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.state.apiURL}/items/`, data, { headers: { token: context.rootState.auth.token } })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    detail: state => state.detail,
    allitems: state => state.listItems,
    paginationItem: state => state.paginationItem
  }
}
export default moduleProducts
