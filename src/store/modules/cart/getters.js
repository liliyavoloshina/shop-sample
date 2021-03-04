export default {
  cart(state) {
    return state.cart
  },
  isInCart: (state) => (id) => {
    return state.cart.find((item) => item.id == id) ? true : false
  }
}
