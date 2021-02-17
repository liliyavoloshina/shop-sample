<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <AdminProductList />
      </v-col>

      <v-col>
        <AdminAddNewProduct />
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
      loading: false,
      errors: null
    }
  },
  created() {
    this.loading = true
    this.$store
      .dispatch('loadProducts')
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