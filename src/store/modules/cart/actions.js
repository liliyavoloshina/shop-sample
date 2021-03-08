import cartApi from '@/api/cart'

export default {
  async loadCart({commit, rootGetters}) {
    const userId = rootGetters['auth/userId']

    const response = await cartApi.getCart(userId)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }

    const responseData = response.data

    const items = []

    for (let key in responseData) {
      const item = {
        id: responseData[key].id,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
        image: responseData[key].image,
        category: responseData[key].category,
        count: responseData[key].count,
        discount: responseData[key].discount,
        createdAt: responseData[key].createdAt
      }
      items.push(item)
    }

    commit('SET_CART', items)
  },
  async addToCart({commit, rootGetters}, product) {
    const newProduct = {...product}
    newProduct.count = 1

    const userId = rootGetters['auth/userId']
    const token = rootGetters['auth/token']
    const response = await cartApi.postToCart(userId, newProduct, token)

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to add to cart')
      throw error
    }
    commit('ADD_TO_CART', newProduct)
  },
  async increaseQuantity({commit, rootGetters}, product) {
    const userId = rootGetters['auth/userId']
    const token = rootGetters['auth/token']
    const productId = product.id
    const newCount =  product.count + 1
    await cartApi.patchQuantity(userId, productId, newCount, token)
    commit('UPDATE_QUANTITY', {product, newCount})
  },
  async decreaseQuantity({commit, rootGetters}, product) {
    const userId = rootGetters['auth/userId']
    const token = rootGetters['auth/token']
    const productId = product.id
    const newCount =  product.count - 1
    await cartApi.patchQuantity(userId, productId, newCount, token)
    commit('UPDATE_QUANTITY', {product, newCount})
  },
  async deleteItem({commit, rootGetters}, product) {
    const userId = rootGetters['auth/userId']
    const token = rootGetters['auth/token']
    const productId = product.id
    await cartApi.deleteItemFromCart(userId, productId, token)
    commit('REMOVE_FROM_CART', product)
  }
}