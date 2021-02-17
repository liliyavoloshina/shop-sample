<template>
  <v-list>
    <v-subheader>Products</v-subheader>

    <v-list-item v-for="product in products" :key="product.id">
      <v-list-item-avatar class="grey"><img :src="product.image"></v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="product.name"></v-list-item-title>

        <v-list-item-subtitle v-text="product.createdAt"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminProductList',
  computed: {
    ...mapState({
      products: state => state.products.products
    })
  }
}
</script>