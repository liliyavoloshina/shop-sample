import usersApi from '@/api/users'

export default {
  async loadUsers({ commit }) {
    const response = await usersApi.getUsers()
    const responseData = response.data

    if (response.status != 200) {
      const error = new Error(response.data || 'Failed to get users')
      throw error
    }
    const users = []

    for (let key in responseData) {
      const user = {
        id: key,
        username: responseData[key].username,
        admin: responseData[key].admin,
        cart: responseData[key].cart
      }
      users.push(user)
    }

    commit('SET_USERS', users)
  }
}
