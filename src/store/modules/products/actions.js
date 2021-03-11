import productApi from '@/api/products'

export default {
  async loadProducts({commit}) {
    const response = await productApi.getProducts()
    const responseData = response.data

    // if (response.status != 200) {
    //   const error = new Error(response.data || 'Failed to get products')
    //   throw error
    // }

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

  async addNewProduct({ commit, rootGetters }, product) {
    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      discount: product.discount,
      createdAt: product.createdAt
    }

    const token = rootGetters['auth/token']

    const response = await productApi.postNewProduct(newProduct, token)
    // const response = await productApi.postNewProduct(JSON.stringify(newProduct), token)
    newProduct.id = response.data.name

    commit('ADD_NEW_PRODUCTS', newProduct)
  },

  async removeProduct({commit, rootGetters}, id) {
    const token = rootGetters['auth/token']
    const response = await productApi.deleteProduct(id, token)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to delete product')
      throw error
    }
    commit('REMOVE_PRODUCT', id)
  }
}
