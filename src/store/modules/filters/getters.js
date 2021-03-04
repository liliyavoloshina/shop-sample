export default {
  categories(state) {
    return state.categories
  },
  activeCategories(state) {
    return state.categories.filter((item) => item.count > 0)
  },
  selectedCategories(state) {
    return state.selectedCategories
  },
  selectedDiscount(state) {
    return state.selectedDiscount
  },
  selectedPrice(state, getters) {
    if (state.selectedPrice.length > 1) {
      return state.selectedPrice
    } else {
      return getters.initialRangeValue
    }
  },
  minProductsPrice(_, _2, _3, rootGetters){
    const products = rootGetters['products/products']
    return Math.min(...products.map((item) => item.price), null)
  },
  maxProductsPrice(_, _2, _3, rootGetters){
    const products = rootGetters['products/products']
    return Math.max(...products.map((item) => item.price), null)
  },
  initialRangeValue(state, getters){
    const min = getters.minProductsPrice
    const max = getters.maxProductsPrice
    return state.initialRangeValue = [min, max]
  }
}
