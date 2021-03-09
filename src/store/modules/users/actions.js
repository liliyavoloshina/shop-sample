import usersApi from '@/api/users'

export default {
  async loadUsers({ commit }) {
    
    const response = await usersApi.getUsers()
    commit('SET_USERS', response)
  }
}
