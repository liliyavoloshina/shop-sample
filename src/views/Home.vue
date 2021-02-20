<template>
  <v-container class="mt-5 mb-5">
    <LoaderSpinner v-if="loading" />
    <v-row>
      <Product v-for="product in products" :key="product.id" :product="product" />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Product from '@/components/product/ProductCard'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Home',
  components: {
    Product,
    LoaderSpinner
  },
  data() {
    return {
      loading: true,
      errors: null
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products
    })
  },
  created() {
    this.loading = true
    this.$store
      .dispatch('setProducts')
      .then(() => {
        this.loading = false
      })
      .catch(e => {
        this.errors = e
        console.log(e)
      })
  }
}
</script>
