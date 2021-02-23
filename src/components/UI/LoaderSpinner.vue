<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      :size="size"
      :color="color"
      :width="width"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    size: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: 'purple'
    },
    width: {
      type: Number,
      default: 4
    }
  }
}
</script>