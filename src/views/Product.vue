<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <v-container v-if="product != null">
      <h2 class="mb-1 text-uppercase">
        {{ product.name }}
      </h2>
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
              <p class="text-uppercase">{{ product.description }}</p>
              <v-chip v-if="categories.length > 0">{{
                getCategoryName(product.category)
              }}</v-chip>
            </v-col>
            <v-col cols="12" align-self="end"
              ><span
                v-if="product.discount"
                class="text-h6 text-uppercase deep-orange--text text--darken-1"
                >it's on sale!</span
              >
              <div class="my-5 text-uppercase">
                Price:
                <span class="font-weight-bold"> {{ product.price }} $</span>
              </div>
              <div>
                <v-btn
                  @click="addToCart(product)"
                  :disabled="disabled || isInCart"
                  block
                  color="amber accent-4"
                >
                  <LoaderSpinner v-if="addingToCart" :size="20" :width="2" />
                  <span v-else-if="!isInCart">Add To Cart</span>
                  <span v-else-if="isInCart">In Cart!</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <SnackbarAddToCart
        :openSnackbar="openSnackbar"
        :error="errors"
        :product="product"
      />
    </v-container>
    <RelatedProducts
      v-if="!isLoading && product != null && relatedProducts.length > 0"
      :related-products="relatedProducts"
    />
  </div>
</template>

<script>
import RelatedProducts from '@/components/product/RealtedProducts'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
import SnackbarAddToCart from '@/components/UI/SnackbarAddToCart'
export default {
  name: 'Product',
  props: ['id'],
  components: {
    RelatedProducts,
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
    categories() {
      return this.$store.getters['filters/categories']
    },
    relatedProducts() {
      return this.$store.getters['products/relatedProducts'](this.id)
    },
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
    getCategoryName(id) {
      return this.$store.getters['filters/getCategoryName'](id)
    }
  }
}
</script>