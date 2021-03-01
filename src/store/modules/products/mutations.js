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
  },
  ADD_NEW_CATEGORY(state, payload) {
    state.categories.push(payload)
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  REMOVE_CATEGORY(state, payload) {
    const category = state.categories.find((item) => item.id === payload)
    const index = state.categories.indexOf(category)
    if (index !== -1) {
      state.categories.splice(index, 1)
    }
  },
}
