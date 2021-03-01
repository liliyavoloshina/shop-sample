export default {
  products(state) {
    return state.products
  },
  product: (state) => (productId) => {
    return state.products.find((item) => item.id == productId)
  }
}