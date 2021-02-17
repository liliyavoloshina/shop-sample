<template>
  <v-card elevation="2" class="mx-auto pa-4" max-width="374">
    <form>
      <v-card-text>
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
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="mt-4">
        <v-row>
          <v-col cols="12" align="center">
            <v-btn @click="submit" > Войти </v-btn>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn :to="{ name: 'Register' }" plain> Зарегистрироваться </v-btn>
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
      password: ''
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
    submit() {
      this.$v.$touch(),
      this.$router.push({name: 'Home'})
    },
    clear() {
      this.$v.$reset()
      this.email = ''
      this.password = ''
    }
  }
}
</script>
