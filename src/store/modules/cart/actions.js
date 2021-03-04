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
        count: responseData[key].count,
        discount: responseData[key].discount,
        createdAt: responseData[key].createdAt
      }
      items.push(item)
    }

    context.commit('SET_CART', items)
  },
  async addToCart(context, product) {
    const newProduct = {...product}
    newProduct.count = 1

    const userId = context.rootGetters.userId
    const response = await cartApi.postToCart(userId, newProduct)

    if (!response.status == 200) {
      const error = new Error(response.message || 'Failed to get products')
      throw error
    }
    context.commit('ADD_TO_CART', newProduct)
  },
  async increaseQuantity(context, product) {
    const userId = context.rootGetters.userId
    const productId = product.id
    const newCount =  product.count + 1
    console.log(newCount)
    await cartApi.patchQuantity(userId, productId, newCount)
    context.commit('UPDATE_QUANTITY', {product, newCount})
  },
  async decreaseQuantity(context, product) {
    const userId = context.rootGetters.userId
    const productId = product.id
    const newCount =  product.count - 1
    await cartApi.patchQuantity(userId, productId, newCount)
    context.commit('UPDATE_QUANTITY', {product, newCount})
  },
  async deleteItem(context, product) {
    const userId = context.rootGetters.userId
    const productId = product.id
    await cartApi.deleteItemFromCart(userId, productId)
    context.commit('REMOVE_FROM_CART', product)
  }
}