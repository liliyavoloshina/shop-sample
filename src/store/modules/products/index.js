import mutations from '@/store/modules/products/mutations'
import actions from '@/store/modules/products/actions'
import getters from '@/store/modules/products/getters'

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      categories: []
    }
  },
  mutations,
  actions,
  getters
}