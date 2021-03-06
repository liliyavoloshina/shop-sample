import authApi from '@/api/auth'

export default {
  async auth({ commit }, payload) {
    const mode = payload.mode
    if (mode === 'signup') {
      const authData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }
      const userData = {
        username: payload.name
      }
      const response = await authApi.auth(authData)

      if (response.error) {
        const error = new Error(
          (response.error.message == 'EMAIL_EXISTS'
            ? 'This e-mail is already in use'
            : 'Failed to authenticate') || 'Failed to authenticate'
        )
        throw error
      }

      localStorage.setItem('token', response.idToken)
      localStorage.setItem('userId', response.localId)

      const dataToStore = {
        userId: response.localId,
        token: response.idToken,
        username: userData.username
      }

      commit('SET_USER', dataToStore)
    }
  },
  checkLogin({ commit }) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (token && userId) {
      commit('SET_USER', {
        token: token,
        userId: userId
      })
    }
  }
}
