export default {
  SET_CART(state, payload) {
    state.cart = payload
  },
  ADD_TO_CART(state, payload) {
    if (state.cart.find((item) => item.id == payload.id)) {
      let item = state.cart.find((item) => item.id == payload.id)
      item.count++
    } else {
      let stateItem = { ...payload }
      state.cart.push(stateItem)
    }
  },
  UPDATE_QUANTITY(state, {product, newCount}) {
    const item = state.cart.find(item => item.id == product.id)
    item.count = newCount
  },
  REMOVE_FROM_CART(state, payload) {
    const removingItem = state.cart.find((item) => item.id == payload.id)
    const index = state.cart.indexOf(removingItem)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  },
  CLEAR_CART(state) {
    state.cart = []
  }
}
