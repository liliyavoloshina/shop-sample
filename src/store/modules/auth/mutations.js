export default {
  SET_USER(state, payload) {
    state.userId = payload.userId
    state.token = payload.token
    state.username = payload.username
    state.admin = payload.admin
    state.didAutoLogout = false
  },
  SET_AUTO_LOGOUT(state) {
    state.didAutoLogout = true
  }
}
