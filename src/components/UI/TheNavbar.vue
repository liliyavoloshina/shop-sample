<template>
  <v-app-bar color="deep-purple lighten-3" dense dark app>

    <v-toolbar-title>Simple Shop</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :to="{name: 'AdminMain'}" icon>
      <v-icon>mdi-shield-account-variant-outline</v-icon>
    </v-btn>
    <v-btn :to="{name: 'Login'}" icon>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>