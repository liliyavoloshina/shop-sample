import axios from '@/api/axios'

const getOrders = () => {
  return axios.get(`/orders.json`)
}

const postOrder = async (order, token) => {
  try {
    return axios.post(`/orders.json?auth=${token}`, order)
  } catch (error) {
    return error.response.data
  }
}
const deleteOrder = async (id, token) => {
  try {
    return axios.delete(`/orders/${id}.json?auth=${token}`)
  } catch (error) {
    return error.response.data
  }
}

export default {
  getOrders,
  postOrder,
  deleteOrder
}
