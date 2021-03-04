import axios from '@/api/axios'

const getCart = (userId) => {
  return axios.get(`/users/${userId}/cart.json`)
}

const postToCart = (userId, product) => {
  return axios.post(`/users/${userId}/cart.json`, product)
}

const removeFromCart = (id) => {
  return axios
    .get(`/cart.json?orderBy="id"&equalTo="${id}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      axios.delete(`/cart/${key}.json`)
    })
}

const addQuantity = (product) => {
  return axios
    .get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      return axios.patch(`/cart/${key}.json`, { count: 1 }).then(() => {
        return axios.get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
      })
    })
}

const updateQuantity = (product, quantity) => {
  return axios
    .get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      let newCount
      if (quantity == 'increase') {
        newCount = Number(Object.values(response.data)[0].count + 1)
      } else {
        newCount = Number(Object.values(response.data)[0].count - 1)
      }
      let newCounter = {
        count: newCount
      }
      return axios.patch(`/cart/${key}.json`, JSON.stringify(newCounter)).then(() => {
        return axios.get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
      })
    })
}

export default {
  postToCart,
  removeFromCart,
  getCart,
  addQuantity,
  updateQuantity
}
