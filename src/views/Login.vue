<template>
  <v-card elevation="2" class="mx-auto pa-4" max-width="374">
    <form>
      <v-card-text>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          type="email"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          type="password"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="mt-4">
        <v-row>
          {{ error }}
          <v-col cols="12" align="center">
            <v-btn @click="submit"> Войти </v-btn>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn :to="{ name: 'Signup' }" plain> Зарегистрироваться </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  validations: {
    email: { required, email },
    password: { required }
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.email.required && errors.push('Password is required')
      return errors
    }
  },

  methods: {
    async submit() {
      // this.$v.$touch(),
      try {
        const sendingData = {
          email: this.email,
          password: this.password,
          mode: 'login'
        }
        await this.$store.dispatch('auth/auth', sendingData)
        this.$router.replace({ name: 'Home' })
      } catch (e) {
        this.error = e.message
      }
    },
    clear() {
      this.$v.$reset()
      this.email = ''
      this.password = ''
    }
  }
}
</script>
