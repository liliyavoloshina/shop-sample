<template>
  <v-container fluid>
    <v-list v-if="users" class="ma-5">
      <UserItem v-for="(user, index) in users" :key="index" :user="user" />
    </v-list>
    {{error}}
  </v-container>
</template>

<script>
import UserItem from '@/components/admin/UserItem'
export default {
  name: 'AdminUsers',
  components: {
    UserItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  created() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      this.isLoading = true
      try {
        await this.$store.dispatch('users/loadUsers')
      } catch (e) {
        this.error = e.message
      }
      this.isLoading = false
    }
  }
}
</script>