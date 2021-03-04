<template>
  <v-switch
    @change="changeFilterByDiscount"
    :label="`With discount`"
  ></v-switch>
</template>


<script>
export default {
  name: 'FilterByDiscount',
  methods: {
    changeFilterByDiscount() {
      this.$store.dispatch('filters/changeFilterByDiscount')
    }
  }
}
</script>