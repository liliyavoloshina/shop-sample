import axios from '@/api/axios'

const addProduct = (product) => {
  return axios.post('/products.json', product)
}

const getProducts = () => {
  return axios.get('/products.json')
}

const removeProduct = (product) => {
  return axios.delete(`/products/${product}`)
}

export default {
  addProduct,
  getProducts,
  removeProduct
}
