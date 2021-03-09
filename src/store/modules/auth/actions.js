import authApi from '@/api/auth'

let timer

export default {
  async auth({ commit, dispatch }, payload) {
    const mode = payload.mode

    const authData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }

    const response = await authApi.auth(mode, authData)

    if (response.error) {
      let errorMessage
      switch (response.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This e-mail is already in use'
          break
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'User with this email does not exist'
          break
        case 'INVALID_EMAIL':
          errorMessage = 'Wrong e-mail'
          break
        case 'INVALID_PASSWORD':
          errorMessage = 'Wrong password'
          break
        default:
          errorMessage = 'Failed to authenticate'
      }
      const error = new Error(errorMessage)
      throw error
    }

    const expiresIn = +response.expiresIn * 1000
    const expirationTime = new Date().getTime() + expiresIn

    localStorage.setItem('token', response.idToken)
    localStorage.setItem('userId', response.localId)
    localStorage.setItem('tokenExpiration', expirationTime)

    timer = setTimeout(function() {
      dispatch('autoLogout')
    }, expiresIn)

    if (mode == 'signup') {
      const authData = {
        userId: response.localId,
        token: response.idToken
      }
      const userData = {
        username: payload.username,
        admin: payload.admin
      }
      await authApi.storeUser(authData, userData)
      commit('SET_USER', {...authData, ...userData})
    }

    if (mode == 'login') {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const response = await authApi.findUser(userId)
      const dataToStore = {
        userId: userId,
        token: token,
        username: response.username,
        admin: response.admin
      }
      commit('SET_USER', dataToStore)
    }
  },
  logout({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    const dataToStore = {
      userId: null,
      token: null,
      username: null,
      admin: false
    }

    clearTimeout(timer)

    commit('SET_USER', dataToStore)
  },
  async checkLogin({ commit, dispatch }) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function() {
      dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      const response = await authApi.findUser(userId)
      const dataToStore = {
        userId: userId,
        token: token,
        username: response.username,
        admin: response.admin
      }
      console.log(new Date() + 'set user')

      commit('SET_USER', dataToStore)
    }
  },
  autoLogout({ commit, dispatch }) {
    dispatch('logout')
    commit('SET_AUTO_LOGOUT')
  }
}
