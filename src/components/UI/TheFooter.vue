<template>
  <v-footer class="mt-15" dark padless>
    <v-card class="grey darken-4 text-center" width="100%">
      <v-card-text>
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          :href="link.link"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        This online store is open-source and any feedback,
        comments and suggestions are welcome.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>liliyavoloshine</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        { icon: 'mdi-github', link: 'https://github.com/liliyavoloshina' }
      ]
    }
  }
}
</script>