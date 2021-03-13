<template>
  <v-card class="mx-auto" height="400">
    <v-container fill-height>
      <v-card-text>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center"
            ><v-icon large color="amber darken-4" class="text-h2">
              mdi-check-outline
            </v-icon></v-col
          >
          <v-col cols="12" class="text-h6 text-center text-uppercase">
            Thank you for the order! We will contact you soon.
          </v-col></v-row
        >
      </v-card-text>
        <v-row>
          <v-col class="text-center"
            ><v-btn :to="{ name: 'Home' }" color="amber darken-1">
              Continue shopping
            </v-btn></v-col
          >
        </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'CartConfirmation'
}
</script>