export default {
  products(state) {
    return state.products
  },
  product: (state) => (productId) => {
    return state.products.find((item) => item.id == productId)
  },
  relatedProducts: (state) => (productId) => {
    const product = state.products.find((item) => item.id == productId)
    const category = product.category
    // const cat = state.products.find((item) => item.id == productId)
    return category
  }
}
