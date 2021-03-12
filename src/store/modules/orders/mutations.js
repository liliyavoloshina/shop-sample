export default {
  SET_ORDERS(state, payload) {
    state.orders = payload
  },
  ADD_NEW_ORDER(state, payload) {
    state.orders.push(payload)
  },
  REMOVE_ORDER(state, payload) {
    const removingItem = state.orders.find((item) => item.id == payload)
    const index = state.orders.indexOf(removingItem)
    if (index > -1) {
      state.orders.splice(index, 1)
    }
  },
}
