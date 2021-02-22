<template>
  <v-list dense>
    <CartItem v-for="(item, index) in cart" :key="index" :item="item" />
  </v-list>
</template>

<script>
import {mapState} from 'vuex'
import CartItem from '@/components/cart/CartItem'
export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  created() {
    this.$store.dispatch('setCart')
  }
}
</script>
