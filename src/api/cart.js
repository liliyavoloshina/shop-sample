import axios from '@/api/axios'

const getCart = () => {
  return axios.get('/cart.json')
}
const addToCart = (product) => {
  return axios.post('/cart.json', product)
}
const addQuantity = (product) => {
  return axios
    .get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      axios.patch(`/cart/${key}.json`, {"count": 1})
    })
}
const updateQuantity = (product) => {
  return axios
    .get(`/cart.json?orderBy="id"&equalTo="${product.id}"`)
    .then((response) => {
      let key = Object.keys(response.data)[0]
      let newCount = Number(Object.values(response.data)[0].count + 1)
      let newCounter = {
        count: newCount
      }
      axios.patch(`/cart/${key}.json`, JSON.stringify(newCounter))
    })
}

export default {
  addToCart,
  getCart,
  addQuantity,
  updateQuantity
}
