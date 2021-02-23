<template>
  <v-snackbar
    v-model="snackbarState"
    timeout="3000"
    color="amber lighten-1"
    top
    right
  >
    You added "{{ product.name }}"!
    {{ openSnackbar }}
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackbarAddToCart',
  props: {
    product: {
      type: Object
    },
    openSnackbar: {
      type: Boolean
    }
  },
  computed: {
    snackbarState: {
      get() {
        return this.openSnackbar
      },
      set(openSnackbar) {
        return openSnackbar
      }
    }
  }
}
</script>