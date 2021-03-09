export default {
  userId(state) {
    return state.userId
  },
  username(state) {
    return state.username
  },
  token(state) {
    return state.token
  },
  isAuthenticated: state => state.token ? true : false,
  didAutoLogout(state) {
    return state.didAutoLogout
  },
  isAdmin(state) {
    return state.admin
  }
}
