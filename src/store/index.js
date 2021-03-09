import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products/index'
import filters from '@/store/modules/filters/index'
import cart from '@/store/modules/cart/index'
import auth from '@/store/modules/auth/index'
import users from '@/store/modules/users/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products,
    cart,
    filters,
    auth,
    users
  }
})

export default store
