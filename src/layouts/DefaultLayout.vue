<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3" class="mt-5 mb-5">
            <Sidebar />
          </v-col>
          <v-col cols="12" md="9" class="mt-5 mb-5">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/UI/TheNavbar'
import Footer from '@/components/UI/TheFooter'
import Sidebar from '@/components/UI/TheSidebar'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
    Sidebar
  }
}
</script>
