<template>
  <v-container class="mt-5 mb-5">
    <LoaderSpinner v-if="isLoading" />
    <div v-if="product != null">
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
          <v-row no-gutters style="height: 100%">
            <v-col cols="12">
              <p>{{ product.description }}</p>
              <v-chip v-if="product != null">{{ getCategoryName(product.category) }}</v-chip>
            </v-col>
            <v-col cols="12" align-self="end"
              ><span v-if="product.discount" class="text-h6 text-uppercase yellow--text text--darken-2"
                >it's on sale!</span
              >
              <div class="my-5">
                Price:
                <span class="font-weight-bold"> {{ product.price }} $</span>
              </div>
              <div><v-btn
                @click="addToCart(product)"
                :disabled="disabled || isInCart"
                block
              >
                <LoaderSpinner v-if="addingToCart" :size="20" :width="2" />
                <span v-else-if="!isInCart">Add To Cart</span>
                <span v-else-if="isInCart">In Cart!</span>
              </v-btn></div>
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <SnackbarAddToCart
        :openSnackbar="openSnackbar"
        :error="errors"
        :product="product"
      />
    </div>
    <!-- <v-row v-if="!isLoading && relatedProducts && product != null">
     {{relatedProducts}}
    </v-row> -->
  </v-container>
</template>

<script>
import LoaderSpinner from '@/components/UI/LoaderSpinner'
import SnackbarAddToCart from '@/components/UI/SnackbarAddToCart'
export default {
  name: 'Product',
  props: ['id'],
  components: {
    LoaderSpinner,
    SnackbarAddToCart
  },
  data() {
    return {
      addingToCart: false,
      openSnackbar: false,
      disabled: false,
      isLoading: false,
      errors: null
    }
  },
  computed: {
    product() {
      return this.$store.getters['products/product'](this.id)
    },
    // relatedProducts() {
    //   return this.$store.getters['products/relatedProducts'](this.id)
    // },
    isInCart() {
      return this.$store.getters['cart/isInCart'](this.id)
    }
  },
  created() {
    this.loadProducts()
    this.loadCategories()
    this.loadCart()
  },
  methods: {
    getCategoryName(id) {
      return this.$store.getters['filters/getCategoryName'](id)
    },
    
    async loadCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('filters/loadCategories')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    },
    async loadProducts() {
      this.isLoading = true
      try {
        await this.$store.dispatch('products/loadProducts')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    },
    async loadCart() {
      this.isLoading = true
      try {
        await this.$store.dispatch('cart/loadCart')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    },
    async addToCart(product) {
      this.addingToCart = true
      this.disabled = true
      try {
        await this.$store.dispatch('cart/addToCart', product)
        this.openSnackbar = true
      } catch (e) {
        this.errors = e.message
        this.openSnackbar = true
      }
      this.addingToCart = false
    },
  }
}
</script>