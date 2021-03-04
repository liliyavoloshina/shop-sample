<template>
  <div>
    <v-list v-if="cart.length > 0" dense>
      <CartItem v-for="(item, index) in cart" :key="index" :item="item" />
    </v-list>
    <div v-else class="text-center">Wow, such empty...</div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import CartItem from '@/components/cart/CartItem'
export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    }
  },
  created() {
    this.loadCart()
  },
  methods: {
    async loadCart() {
      this.isLoading = true
      try {
        await this.$store.dispatch('cart/loadCart')
      } catch (e) {
        this.isLoading = false
        this.errors = e
      }
      this.isLoading = false
    }
  }
}
</script>

