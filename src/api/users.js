import axios from '@/api/axios'

const getUsers = async () => {
  const response = await axios.get('/users.json')
  return response.data
}

export default {
  getUsers
}
