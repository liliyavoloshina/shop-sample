import axios from '@/api/axios'

const getCart = (userId) => {
  return axios.get(`/users/${userId}/cart.json`)
}

const postToCart = (userId, product) => {
  return axios.post(`/users/${userId}/cart.json`, product)
}

const patchQuantity = (userId, productId, newCount) => {
  return axios
    .get(`/users/${userId}/cart.json?orderBy="id"&equalTo="${productId}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      return axios.patch(`/users/${userId}/cart/${key}.json`, {
        count: newCount
      })
    })
}

const deleteItemFromCart = (userId, productId) => {
  return axios
    .get(`/users/${userId}/cart.json?orderBy="id"&equalTo="${productId}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      axios.delete(`/users/${userId}/cart/${key}.json`)
    })
}

export default {
  postToCart,
  deleteItemFromCart,
  getCart,
  patchQuantity
}
