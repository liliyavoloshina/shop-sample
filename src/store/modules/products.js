import productApi from '@/api/products'

const state = {
  products: []
}

export const mutationTypes = {
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS'
}
export const actionTypes = {
  addNewProduct: 'addNewProduct',
  loadProducts: 'loadProducts',
  removeProduct: 'removeProduct'
}
const mutations = {
  [mutationTypes.UPDATE_PRODUCTS](state, payload) {
    state.products = payload
  }
}
const actions = {
  [actionTypes.addNewProduct](_, product) {
    return new Promise((resolve, reject) => {
      productApi.addProduct(product).then(
        () => {
          resolve()
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  [actionTypes.loadProducts]({ commit }) {
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
          commit(mutationTypes.UPDATE_PRODUCTS, products)
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  [actionTypes.removeProduct](_, id) {
    return new Promise((resolve, reject) => {
      productApi.removeProduct(id).then(
        () => {
          // commit(mutationTypes.UPDATE_PRODUCTS, response.data)
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
