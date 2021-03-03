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
  initialRangeValue(state, _, _2, rootGetters){
    const min = rootGetters['products/minProductsPrice']
    const max = rootGetters['products/maxProductsPrice']
    return state.initialRangeValue = [min, max]
  }
}
