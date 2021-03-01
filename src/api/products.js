import axios from '@/api/axios'

const postNewProduct = (product) => {
  return axios.post('/products.json', product)
}

const getProducts = () => {
  return axios.get('/products.json')
}

const deleteProduct = (id) => {
  return axios.delete(`/products/${id}.json`)
}

const getProduct = (id) => {
  return axios.get(`/products/${id}`)
}

const postNewCategory = (category) => {
  return axios.post('/categories.json', category)
}

const getCategories = () => {
  return axios.get('/categories.json')
}

const deleteCategory = (id) => {
  return axios.delete(`/categories/${id}.json`)
}

export default {
  postNewProduct,
  getProducts,
  deleteProduct,
  getProduct,
  postNewCategory,
  getCategories,
  deleteCategory
}
