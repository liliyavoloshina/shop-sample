<template>
  <v-list>
    <v-subheader>Products</v-subheader>
    <v-list-item v-for="product in products" :key="product.id">
      <v-list-item-avatar class="grey"><img :src="product.image"></v-list-item-avatar>
      {{product.id}}
      <v-list-item-content>
        <v-list-item-title v-text="product.name"></v-list-item-title>

        <v-list-item-subtitle v-text="product.createdAt"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click="removeProduct(product.id)">
          <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
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
    }),
  },
  methods: {
    removeProduct(id) {
      this.$store.dispatch('removeProduct', id)
    }
  }
}
</script>