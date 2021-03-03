<template>
  <v-card>
    <v-card-title>Filters</v-card-title>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-for="category in activeCategories"
            :key="category.id"
            :label="`${category.name} = ${category.count}`"
            input-value="true"
            value
            @change="changeCategory(category.id)"
          >
          </v-checkbox>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: ['activeCategories'],
  methods: {
    changeCategory(id) {
      this.$store.dispatch('categories/changeFilterByCategory', id)
    }
  }
}
</script>