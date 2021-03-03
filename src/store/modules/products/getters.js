export default {
  products(state) {
    return state.products
  },
  product: (state) => (productId) => {
    return state.products.find((item) => item.id == productId)
  },
  minProductsPrice(state) {
    return Math.min(...state.products.map((item) => item.price), null)
  },
  maxProductsPrice(state) {
    return Math.max(...state.products.map((item) => item.price), null)
  }
}
