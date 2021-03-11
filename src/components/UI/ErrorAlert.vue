<template>
  <v-alert dense type="error">
    {{ error }}
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: {
    error: {
      type: String
    }
  }
}
</script>