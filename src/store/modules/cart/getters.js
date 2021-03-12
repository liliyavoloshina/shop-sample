export default {
  cart(state) {
    return state.cart
  },
  productInCartById(state) {
    return state.cart.map(item => item.id)
  },
  isInCart: (state) => (id) => {
    return state.cart.find((item) => item.id == id) ? true : false
  },
  total(state) {
    return state.cart.length
  },
  totalPrice(state) {
    return state.cart.reduce((sum, i) => {
      return sum + (i.price * i.count)
    }, 0)
  }
}
