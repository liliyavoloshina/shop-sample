<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <v-row>
      <v-col md="3" cols="12">
        <Sidebar @change-category="setCategory" :activeCategories="activeCategories" />
      </v-col>
      {{activeCategory}}
      <v-col md="9" cols="12">
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            lg="4"
            md="6"
            sm="6"
            cols="12"
          >
            <Product :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div v-if="!products.length > 0">No products</div>
  </div>
</template>

<script>
import Product from '@/components/product/ProductCard'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
import Sidebar from '@/components/UI/TheSidebar'
export default {
  name: 'Home',
  components: {
    Product,
    LoaderSpinner,
    Sidebar
  },
  data() {
    return {
      activeCategory: [],
      isLoading: false,
      errors: null
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
    activeCategories() {
      return this.$store.getters['categories/activeCategories']
    }
  },
  methods: {
    async loadProducts() {
      this.isLoading = true
      try {
        await this.$store.dispatch('products/loadProducts')
      } catch (e) {
        this.isLoading = false
        this.errors = e
      }
      this.isLoading = false
    },
    async loadCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('categories/loadCategories')
      } catch (e) {
        this.isLoading = false
        this.errors = e
        console.log(e)
      }
      this.isLoading = false
    },
    setCategory(selected) {
      this.activeCategory = selected
    },
  },
  created() {
    this.loadProducts()
    this.loadCategories()
  }
}
</script>
