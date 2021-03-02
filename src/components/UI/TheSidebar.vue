<template>
  <v-card>
    <v-card-title>Filters</v-card-title>
    <v-card-actions>
      <v-row>
        {{selectedCategories}}
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-for="category in selectedCategories"
            v-model="category.selected"
            :key="category.id"
            :label="`${category.name} = ${category.count}`"
            :value="category.id"
            @change="changeCategory"
            color="secondary"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: {
    activeCategories: {
      type: Array
    }
  },
  emits: ['change-category'],
  computed: {
    selectedCategories() {
      let cats = this.activeCategories
      let newCats = []
      for (let key in cats) {
        let cat = {
          name: cats[key].name,
          count: cats[key].count,
          selected: true
        }
        newCats.push(cat)
      }
      return newCats
    }
  },
  methods: {
    changeCategory() {
      this.$emit('change-category', this.selectedCategories)
    }
  }
}
</script>