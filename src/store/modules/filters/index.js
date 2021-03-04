import mutations from '@/store/modules/filters/mutations'
import actions from '@/store/modules/filters/actions'
import getters from '@/store/modules/filters/getters'

export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      selectedCategories: [],
      selectedDiscount: false,
      selectedPrice: [],
      initialRangeValue: []
    }
  },
  mutations,
  actions,
  getters
}