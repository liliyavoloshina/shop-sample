<template>
  <v-snackbar v-model="openSnackbar" timeout="3000" top right>
    {{product.name}} {{product.count}}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs"> Close </v-btn>
    </template>
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
  }
}
</script>