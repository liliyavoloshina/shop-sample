import axios from '@/api/axios'

const addProduct = (product) => {
  return axios.post('/products.json', product)
}

const getProducts = () => {
  return axios.get('/products.json')
}

export default {
  addProduct,
  getProducts
}
