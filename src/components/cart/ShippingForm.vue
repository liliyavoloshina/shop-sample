<template>
  <v-card elevation="2" class="mx-auto">
    <LoaderSpinner v-if="isLoading" />

    <form @submit.prevent="submit">
      <v-container fluid>
        <v-scale-transition>
          <ErrorAlert v-if="errors" :error="errors" />
        </v-scale-transition>
        <v-row dense>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="firstname"
              :error-messages="firstnameErrors"
              label="First Name"
              required
              type="text"
              filled
              dense
              @input="$v.firstname.$touch()"
              @blur="$v.firstname.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="lastname"
              :error-messages="lastnameErrors"
              label="Last Name"
              required
              type="text"
              filled
              dense
              @input="$v.lastname.$touch()"
              @blur="$v.lastname.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              type="email"
              filled
              dense
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              label="Phone Number"
              required
              type="tel"
              filled
              dense
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12"
            ><v-text-field
              v-model="address"
              :error-messages="addressErrors"
              label="Address Line"
              required
              placeholder="Snowy Rock Pl"
              prepend-inner-icon="mdi-map-marker"
              filled
              dense
              @input="$v.address.$touch()"
              @blur="$v.address.$touch()"
            ></v-text-field
          ></v-col>
          <v-col cols="12"
            ><v-text-field
              v-model="city"
              :error-messages="cityErrors"
              label="City"
              placeholder="El Paso"
              required
              filled
              dense
              @input="$v.city.$touch()"
              @blur="$v.city.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="state"
              :error-messages="stateErrors"
              label="State/Province/Region"
              placeholder="TX"
              required
              filled
              dense
              @input="$v.state.$touch()"
              @blur="$v.state.$touch()"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="zip"
              :error-messages="zipErrors"
              label="ZIP / Postal Code"
              required
              placeholder="79938"
              filled
              dense
              @input="$v.zip.$touch()"
              @blur="$v.zip.$touch()"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              label="Message"
              clearable
              clear-icon="mdi-close-circle"
              prepend-inner-icon="mdi-comment"
              filled
              dense
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="mt-12">
          <v-col><v-btn @click="prevStep"> Cancel </v-btn></v-col>
          <v-spacer></v-spacer>
          <v-col class="text-end"
            ><v-btn @click="submit" :disabled="$v.$invalid" color="primary">
              Send
            </v-btn></v-col
          >
        </v-row>
      </v-container>
    </form>
  </v-card>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  name: 'ShippingForm',
  validations: {
    firstname: { required },
    lastname: { required },
    email: { email, required },
    phone: { numeric, required },
    address: { required },
    city: { required },
    state: { required },
    zip: { required }
  },
  components: { LoaderSpinner },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      message: '',
      isLoading: false,
      errors: null
    }
  },
  computed: {
    products() {
      return this.$store.getters['cart/productInCartById']
    },
    firstnameErrors() {
      const errors = []
      if (!this.$v.firstname.$dirty) return errors
      !this.$v.firstname.required && errors.push('Firstname is required')
      return errors
    },
    lastnameErrors() {
      const errors = []
      if (!this.$v.lastname.$dirty) return errors
      !this.$v.lastname.required && errors.push('Lastname is required')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('E-mail is required')
      !this.$v.email.email && errors.push('E-mail must be valid')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Phone number is required')
      !this.$v.phone.numeric && errors.push('Phone number must be valid')
      return errors
    },
    addressErrors() {
      const errors = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.required && errors.push('Address is required')
      return errors
    },
    cityErrors() {
      const errors = []
      if (!this.$v.city.$dirty) return errors
      !this.$v.city.required && errors.push('City is required')
      return errors
    },
    stateErrors() {
      const errors = []
      if (!this.$v.state.$dirty) return errors
      !this.$v.state.required && errors.push('State is required')
      return errors
    },
    zipErrors() {
      const errors = []
      if (!this.$v.zip.$dirty) return errors
      !this.$v.zip.required && errors.push('Zip is required')
      return errors
    }
  },

  methods: {
    async submit() {
      this.isLoading = true
      this.$v.$touch()
      try {
        const sendingData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          message: this.message,
          createdAt: new Date().toLocaleString(),
          products: this.products
        }
        await this.$store.dispatch('orders/addNewOrder', sendingData)
        await this.$store.dispatch('cart/clearCart')
      } catch (e) {
        this.errors = e.message
      }
      this.isLoading = false
      this.$emit('next-step')
    },
    prevStep() {
      this.$emit('prev-step')
    }
  }
}
</script>