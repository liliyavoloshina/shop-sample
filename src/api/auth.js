import axios from 'axios'

const auth = (mode, userData) => {
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API}`
  if (mode === 'signup') {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`
  }
  return axios
    .post(url, userData)
    .then((response) => response.data)
    .catch((error) => error.response.data)
}
export default {
  auth
}
