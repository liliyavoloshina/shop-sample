<template>
  <v-app>
    <v-main class="orange lighten-5">
      <v-container fill-height>
        <v-row no-gutters>
          <v-col align-self="center">
              <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
