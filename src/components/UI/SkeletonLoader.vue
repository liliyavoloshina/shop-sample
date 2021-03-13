<template>
  <div>
    <v-row v-if="whatElem == 'ProductItem'">
      <v-col
        v-for="(item, index) in 5"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="12"
      >
        <v-sheet color="`grey lighten-4" class="pa-3">
          <v-skeleton-loader
            class="mx-auto"
            v-bind="attrs"
            type="card-heading, image, actions"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
    <v-sheet v-if="whatElem == 'CategoryList'" color="grey lighten-4" class="pa-3">
      <v-skeleton-loader class="mx-auto" type="article"></v-skeleton-loader>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: 'SkeletonLoader',
  props: {
    whatElem: {
      type: String
    }
  },
  data() {
    return {
      attrs: {
        boilerplate: true
      }
    }
  }
}
</script>