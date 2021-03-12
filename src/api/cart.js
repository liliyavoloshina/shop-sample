import axios from '@/api/axios'

const getCart = (userId) => {
  return axios.get(`/users/${userId}/cart.json`)
}

const postToCart = (userId, product, token) => {
  return axios.post(`/users/${userId}/cart.json?auth=${token}`, product).catch((error) => error.response.data)
}

const patchQuantity = (userId, productId, newCount, token) => {
  return axios
    .get(`/users/${userId}/cart.json?orderBy="id"&equalTo="${productId}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      return axios.patch(`/users/${userId}/cart/${key}.json?auth=${token}`, {
        count: newCount
      })
    })
}

const deleteItemFromCart = (userId, productId, token) => {
  return axios
    .get(`/users/${userId}/cart.json?orderBy="id"&equalTo="${productId}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      axios.delete(`/users/${userId}/cart/${key}.json?auth=${token}`)
    })
}
const clearCart = (userId, token) => {
  return axios
    .delete(`/users/${userId}/cart.json?auth=${token}`)
}

export default {
  postToCart,
  deleteItemFromCart,
  getCart,
  patchQuantity,
  clearCart
}
