<template>
  <div>
    <v-row v-if="isHome">
      <v-col
        v-for="(item, index) in 5"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="12"
      >
        <v-sheet color="`grey lighten-4" class="pa-3">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'SkeletonLoader',
  props: {
    isHome: {
      type: Boolean
    }
  }
}
</script>