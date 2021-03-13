<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header> Categories </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-checkbox
              v-for="category in activeCategories"
              :key="category.id"
              :label="`${category.name} (${category.count})`"
              input-value="true"
              value
              @change="changeFilterByCategory(category.id)"
            >
            </v-checkbox
          ></v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'FilterByCategory',
  props: ['activeCategories'],
  methods: {
    changeFilterByCategory(id) {
      this.$store.dispatch('filters/changeFilterByCategory', id)
    }
  }
}
</script>

<style lang="scss">
  .v-expansion-panel-content__wrap {
    padding: 10px;
  }
</style>