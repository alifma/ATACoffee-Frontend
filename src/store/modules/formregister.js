import axios from 'axios'
const modulregister = {
  namespaced: true,
  state: () => {
    return {
    }
  },
  mutations: {
  },
  actions: {
    actionRegister (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.apiURL}/register`, data).then((response) => {
          resolve(response.data.msg)
        }).catch((error) => {
          reject(error.response.data)
        })
      })
    }
  },
  getters: {
  }
}
export default modulregister
