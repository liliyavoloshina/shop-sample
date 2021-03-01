import productApi from '@/api/products'

export default {
  async loadProducts({commit}) {
    const response = await productApi.getProducts()

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }

    const responseData = response.data

    const products = []

    for (let key in responseData) {
      const product = {
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
        image: responseData[key].image,
        category: responseData[key].category,
        discount: responseData[key].discount,
        createdAt: responseData[key].createdAt
      }
      products.push(product)
    }

    commit('SET_PRODUCTS', products)
  },

  async addNewProduct({ commit }, product) {
    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      discount: product.discount,
      createdAt: product.createdAt
    }

    const response = await productApi.postNewProduct(JSON.stringify(newProduct))

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to post new product')
      throw error
    }

    newProduct.id = response.data.name

    commit('ADD_NEW_PRODUCTS', newProduct)
  },

  async removeProduct({commit}, id) {

    const response = await productApi.deleteProduct(id)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to delete product')
      throw error
    }
    commit('REMOVE_PRODUCT', id)
  },

  async loadCategories({commit}) {
    const response = await productApi.getCategories()

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

    const response = await productApi.postNewCategory(JSON.stringify(newCategory))

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to post new category')
      throw error
    }

    console.log(response)

    newCategory.id = response.data.name

    commit('ADD_NEW_CATEGORY', newCategory)
  },

  async removeCategory({commit}, id) {

    const response = await productApi.deleteCategory(id)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to delete category')
      throw error
    }
    commit('REMOVE_CATEGORY', id)
  },
}
