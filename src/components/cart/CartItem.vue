<template>
  <v-list-item>
    <v-list-item-avatar></v-list-item-avatar>
    <v-list-item-title>{{item.name}}</v-list-item-title>

    <v-list-item-subtitle class="text--primary">{{item.description}}</v-list-item-subtitle>

    <v-list-item-subtitle></v-list-item-subtitle>

    <v-btn icon color="pink">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <div>{{item.count}}</div>
    <v-btn @click="addMore(item)" icon color="pink">
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
    addMore(product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>