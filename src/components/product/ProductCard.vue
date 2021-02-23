<template>
  <v-col cols="12" lg="3" md="4" sm="6">
    <v-card>
      <router-link
        :to="{ name: 'Product', params: { id: product.id } }"
        v-slot="{ navigate }"
        custom
      >
        <div @click="navigate">
          <v-card-title>{{ product.name }}</v-card-title>
          <v-img v-if="product.image" height="250" :src="product.image"></v-img>
          <v-img v-else height="250" class="deep-purple lighten-5"></v-img>
          <v-card-text>{{ product.description }}</v-card-text>
        </div>
      </router-link>
      <v-card-actions class="pa-4">
        <span class="font-weight-bold">{{ product.price }}</span>
        <v-spacer></v-spacer>
        <v-btn
          v-if="!isInCart"
          @click="addToCart(product)"
          :disabled="addingToCart"
        >
          <span>Add To Cart</span>
          <LoaderSpinner v-if="addingToCart" :size="20" :width="2" />
        </v-btn>

        <span v-else>In Cart!</span>
      </v-card-actions>
    </v-card>
    <SnackbarAddToCart :openSnackbar="openSnackbar" :product="product" />
  </v-col>
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
      openSnackbar: false
    }
  },
  computed: {
    isInCart() {
      return this.$store.getters.isInCart(this.product.id)
    }
  },
  methods: {
    addToCart(product) {
      this.addingToCart = true
      this.$store.dispatch('addToCart', product).then(() => {
        this.addingToCart = false
        this.openSnackbar = true
        setTimeout(() => {
          this.openSnackbar = false
        }, 3000)
      })
    }
  }
}
</script>
