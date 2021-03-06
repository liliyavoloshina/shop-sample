import axios from 'axios'

const auth = (userData) => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`,
    userData
  )
}
export default {
  auth
}
