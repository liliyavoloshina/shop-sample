import mutations from '@/store/modules/auth/mutations'
import actions from '@/store/modules/auth/actions'
import getters from '@/store/modules/auth/getters'

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      username: 'Unknown',
      admin: false,
      didAutoLogout: false
    }
  },
  mutations,
  actions,
  getters
}
