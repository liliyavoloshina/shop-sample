import categoryApi from '@/api/categories'

export default {
  async loadCategories({commit}) {
    const response = await categoryApi.getCategories()

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get categories')
      throw error
    }

    const responseData = response.data

    const categories = []

    for (let key in responseData) {
      const category = {
        id: key,
        name: responseData[key].name,
        count: responseData[key].count
      }
      categories.push(category)
    }

    commit('SET_CATEGORIES', categories)
  },
  async addNewCategory({ commit }, category) {
    const newCategory = {
      name: category.name,
      count: 0
    }

    const response = await categoryApi.postNewCategory(JSON.stringify(newCategory))

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to post new category')
      throw error
    }

    newCategory.id = response.data.name

    commit('ADD_NEW_CATEGORY', newCategory)
  },

  async removeCategory({commit}, id) {

    const response = await categoryApi.deleteCategory(id)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to delete category')
      throw error
    }
    commit('REMOVE_CATEGORY', id)
  },

  async increaseCategoryCount({commit}, categoryId) {
    await categoryApi.patchCategory(categoryId, 'increase')
    commit('INCREASE_CATEGORY_COUNT', categoryId)
  },

  async decreaseCategoryCount({commit}, categoryId) {
    await categoryApi.patchCategory(categoryId, 'decrease')
    commit('DECREASE_CATEGORY_COUNT', categoryId)
  },

  changeFilterByCategory({commit}, category) {
    commit('CHANGE_FILTER_CATEGORY', category)
  },
  changeFilterByDiscount({commit}) {
    commit('CHANGE_FILTER_DISCOUNT')
  },
  changeFilterByPrice({commit}, range) {
    commit('CHANGE_FILTER_BY_PRICE', range)
  }
}
