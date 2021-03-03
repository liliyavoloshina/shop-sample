<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <v-row>
      <v-col md="3" cols="12">
        <Sidebar :activeCategories="activeCategories" />
      </v-col>

      <v-col md="9" cols="12">
        <v-row>
          <v-col
            v-for="product in filteredProducts"
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
      isLoading: false,
      errors: null,
      filters: {
        category: (category) => this.selectedCategories.includes(category)
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
    activeCategories() {
      return this.$store.getters['categories/activeCategories']
    },
    selectedCategories() {
      return this.$store.getters['categories/selectedCategories']
    },
    filteredProducts() {
      const products = this.$store.getters['products/products']
      const filters = this.filters

      const filterKeys = Object.keys(filters)
      return products.filter((item) => {
        // validates all filter criteria
        return filterKeys.every((key) => {
          // ignores non-function predicates
          if (typeof filters[key] !== 'function') return true
          return filters[key](item[key])
        })
      })
    }
  },
  created() {
    this.loadProducts()
    this.loadCategories()
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
        this.errors = e
        console.log(e)
      }
      this.isLoading = false
    }
  }
}
</script>
