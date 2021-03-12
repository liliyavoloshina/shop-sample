<template>
  <v-app>
    <v-navigation-drawer permanent expand-on-hover app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/82.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Admin </v-list-item-title>
            <v-list-item-subtitle>admin@admin.org</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item :to="{ name: 'AdminMain' }" link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'AdminUsers' }" link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'AdminCategories' }" link>
          <v-list-item-icon>
            <v-icon>mdi-shape-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Categories</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'AdminOrders' }" link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Orders</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item :to="{ name: 'Home' }" link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Homepage</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout" link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
