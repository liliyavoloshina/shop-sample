import axios from '@/api/axios'

const postNewCategory = (category) => {
  return axios.post('/categories.json', category)
}

const getCategories = () => {
  return axios.get('/categories.json')
}

const deleteCategory = (categoryId) => {
  return axios.delete(`/categories/${categoryId}.json`)
}

const patchCategory = async (categoryId, quantity) => {
  const response = await axios.get(`/categories/${categoryId}.json`)
  let initialCount = response.data.count
  if (quantity == 'increase') {
    return axios.patch(`/categories/${categoryId}.json`, {"count": initialCount + 1})
  } else {
    return axios.patch(`/categories/${categoryId}.json`, {"count": initialCount - 1})
  }
}

export default {
  postNewCategory,
  getCategories,
  deleteCategory,
  patchCategory
}
