<template>
  <v-card elevation="2" class="mx-auto" max-width="374">
    <LoaderLinear v-if="isLoading" />
    <form class="pa-4">
      <v-scale-transition>
        <ErrorAlert v-if="errors" :error="errors" />
      </v-scale-transition>
      <v-card-text>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          type="password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="repeatPassword"
          :error-messages="repeatPasswordErrors"
          label="Repeat Password"
          type="password"
          required
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions class="mt-4">
        <v-row>
          <v-col cols="12" align="center">
            <v-btn @click="submit" :disabled="$v.$invalid" class="text-center">
              Зарегистрироваться
            </v-btn>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn :to="{ name: 'Login' }" plain> Войти </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import LoaderLinear from '@/components/UI/LoaderLinear'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  validations: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },
  components: {
    LoaderLinear
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      checkbox: false,
      isLoading: false,
      errors: null
    }
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail.')
      !this.$v.email.required && errors.push('E-mail is required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.minLength &&
        errors.push(
          `Password must have at least ${this.$v.password.$params.minLength.min} letters.`
        )
      return errors
    },
    repeatPasswordErrors() {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push('Passwords must be identical.')
      return errors
    },
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    }
  },

  methods: {
    async submit() {
      this.isLoading = true
      this.$v.$touch()
      try {
        const sendingData = {
          username: this.name,
          email: this.email,
          password: this.password,
          checkbox: this.checkbox,
          admin: false,
          mode: 'signup'
        }
        await this.$store.dispatch('auth/auth', sendingData)
        this.$router.replace({ name: 'Home' })
      } catch (e) {
        this.errors = e.message
      }
      this.isLoading = false
    }
  },
  clear() {
    this.$v.$reset()
    this.name = ''
    this.email = ''
    this.checkbox = false
    this.error = null
  }
}
</script>
