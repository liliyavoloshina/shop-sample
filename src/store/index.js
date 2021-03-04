import Vue from 'vue'
import Vuex from 'vuex'
// import products from '@/store/modules/products'
import products from '@/store/modules/products/index'
import filters from '@/store/modules/filters/index'
import cart from '@/store/modules/cart'
// import cart from '@/store/modules/cart/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    products,
    cart,
    filters
  }
})
