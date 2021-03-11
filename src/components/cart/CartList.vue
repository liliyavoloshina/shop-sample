<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" width="1%">Product</th>
          <th class="text-left"></th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <CartItem v-for="item in cart" :key="item.id" :item="item" />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import CartItem from '@/components/cart/CartItem'
export default {
  name: 'CartList',
  props: {
    cart: {
      type: Array
    }
  },
  components: {
    CartItem
  }
}
</script>