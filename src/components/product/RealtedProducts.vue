<template>
  <div>
    <v-row>
      <SkeletonLoader v-if="isLoading" :whatElem="'ProductItem'" />
      <v-col
        v-for="product in relatedProducts"
        :key="product.id"
        lg="4"
        md="6"
        sm="6"
        cols="12"
      >
        <Product :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '@/components/product/ProductCard'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
export default {
  name: 'RelatedProducts',
  props: {
    relatedProducts: {
      type: Array
    }
  },
  components: {
    Product,
    SkeletonLoader
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {},
}
</script>
