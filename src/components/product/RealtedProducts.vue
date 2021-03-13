<template>
  <div class="mt-15 pt-10 pb-5">
    <h3 class="mb-10 mt-5 text-center text-uppercase">You may like these</h3>
    <v-row v-if="relatedProducts.length > 0">
      <v-col v-for="product in relatedProducts" :key="product.id" md="4" sm="6">
        <Product :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '@/components/product/ProductCard'
export default {
  name: 'RelatedProducts',
  props: {
    relatedProducts: {
      type: Array
    }
  },
  components: {
    Product
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  }
}
</script>
