export default {
  categories(state) {
    return state.categories
  },
  activeCategories(state) {
    return state.categories.filter((item) => item.count > 0)
  },
  selectedCategories(state) {
    return state.selectedCategories
  }
}
