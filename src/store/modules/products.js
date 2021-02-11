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
      listItems: []
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
      state.listItems = payload
    }
  },
  actions: {
    getDetail (context, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.apiURL}/items/${id}`, { headers: { token: context.state.dataTesting.token } })
          .then((response) => {
            context.commit('setDetail', response.data.data[0])
            console.log(context.state.detail)
            resolve(response.data.data[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllProduct (context) {
      axios.get('http://52.91.116.102:3001/items', { headers: { token: context.state.dataTesting.token } }).then((response) => {
        // console.log(response.data)
        context.commit('setAllItems', response.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    detail: state => state.detail,
    allitems: state => state.listItems
  }
}
export default moduleProducts
