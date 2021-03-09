import axios from 'axios'
const moduleProducts = {
  namespaced: true,
  state: () => {
    return {
      detail: {
        name: '',
        image: 'defaultFood.png',
        price: 0,
        desc: '',
        delivery: [],
        size: []
      },
      listItems: [],
      paginationItem: [],
      optionPage: []
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
    },
    setOptionPage (state, payload) {
      const holderPage = []
      for (let i = 1; i <= payload; i++) {
        const value = { text: `${i}`, value: `${i}` }
        holderPage.push(value)
      }
      state.optionPage = holderPage
    }
  },
  actions: {
    getDetail (context, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.apiURL}/items/${id}`, { headers: { token: context.rootState.auth.token } })
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
        axios.patch(`${context.rootState.apiURL}/items/${data.id}`, data.fd, { headers: { token: context.rootState.auth.token } })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllProduct (context, data) {
      return new Promise((resolve, reject) => {
        const sql = `${context.rootState.apiURL}/items?limit=${data.limit}&category=${data.category}&page=${data.page}&name=${data.name}&sort=${data.sort}&order=${data.order}`
        axios.get(sql, { headers: { token: context.rootState.auth.token } })
          .then((response) => {
            resolve(response.data)
            context.commit('setOptionPage', response.data.pagination.pageResult)
            context.commit('setAllItems', response.data)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${context.rootState.apiURL}/items/${id}`, { headers: { token: context.rootState.auth.token } })
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
        axios.post(`${context.rootState.apiURL}/items/`, data, { headers: { token: context.rootState.auth.token } })
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
    paginationItem: state => state.paginationItem,
    optionPage: state => state.optionPage
  }
}
export default moduleProducts
