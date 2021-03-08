import axios from 'axios'

const auth = (mode, authData) => {
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API}`
  if (mode === 'signup') {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`
  }
  return axios
    .post(url, authData)
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

const storeUser = (authUserData, personalData) => {
  return axios.put(`/users/${authUserData.userId}.json?auth=${authUserData.token}`, personalData)
}

const findUser = (userId) => {
  return axios.get(`/users/${userId}.json`).then(response => response.data)
}

export default {
  auth,
  storeUser,
  findUser
}
