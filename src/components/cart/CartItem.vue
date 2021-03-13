<template>
  <tr>
    <td><v-img :src="item.image" max-width="60" max-height="60"></v-img></td>
    <td>
      {{ item.name }}
    </td>
    <td>{{ item.price }}$</td>
    <td>
      <v-btn
        v-if="item.count > 1"
        @click="decreaseQuantity(item)"
        icon
        color="deep-orange accent-3"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-btn v-if="item.count == 1" @click="deleteItem(item)" icon color="deep-orange accent-3">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <span>{{ item.count }}</span>
      <v-btn @click="increaseQuantity(item)" icon color="green darken-1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </td>
    <td>{{subtotalPrice}} $</td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    subtotalPrice() {
      return this.item.count * this.item.price
    }
  },
  methods: {
    async increaseQuantity(product) {
      try {
        await this.$store.dispatch('cart/increaseQuantity', product)
      } catch (e) {
        console.log(e)
      }
    },
    async decreaseQuantity(product) {
      try {
        await this.$store.dispatch('cart/decreaseQuantity', product)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteItem(product) {
      try {
        await this.$store.dispatch('cart/deleteItem', product)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>