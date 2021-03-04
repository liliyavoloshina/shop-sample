<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <AdminProductList :products="products" :isLoading="isLoading" />
      </v-col>

      <v-col>
        <AdminAddNewProduct :categories="categories" />
      </v-col>
    </v-row>
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
        this.isLoading = false
        this.errors = e
      }
      this.isLoading = false
    },
    async loadCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('filters/loadCategories')
      } catch (e) {
        this.isLoading = false
        this.errors = e
        console.log(e)
      }
      this.isLoading = false
    }
  }
}
</script>