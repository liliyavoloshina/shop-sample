<template>
  <v-snackbar
    v-model="snackbarState"
    :timeout="timeout"
    :color="snackColor"
    top
    right
  >
    {{snackText}}
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
    },
    error: {
      type: String
    }
  },
  data() {
    return {
      timeout: 3000
    }
  },
  computed: {
    snackColor() {
      if (this.error != null) {
        return 'red darken-2'
      } else {
        return 'amber lighten-1'
      }
    },
    snackText() {
      if (this.error != null) {
        return 'You must be logged in to start shopping!'
      } else {
        return `You added "${this.product.name }!`
      }
    },
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