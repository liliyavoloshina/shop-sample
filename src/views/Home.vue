<template>
  <div>
    <LoaderSpinner v-if="loading" />
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <Product :product="product" />
      </v-col>
    </v-row>
  </div>
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
      products: (state) => state.products.products
    })
  },
  created() {
    this.loading = true
    this.$store
      .dispatch('setProducts')
      .then(() => {
        this.loading = false
      })
      .catch((e) => {
        this.errors = e
        console.log(e)
      })
    this.$store
      .dispatch('setCart')
      .then(() => {
        this.loading = false
      })
      .catch((e) => {
        this.errors = e
        console.log(e)
      })
  }
}
</script>
