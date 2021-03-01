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
      }
      categories.push(category)
    }

    commit('SET_CATEGORIES', categories)
  },
  async addNewCategory({ commit }, category) {
    const newCategory = {
      name: category.name
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
}
