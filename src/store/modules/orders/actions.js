import ordersApi from '@/api/orders'

export default {
  async loadOrders({commit}) {
    const response = await ordersApi.getOrders()
    const responseData = response.data

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to get orders')
      throw error
    }

    const orders = []

    for (let key in responseData) {
      const order = {...responseData[key]}
      order.id = key
      orders.push(order)
    }

    commit('SET_ORDERS', orders)
  },
  async addNewOrder({commit, rootGetters}, order) {
    const token = rootGetters['auth/token']
    const response = await ordersApi.postOrder(order, token)

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to add new order')
      throw error
    }
    commit('ADD_NEW_ORDER', order)
  },
  async removeOrder({commit, rootGetters}, id) {
    const token = rootGetters['auth/token']
    const response = await ordersApi.deleteOrder(id, token)

    if (response.error) {
      const error = new Error(response.error.message || 'Failed to add new order')
      throw error
    }
    commit('REMOVE_ORDER', id)
  }
}