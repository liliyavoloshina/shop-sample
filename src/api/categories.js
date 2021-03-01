import axios from '@/api/axios'

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
  postNewCategory,
  getCategories,
  deleteCategory
}
