import cartApi from '@/api/cart'

export default {
  async loadCart(context) {
    const userId = context.rootGetters.userId

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
        discount: responseData[key].discount,
        createdAt: responseData[key].createdAt
      }
      item.count = 1
      items.push(item)
    }

    context.commit('SET_CART', items)
  },
  async addToCart(context, product) {
    const userId = context.rootGetters.userId
    const response = await cartApi.postToCart(userId, product)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }
    context.commit('ADD_TO_CART', product)
  },
  async increaseQuantity(context, product) {
    const userId = context.rootGetters.userId
    const response = await cartApi.postToCart(userId, product)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }
    context.commit('INCREASE_QUANTITY', product)
  },
  async decreaseQuantity(context, product) {
    const userId = context.rootGetters.userId
    const response = await cartApi.postToCart(userId, product)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }
    context.commit('DECREASE_QUANTITY', product)
  },
}