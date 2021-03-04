export default {
  SET_CART(state, payload) {
    state.cart = payload
  },
  ADD_TO_CART(state, payload) {
    
    if (state.cart.find(item => item.id == payload.id)) {
      let item = state.cart.find(item => item.id == payload.id)
      item.count++
    } else {
      let stateItem = { ...payload }
      stateItem.count = 1
      state.cart.push(stateItem)
    }
  },
  // UPDATE_QUANTITY(state, payload) {
  //   state.cart = state.cart.map((item) =>
  //     item.id == payload.id ? payload : item
  //   )
  // },
  // REMOVE_FROM_CART(state, payload) {
  //   const removingItem = state.cart.find((item) => item.id == payload.id)
  //   const index = state.cart.indexOf(removingItem)
  //   if (index > -1) {
  //     state.cart.splice(index, 1)
  //   }
  // }
}
