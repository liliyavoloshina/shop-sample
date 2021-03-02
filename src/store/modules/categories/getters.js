export default {
  categories(state) {
    return state.categories
  },
  activeCategories(state) {
    return state.categories.filter((item) => item.count > 0)
  }
  // increaseCategoryCount: (state) => (categoryId) => {
  //   return state.categories.find((category) => category.id == categoryId)
  // }
}
