import cartApi from '@/api/cart'

export const mutationTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_CART: 'SET_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}
export const actionTypes = {
  addToCart: 'addToCart',
  setCart: 'setCart',
  removeFromCart: 'removeFromCart'
}

const state = {
  cart: []
}

const mutations = {
  [mutationTypes.SET_CART](state, payload) {
    state.cart = payload
  },
  [mutationTypes.ADD_TO_CART](state, payload) {
    state.cart.push(payload)
  },
  [mutationTypes.UPDATE_QUANTITY](state, payload) {
    state.cart = state.cart.map((item) =>
      item.id == payload.id ? payload : item
    )
  },
  [mutationTypes.REMOVE_FROM_CART](state, payload) {
    const removingItem = state.cart.find(item => item.id == payload.id)
    const index = state.cart.indexOf(removingItem)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  }
}

const actions = {
  [actionTypes.setCart]({ commit }) {
    return new Promise((resolve, reject) => {
      cartApi.getCart().then(
        (response) => {
          let data = response.data
          if (data == null) {
            data = []
          }
          const items = []
          for (let key in data) {
            const item = data[key]
            items.push(item)
          }
          commit(mutationTypes.SET_CART, items)
          resolve()
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  [actionTypes.addToCart]({ commit, state }, product) {
    return new Promise((resolve, reject) => {
      let newItem = { ...product }
      if (state.cart.find((item) => item.id == product.id)) {
        cartApi.updateQuantity(newItem, 'increase').then(
          (response) => {
            let updatedItem = ''
            for (let key in response.data) {
              const product = response.data[key]
              updatedItem = product
            }
            commit(mutationTypes.UPDATE_QUANTITY, updatedItem)
            resolve()
          },
          (error) => {
            reject(error)
          }
        )
      } else {
        cartApi.addToCart(newItem).then(
          () => {
            cartApi.addQuantity(newItem).then(
              (response) => {
                let updatedItem = ''
                for (let key in response.data) {
                  const product = response.data[key]
                  updatedItem = product
                }
                commit(mutationTypes.ADD_TO_CART, updatedItem)
                resolve()
              },
              (error) => {
                reject(error)
              }
            )

            resolve()
          },
          (error) => {
            reject(error)
          }
        )
      }
    })
  },
  [actionTypes.removeFromCart]({ commit }, product) {
    return new Promise((resolve, reject) => {
      let newItem = { ...product }
      if (product.count > 1) {
        cartApi.updateQuantity(newItem, 'descrease').then(
          (response) => {
            let updatedItem = ''
            for (let key in response.data) {
              const product = response.data[key]
              updatedItem = product
            }
            commit(mutationTypes.UPDATE_QUANTITY, updatedItem)
            resolve()
          },
          (error) => {
            reject(error)
          }
        )
      } else {
        cartApi.removeFromCart(newItem.id).then(
          () => {
            commit(mutationTypes.REMOVE_FROM_CART, newItem)
            resolve()
          },
          (error) => {
            reject(error)
          }
        )
      }
    })
  }
}

const getters = {
  isInCart: (state) => (id) => {
    return state.cart.find((item) => item.id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
