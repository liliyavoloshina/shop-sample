<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1"> Your Cart </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2"> Shipping </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Confirmation </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <LoaderSpinner v-if="isLoading" />
        <CartList v-else-if="cart.length > 0" :cart="cart" />
        <EmptyMessage v-else>
          <v-row align="center">
            <v-col>It is still empty here.</v-col>

            <v-spacer></v-spacer>
            <v-col
              ><v-btn :to="{ name: 'Home' }" link
                >Start shopping now!
              </v-btn></v-col
            >
          </v-row>
        </EmptyMessage>

        <v-row class="mt-12">
          <v-col
            ><div class="text-h6">
              Total: <span class="font-weight-black">{{ totalPrice }} $</span>
            </div></v-col
          >
          <v-spacer></v-spacer>
          <v-col class="text-end"
            ><v-btn color="primary" @click="step = 2"> Continue </v-btn></v-col
          ></v-row
        >
      </v-stepper-content>

      <v-stepper-content step="2">
        <ShippingForm @submitted="step = 3"/>

        <v-row class="mt-12">
          <v-col><v-btn text @click.native="step = 1"> Cancel </v-btn></v-col>
          <v-spacer></v-spacer></v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <v-row>
          <v-col class="text-center">
            <v-btn color="primary" @click="step = 1"> Finish </v-btn></v-col
          >
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CartList from '@/components/cart/CartList'
import ShippingForm from '@/components/cart/ShippingForm'
import EmptyMessage from '@/components/UI/EmptyMessage'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Cart',
  components: {
    CartList,
    EmptyMessage,
    LoaderSpinner,
    ShippingForm
  },
  data() {
    return {
      step: 1,
      isLoading: false,
      errors: null
    }
  },
  computed: {
    // cartStep() {
    //   return this.$store.getters['cart/cart']
    // },
    cart() {
      return this.$store.getters['cart/cart']
    },
    totalPrice() {
      return this.$store.getters['cart/totalPrice']
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

