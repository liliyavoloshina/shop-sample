<template>
  <v-app-bar color="deep-purple lighten-3" dense dark app>

    <router-link :to="{ name: 'Home' }" v-slot="{ navigate }" custom>
      <v-toolbar-title @click="navigate" class="pointer">Simple Shop</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn :to="{name: 'AdminMain'}" icon>
      <v-icon>mdi-shield-account-variant-outline</v-icon>
    </v-btn>
    <v-btn :to="{name: 'Login'}" icon>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>

    <v-btn :to="{name: 'Cart'}" icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>