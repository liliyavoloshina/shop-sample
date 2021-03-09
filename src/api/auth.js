import axios from 'axios'

const auth = async (mode, authData) => {
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API}`
  if (mode === 'signup') {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`
  }
  try {
    const response = await axios
      .post(url, authData)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const storeUser = (authData, userData) => {
  return axios.put(`/users/${authData.userId}.json?auth=${authData.token}`, userData)
}

const findUser = async (userId) => {
  const response = await axios.get(`/users/${userId}.json`)
  return response.data
}

export default {
  auth,
  storeUser,
  findUser
}
