<template>
  <v-container class="mt-5 mb-5">
    <LoaderSpinner v-if="isLoading" />
    <div v-else>
      <div class="title mb-1">
        {{ product.name }}
      </div>
      <v-row class="mt-3">
        <v-col cols="12" md="6">
          <v-img
            v-if="product.image"
            :src="product.image"
            max-height="400"
            class="deep-purple lighten-5"
          ></v-img>
          <v-img v-else height="250" class="deep-purple lighten-5"></v-img>
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
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Product',
  props: ['id'],
  components: {
    LoaderSpinner
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {
    product() {
      return this.$store.getters['products/product'](this.id)
    },
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
    }
  },
  created() {
    this.loadProducts()
  }
}
</script>