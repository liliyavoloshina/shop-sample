<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ user.username }}</v-list-item-title>
        <v-list-item-subtitle> Admin: {{ user.admin }} </v-list-item-subtitle>
        <v-list-item-subtitle v-if="user.cart">
          Products in cart: {{ cartLength }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    cartLength() {
      return Object.keys(this.user.cart).length
    }
  }
}
</script>