import ordersApi from '@/api/orders'

export default {
  async loadOrders({commit}) {
    const response = await ordersApi.getOrders()
    const responseData = response.data

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to get orders')
      throw error
    }

    commit('SET_ORDERS', responseData)
  },
  async addNewOrder({commit, rootGetters}, order) {
    const token = rootGetters['auth/token']
    const response = await ordersApi.postOrder(order, token)

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to add new order')
      throw error
    }
    commit('ADD_NEW_ORDER', order)
  }
}