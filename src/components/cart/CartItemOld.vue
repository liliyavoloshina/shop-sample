<template>
  <v-list-item>
    <v-list-item-avatar></v-list-item-avatar>
    <v-list-item-title>{{ item.name }}</v-list-item-title>

    <v-list-item-subtitle class="text--primary">{{
      item.description
    }}</v-list-item-subtitle>

    <v-list-item-subtitle></v-list-item-subtitle>

    <v-btn v-if="item.count > 1" @click="decreaseQuantity(item)" icon color="pink">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn v-else @click="deleteItem(item)" icon color="red">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <div>{{ item.count }}</div>
    <v-btn @click="increaseQuantity(item)" icon color="pink">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
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