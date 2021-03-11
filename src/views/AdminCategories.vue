<template>
  <v-container fluid>
    <AdminAddNewCategory />
    <AdminCategoryList :categories="categories" :isLoading="isLoading" />
  </v-container>
</template>

<script>
import AdminCategoryList from '@/components/admin/AdminCategoryList'
import AdminAddNewCategory from '@/components/admin/AdminAddNewCategory'
export default {
  name: 'AdminCategories',
  components: {
    AdminCategoryList,
    AdminAddNewCategory
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {
    categories() {
      return this.$store.getters['filters/categories']
    }
  },
  created() {
    this.loadCategories()
  },
  methods: {
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