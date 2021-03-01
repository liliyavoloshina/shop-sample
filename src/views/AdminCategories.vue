<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <AdminCategoryList :categories="categories" :isLoading="isLoading" />
      </v-col>
      <v-col>
        <AdminAddNewCategory />
      </v-col>
    </v-row>
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
      return this.$store.getters['categories/categories']
    }
  },
  created() {
    this.loadCategories()
  },
  methods: {
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
    }
  }
}
</script>