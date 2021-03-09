import axios from '@/api/axios'

const getUsers = async () => {
  try {
    const response = await axios.get('/users.json')
    return response
  } catch (error) {
    return error.response
  }
}

export default {
  getUsers
}
