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
          // console.log(response.data.msg)
          resolve(response.data.msg)
        }).catch((error) => {
          // console.log(error)
          reject(error.response.data)
        })
      })
    }
  },
  getters: {
  }
}
export default modulregister
