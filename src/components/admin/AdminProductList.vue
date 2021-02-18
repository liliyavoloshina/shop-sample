<template>
  <v-list>
    <v-subheader>Products</v-subheader>
    <v-list-item v-for="product in products" :key="product.id">
      {{product}}
      <v-list-item-avatar class="grey"><img :src="product.image"></v-list-item-avatar>
      <!-- {{Object.keys(product)[0]}} -->
      
      <v-list-item-content>
        <v-list-item-title v-text="product.name"></v-list-item-title>

        <v-list-item-subtitle v-text="product.createdAt"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click="removeProduct(product)">
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
      products: state => state.products
    }),
  },
  methods: {
    removeProduct(product) {
      console.log(product)
      this.$store.dispatch('removeProduct', product)
    }
  }
}
</script>