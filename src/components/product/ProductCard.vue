<template>
  <v-card>
    <router-link
      :to="{ name: 'Product', params: { id: product.id } }"
      v-slot="{ navigate }"
      custom
    >
      <div @click="navigate">
        <div v-if="product.discount" class="sale-badge">Sale!</div>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-img v-if="product.image" height="250" :src="product.image"></v-img>
        <v-img v-else height="250" class="deep-purple lighten-5"></v-img>
        <v-card-text>{{ product.description }}</v-card-text>
      </div>
    </router-link>
    <v-card-actions class="pa-4">
      <span class="font-weight-bold">{{ product.price }} $</span>
      <v-spacer></v-spacer>
      <v-btn  @click="addToCart(product)" :disabled="disabled || isInCart">
        <LoaderSpinner v-if="addingToCart" :size="20" :width="2" />
        <span v-else-if="!isInCart">Add To Cart</span>
        <span v-else-if="isInCart">In Cart!</span>
      </v-btn>
    </v-card-actions>
    <SnackbarAddToCart :openSnackbar="openSnackbar" :error="error" :product="product" />
  </v-card>
</template>

<script>
import LoaderSpinner from '@/components/UI/LoaderSpinner'
import SnackbarAddToCart from '@/components/UI/SnackbarAddToCart'
export default {
  name: 'ProductCard',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  components: {
    LoaderSpinner,
    SnackbarAddToCart
  },
  data() {
    return {
      addingToCart: false,
      openSnackbar: false,
      disabled: false,
      error: null
    }
  },
  computed: {
    isInCart() {
      return this.$store.getters['cart/isInCart'](this.product.id)
    }
  },
  methods: {
    async addToCart(product) {
      this.addingToCart = true
      this.disabled = true
      try {
        await this.$store.dispatch('cart/addToCart', product)
        this.openSnackbar = true
      } catch (e) {
        this.error = e.message
        this.openSnackbar = true
      }
      this.addingToCart = false
    }
  }
}
</script>

<style scoped>
.sale-badge {
  position: absolute;
  right: 0;
  width: 50px;
  height: 30px;
  background-color: rgb(250, 228, 35);
  text-align: center;
  border-radius: 10px;
  line-height: 30px;
}
</style>
