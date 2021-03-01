export default {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  ADD_NEW_PRODUCTS(state, payload) {
    state.products.push(payload)
  },
  REMOVE_PRODUCT(state, payload) {
    const product = state.products.find((item) => item.id === payload)
    const index = state.products.indexOf(product)
    if (index !== -1) {
      state.products.splice(index, 1)
    }
  }
}
