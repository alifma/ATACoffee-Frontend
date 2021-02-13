const moduleCarts = {
  namespaced: true,
  state: () => {
    return {
      cart: [{
        price: 0,
        itemName: '',
        itemImage: 'defaultFood.png',
        orderType: '',
        amount: 0
      }],
      shipping: 10000
    }
  },
  mutations: {
    setCart (state, payload) {
      state.cart = state.cart.filter((item) => (item.price !== 0))
      state.cart = state.cart.concat(payload)
    },
    emptyCart (state) {
      state.cart = [{
        price: 0,
        itemName: '',
        itemImage: 'defaultFood.png',
        orderType: '',
        amount: 0
      }]
    }
  },
  actions: {
    addToCart (context, data) {
      context.commit('setCart', data)
    },
    emptyCart (context) {
      context.commit('emptyCart')
    }
  },
  getters: {
    cart: state => state.cart,
    totalPrice (state) {
      return state.cart.reduce((a, b) => a + b.amount * b.price, 0)
    },
    tax (state) {
      return state.cart.reduce((a, b) => a + b.amount * b.price, 0) * 0.1
    },
    shipping: state => state.shipping
  }
}
export default moduleCarts
