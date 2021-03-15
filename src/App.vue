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
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace({ name: 'Login' })
      }
    }
  }
}
</script>

<style lang="scss">
body::-webkit-scrollbar {
  display: none;
}

body::-webkit-scrollbar-track {
  display: none;
}
</style>