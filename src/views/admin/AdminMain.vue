<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <AdminProductList :products="products" :loading="loading" />
      </v-col>

      <v-col>
        <AdminAddNewProduct />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
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
   computed: {
    ...mapState({
      products: state => state.products.products.slice().reverse()
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