import axios from '@/api/axios'

const postNewCategory = (category, token) => {
  return axios.post(`/categories.json?auth=${token}`, category)
}

const getCategories = () => {
  return axios.get('/categories.json')
}

const deleteCategory = (categoryId, token) => {
  return axios.delete(`/categories/${categoryId}.json?auth=${token}`)
}

const patchCategory = async (categoryId, quantity, token) => {
  const response = await axios.get(`/categories/${categoryId}.json?auth=${token}`)
  let initialCount = response.data.count
  if (quantity == 'increase') {
    return axios.patch(`/categories/${categoryId}.json?auth=${token}`, {"count": initialCount + 1})
  } else {
    return axios.patch(`/categories/${categoryId}.json?auth=${token}`, {"count": initialCount - 1})
  }
}

export default {
  postNewCategory,
  getCategories,
  deleteCategory,
  patchCategory
}
