<template>
  <v-alert color="grey" dark dense icon="mdi-weather-windy">
    <slot></slot>
  </v-alert>
</template>

<script>
export default {
  name: 'EmptyMessage'
}
</script>