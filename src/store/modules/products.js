import productApi from '@/api/products'

const state = {
  products: []
}

export const mutationTypes = {
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS'
}
export const actionTypes = {
  addNewProduct: 'addNewProduct',
  loadProducts: 'loadProducts'
}
const mutations = {
  [mutationTypes.UPDATE_PRODUCTS](state, payload) {
    state.products = payload
  }
}
const actions = {
  [actionTypes.addNewProduct](_, product) {
    productApi.addProduct(product)
    console.log(product)
  },
  [actionTypes.loadProducts]({ commit }) {
    return new Promise((resolve, reject) => {
      productApi.getProducts().then(
        (response) => {
          commit(mutationTypes.UPDATE_PRODUCTS, response.data)
          resolve(response.data)
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
