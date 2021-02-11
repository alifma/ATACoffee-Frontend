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
        axios.post('http://52.91.116.102:3001/register', data).then((response) => {
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
