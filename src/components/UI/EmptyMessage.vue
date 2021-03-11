<template>
  <v-alert color="blue-grey" dark dense icon="mdi-weather-windy">
    <slot></slot>
  </v-alert>
</template>

<script>
export default {
  name: 'EmptyMessage'
}
</script>