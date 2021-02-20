<template>
  <v-container class="mt-5 mb-5">
    <LoaderSpinner v-if="loading"/>
    <div v-else>
      <div class="title mb-1">
        {{ product.name }}
      </div>
      <v-row class="mt-3">
        <v-col cols="12" md="6">
          <v-img
            :src="product.image"
            max-height="400"
            class="deep-purple lighten-5"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row align="center" no-gutters style="height: 100%">
            <v-col cols="12"
              ><div class="body-1">{{ product.description }}</div></v-col
            >
            <v-col cols="12"
              ><div class="font-weight-bold">
                Price: {{ product.price }} $
              </div></v-col
            >
            <v-col cols="12"
              ><div><v-btn>Buy</v-btn></div></v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Product',
  components: {
    LoaderSpinner
  },
  data() {
    return {
      loading: false,
      errors: null
    }
  },
  computed: {
    ...mapState({
      product: state => state.products.product
    })
  },
  created() {
    this.loading = true
    this.$store.dispatch('getProduct', this.$route.params.id).then(() => {
      this.loading = false
    })
  }
}
</script>