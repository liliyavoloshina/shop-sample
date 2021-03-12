import mutations from '@/store/modules/orders/mutations'
import actions from '@/store/modules/orders/actions'
import getters from '@/store/modules/orders/getters'

export default {
  namespaced: true,
  state() {
    return {
      orders: []
    }
  },
  mutations,
  actions,
  getters
}