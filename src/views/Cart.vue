<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Your Cart </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Shipping </v-stepper-step>

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

        <div class="mt-12">
          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>

          <v-spacer></v-spacer>

          Total: 12000$
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CartList from '@/components/cart/CartList'
import EmptyMessage from '@/components/UI/EmptyMessage'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'Cart',
  components: {
    CartList,
    EmptyMessage,
    LoaderSpinner
  },
  data() {
    return {
      e1: 1,
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

