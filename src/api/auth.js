import axios from 'axios'

const auth = (userData) => {
  return axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`,
      userData
    )
    .then((response) => response.data)
    .catch((error) => error.response.data)
}
export default {
  auth
}
