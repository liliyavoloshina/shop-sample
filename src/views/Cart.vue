<template>
  <v-stepper v-model="stepper" class="elevation-0" color="red">
    <v-stepper-header class="elevation-0">
      <v-stepper-step color="orange darken-4" :complete="stepper > 1" step="1">
        Your Cart
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="orange darken-4" :complete="stepper > 2" step="2">
        Shipping
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="orange darken-4" step="3">
        Confirmation
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <LoaderSpinner v-if="isLoading" />
        <CartList
          v-else-if="cart.length > 0"
          :cart="cart"
          @next-step="stepper = 2"
        />
        <EmptyMessage v-else>
          <v-row align="center">
            <v-col>It is still empty here.</v-col>

            <v-spacer></v-spacer>
            <v-col>
              <v-btn :to="{ name: 'Home' }" color="white" light>Start shopping now!</v-btn>
            </v-col>
          </v-row>
        </EmptyMessage>
      </v-stepper-content>

      <v-stepper-content step="2">
        <ShippingForm @next-step="stepper = 3" @prev-step="stepper = 1" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <CartConfirmation />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CartList from '@/components/cart/CartList'
import ShippingForm from '@/components/cart/ShippingForm'
import CartConfirmation from '@/components/cart/CartConfirmation'
import EmptyMessage from '@/components/UI/EmptyMessage'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Cart',
  components: {
    CartList,
    EmptyMessage,
    LoaderSpinner,
    ShippingForm,
    CartConfirmation
  },
  data() {
    return {
      stepper: 1,
      isLoading: false,
      errors: null
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    }
  },
  async created() {
    await this.loadCart()
  },
  methods: {
    async loadCart() {
      this.isLoading = true
      try {
        await this.$store.dispatch('cart/loadCart')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    }
  }
}
</script>

