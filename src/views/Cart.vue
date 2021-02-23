<template>
<div>
  <v-list v-if="cart.length > 0" dense>
    <CartItem v-for="(item, index) in cart" :key="index" :item="item" />
  </v-list>
  <div v-else class="text-center">
    Wow, such empty...
  </div>
</div>
  
</template>

<script>
import { mapState } from 'vuex'
import CartItem from '@/components/cart/CartItem'
export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart
    })
  },
  created() {
    this.$store.dispatch('setCart')
  }
}
</script>
