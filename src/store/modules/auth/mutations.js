export default {
  SET_USER(state, payload) {
    state.userId = payload.userId
    state.token = payload.token
    // state.username = payload.username
  }
}
