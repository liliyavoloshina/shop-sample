<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" width="1%">Product</th>
            <th class="text-left"></th>
            <th class="text-left">Price</th>
            <th class="text-left pl-8">Quantity</th>
            <th class="text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <CartItem v-for="item in cart" :key="item.id" :item="item" />
        </tbody>
      </template>
    </v-simple-table>
    <v-row class="mt-12">
      <v-col
        ><div class="text-h6 text-uppercase">
          Total price: <span class="font-weight-black text-h5"> {{ totalPrice }} $</span>
        </div></v-col
      >
      <v-spacer></v-spacer>
      <v-col class="text-end"
        ><v-btn color="amber darken-1" @click="nextStep"> Continue </v-btn></v-col
      ></v-row
    >
  </div>
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
  },
  computed: {
    totalPrice() {
      return this.$store.getters['cart/totalPrice']
    }
  },
  methods: {
    nextStep() {
      this.$emit('next-step')
    }
  }
}
</script>