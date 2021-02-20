import productApi from '@/api/products'

const state = {
  products: []
}

export const mutationTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT'
}
export const actionTypes = {
  addNewProduct: 'addNewProduct',
  setProducts: 'setProducts',
  removeProduct: 'removeProduct'
}
const mutations = {
  [mutationTypes.SET_PRODUCTS](state, payload) {
    state.products = payload
  },
  [mutationTypes.ADD_NEW_PRODUCT](state, payload) {
    state.products.push(payload)
  },
  [mutationTypes.REMOVE_PRODUCT](state, payload) {
    const index = state.products.indexOf(payload)
    if (index > -1) {
      state.products.splice(index, 1)
    }
  }
}
const actions = {
  [actionTypes.setProducts]({ commit }) {
    return new Promise((resolve, reject) => {
      productApi.getProducts().then(
        (response) => {
          const data = response.data
          const products = []
          for (let key in data) {
            const product = data[key]
            product.id = key
            products.push(product)
          }
          commit(mutationTypes.SET_PRODUCTS, products)
          resolve()
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  [actionTypes.addNewProduct]({ commit }, product) {
    return new Promise((resolve, reject) => {
      productApi.addProduct(product).then(
        (response) => {
          const newProduct = JSON.parse(product)
          newProduct.id = response.data.name
          commit(mutationTypes.ADD_NEW_PRODUCT, newProduct)
          resolve()
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  [actionTypes.removeProduct]({commit}, product) {
    return new Promise((resolve, reject) => {
      productApi.removeProduct(product.id).then(
        () => {
          commit(mutationTypes.REMOVE_PRODUCT, product)
          resolve()
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
