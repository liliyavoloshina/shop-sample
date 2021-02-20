<template>
  <div v-if="products.length > 0">
    <v-subheader>Products</v-subheader>
    <v-list>
      <transition-group name="list">
        <v-list-item v-for="product in products" :key="product.id">
          <v-list-item-avatar class="grey"
            ><img :src="product.image"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="product.name"></v-list-item-title>

            <v-list-item-subtitle
              v-text="product.createdAt"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click="removeProduct(product)">
              <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </transition-group>
    </v-list>
  </div>
  <div v-else>
    So empty...
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminProductList',
  computed: {
    ...mapState({
      products: state => state.products.products.slice().reverse()
    })
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch('removeProduct', product)
    }
  }
}
</script>

<style scoped>
.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-enter-active {
  transition: all .2s ease-out;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.list-leave-active {
  transition: all .2s ease-in;
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform .2s ease;
}
</style>