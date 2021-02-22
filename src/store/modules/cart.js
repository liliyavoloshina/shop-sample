import cartApi from '@/api/cart'

export const mutationTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_CART: 'SET_CART'
}
export const actionTypes = {
  addToCart: 'addToCart',
  setCart: 'setCart'
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
  }
  // [mutationTypes.UPDATE_QUANTITY](state, payload) {
  // }
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
        cartApi.updateQuantity(newItem).then(
          () => {
            // commit(mutationTypes.UPDATE_QUANTITY, product)
            state.cart.map((item) =>
              item.id == product.id ? item.count++ : ''
            )
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
              () => {
                commit(mutationTypes.ADD_TO_CART, newItem)
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
