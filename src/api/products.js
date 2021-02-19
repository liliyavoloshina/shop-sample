import axios from '@/api/axios'

const addProduct = (product) => {
  return axios.post('/products.json', product)
}

const getProducts = () => {
  return axios.get('/products.json')
}

const removeProduct = (id) => {
  return axios.get(`/products.json?orderBy="$key"&equalTo="${id}"`).then(response => {
    let key = Object.keys(response.data)[0]
    axios.delete(`/products/${key}.json`)
  })
}

export default {
  addProduct,
  getProducts,
  removeProduct
}
