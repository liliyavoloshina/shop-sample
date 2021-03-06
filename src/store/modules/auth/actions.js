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
      const responseData = await response.data
      console.log(response)
      if (!response.status < 200) {
        const error = new Error(
          responseData.error.message || 'Failed to authenticate'
        )
        console.log(error)
        throw error
      }

      const dataToStore = {
        userId: responseData.localId,
        token: responseData.idToken,
        username: userData.username
      }

      localStorage.setItem('token', responseData.idToken)
      localStorage.setItem('userId', responseData.localId)

      commit('SET_USER', dataToStore)
    }
  }
}
