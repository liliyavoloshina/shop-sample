import mutations from '@/store/modules/cart/mutations'
import actions from '@/store/modules/cart/actions'
import getters from '@/store/modules/cart/getters'

export default {
  namespaced: true,
  state() {
    return {
      cart: []
    }
  },
  mutations,
  actions,
  getters
}