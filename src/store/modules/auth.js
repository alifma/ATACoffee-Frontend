import axios from 'axios'
const moduleAuth = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      access: '',
      name: '',
      id: ''
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
    login (form, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://52.91.116.102:3001/login', data).then((response) => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('id', response.data.id)
          form.commit('setToken', response.data.token)
          form.commit('setAccess', response.data.access)
          form.commit('setName', response.data.name)
          form.commit('setId', response.data.id)
          resolve(response.data.msg)
        }).catch((err) => {
          console.log(err)
          // console.log(err.data.code)
        })
      })
    }
  },
  getters: {
  }
}
export default moduleAuth
