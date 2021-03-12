export default {
  SET_CART(state, payload) {
    state.orders = payload
  },
  ADD_NEW_ORDER(state, payload) {
    state.orders.push(payload)
  }
}
