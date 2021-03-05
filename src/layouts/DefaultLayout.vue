<template>
  <v-app>
    <Navbar :total="total"/>
    <v-main>
      <v-container fluid>
        <v-col cols="12">
          <slot></slot>
        </v-col>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/UI/TheNavbar'
import Footer from '@/components/UI/TheFooter'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  },
  computed: {
    total() {
      return this.$store.getters['cart/total']
    }
  }
}
</script>
