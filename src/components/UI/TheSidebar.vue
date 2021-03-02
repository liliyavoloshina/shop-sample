<template>
  <v-card>
    <v-card-title>Filters</v-card-title>
    <v-card-actions>
      <v-row>
        {{selectedCategory}}
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-for="category in activeCategories"
            v-model="selectedCategory"
            :key="category.id"
            :label="`${category.name} = ${category.count}`"
            :value="category.id"
            @change="changeCategory"
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
  emits: ['change-category'],
  props: ['activeCategories'],
  data() {
    return {
      selectedCategory: []
    }
  },
  methods: {
    changeCategory(){
      this.$emit('change-category', this.selectedCategory)
    }
  }
}
</script>