<template>
  <v-range-slider
    v-model="range"
    :max="maxProductsPrice"
    :min="minProductsPrice"
    :thumb-size="24"
    @change="changeFilterByPrice"
    hide-details
    class="align-center"
    thumb-color="primary"
    thumb-label
  ></v-range-slider>
</template>

<script>
export default {
  name: 'FilterByPrice',
  data() {
    return {
      range: [this.minProductsPrice, this.maxProductsPrice]
    }
  },
  computed: {
    maxProductsPrice() {
      return this.$store.getters['filters/maxProductsPrice']
    },
    minProductsPrice() {
      return this.$store.getters['filters/minProductsPrice']
    }
  },
  methods: {
    changeFilterByPrice() {
      this.$store.dispatch('filters/changeFilterByPrice', this.range)
    }
  }
}
</script>