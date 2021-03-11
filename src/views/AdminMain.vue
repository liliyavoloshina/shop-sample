<template>
  <v-container fluid>
    <AdminAddNewProduct :categories="categories" />
    <AdminProductList
      :products="products"
      :isLoading="isLoading"
      :errors="errors"
    />
  </v-container>
</template>

<script>
import AdminProductList from '@/components/admin/AdminProductList'
import AdminAddNewProduct from '@/components/admin/AdminAddNewProduct'
export default {
  name: 'AdminMain',
  components: {
    AdminProductList,
    AdminAddNewProduct
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
    categories() {
      return this.$store.getters['filters/categories']
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
        this.errors = e.message
      }
      this.isLoading = false
    },
    async loadCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('filters/loadCategories')
      } catch (e) {
        this.errors = e.message
      }
      this.isLoading = false
    }
  }
}
</script>