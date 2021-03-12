import axios from '@/api/axios'

const getOrders = (token) => {
  return axios.get(`/orders.json?auth=${token}`)
}

const postOrder = async (order, token) => {
  try {
    return axios.post(`/orders.json?auth=${token}`, order)
  } catch (error) {
    return error.response.data
  }
}

export default {
  getOrders,
  postOrder
}
