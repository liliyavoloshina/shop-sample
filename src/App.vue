<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    },
    didAutoLogout() {
      return this.$store.getters['auth/didAutoLogout']
    }
  },
  created() {
    this.$store.dispatch('auth/checkLogin')
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace({ name: 'Login' })
      }
    }
  }
}
</script>

<style>
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>