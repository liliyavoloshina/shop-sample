<template>
  <v-card class="mt-5">
    <v-card-title>Add New Product</v-card-title>
    <v-card-text>
      <form>
        <v-text-field
          v-model="product.name"
          :error-messages="nameErrors"
          label="Name"
          required
          @input="$v.product.name.$touch()"
          @blur="$v.product.name.$touch()"
        ></v-text-field>
        <v-file-input label="Image"></v-file-input>
        <v-textarea
          v-model="product.description"
          :error-messages="descriptionErrors"
          label="Description"
          required
          @input="$v.product.description.$touch()"
          @blur="$v.product.description.$touch()"
        ></v-textarea>
        <v-select
          v-model="product.category"
          :items="categories"
          :error-messages="categoryErrors"
          label="Category"
          required
          class="mb-2"
          @change="$v.product.category.$touch()"
          @blur="$v.product.category.$touch()"
        ></v-select>
        <v-row align="center">
          <v-col>
            <v-text-field
              v-model="product.price"
              :error-messages="priceErrors"
              label="Price"
              required
              solo
              type="number"
              @input="$v.product.price.$touch()"
              @blur="$v.product.price.$touch()"
            >
            </v-text-field
          ></v-col>
          <v-col
            ><v-checkbox
              v-model="product.discount"
              label="Discount"
            ></v-checkbox
          ></v-col>
        </v-row>
      </form>
    </v-card-text>
    <v-card-actions>
      <v-btn class="mr-4" @click="submit">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import axios from 'axios'
import { helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яА-я]*$/)
import { required, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'AdminAddNewProduct',
  validations: {
    product: {
      name: { required, alpha },
      description: { required, minLength: minLength(10) },
      category: { required },
      price: { required, numeric },
      discount: {
        checked(val) {
          return val
        }
      }
    }
  },
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        discount: false
      },
      categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      loading: false,
      errors: null
    }
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.product.name.$dirty) return errors
      !this.$v.product.name.required && errors.push('Name is required.')
      return errors
    },
    descriptionErrors() {
      const errors = []
      if (!this.$v.product.description.$dirty) return errors
      !this.$v.product.description.minLength &&
        errors.push('Description must be at most 10 characters long')
      !this.$v.product.description.required &&
        errors.push('Description is required.')
      return errors
    },
    categoryErrors() {
      const errors = []
      if (!this.$v.product.category.$dirty) return errors
      !this.$v.product.category.required && errors.push('Category is required.')
      return errors
    },
    priceErrors() {
      const errors = []
      if (!this.$v.product.price.$dirty) return errors
      !this.$v.product.price.required && errors.push('Price is required.')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
      // const sendingData = JSON.stringify({
      //   product: this.product
      // })
      const sendingData = JSON.stringify({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image,
        category: this.product.category,
        discount: this.product.discount
      })
      //  axios.post('https://simple-shop-7a276-default-rtdb.firebaseio.com/products.json', sendingData);
      console.log(sendingData)
      this.loading = true
      this.$store
        .dispatch('addNewProduct', sendingData)
        .then(() => {
          this.loading = false
        })
        .catch((e) => {
          this.errors = e
          console.log(e)
        })
    }
  }
}
</script>