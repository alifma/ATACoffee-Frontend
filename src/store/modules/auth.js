import axios from 'axios'
const moduleAuth = {
  namespaced: true,
  state: () => {
    return {
      token: localStorage.getItem('token') || null,
      access: localStorage.getItem('access') || null,
      name: localStorage.getItem('name') || '',
      id: localStorage.getItem('id') || null
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setAccess (state, payload) {
      state.access = payload
    },
    setName (state, payload) {
      state.name = payload
    },
    setId (state, payload) {
      state.id = payload
    }
  },
  actions: {
    login (context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://52.91.116.102:3001/login', data).then((response) => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('id', response.data.id)
          context.commit('setToken', response.data.token)
          context.commit('setAccess', response.data.access)
          context.commit('setName', response.data.name)
          context.commit('setId', response.data.id)
          resolve(response.data.msg)
        }).catch((err) => {
          console.log(err)
          // console.log(err.data.code)
        })
      })
    },
    logout (context) {
      return new Promise((resolve) => {
        localStorage.removeItem('token')
        localStorage.removeItem('access')
        localStorage.removeItem('name')
        localStorage.removeItem('id')
        context.commit('setToken', null)
        context.commit('setAccess', null)
        context.commit('setName', '')
        context.commit('setId', null)
        resolve(true)
      })
    }
  },
  getters: {
    getAccess: state => state.access,
    getUserName: state => state.name,
    getUserID: state => state.id
  }
}
export default moduleAuth
