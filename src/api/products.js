import axios from '@/api/axios'

const postNewProduct = async (product, token) => {
  try {
    const response = axios.post(`/products.json?auth=${token}`, product)
    return response
  } catch (error) {
    return error
  }
}

const getProducts = () => {
  return axios.get('/products.json')
}

const deleteProduct = (id, token) => {
  return axios.delete(`/products/${id}.json?auth=${token}`)
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
