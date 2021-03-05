<template>
  <v-app-bar color="deep-purple lighten-3" dense dark app>
    <router-link :to="{ name: 'Home' }" v-slot="{ navigate }" custom>
      <v-toolbar-title @click="navigate" class="pointer"
        >Simple Shop</v-toolbar-title
      >
    </router-link>

    <v-spacer></v-spacer>

    <v-btn :to="{ name: 'AdminMain' }" icon>
      <v-icon>mdi-shield-account-variant-outline</v-icon>
    </v-btn>
    <v-btn :to="{ name: 'Login' }" icon>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    
    <v-btn :to="{ name: 'Cart' }" icon>
      <v-badge :content="total" overlap> <v-icon>mdi-cart</v-icon></v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    total: {
      type: Number
    }
  }
}
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
</style>