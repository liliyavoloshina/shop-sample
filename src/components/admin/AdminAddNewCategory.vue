<template>
  <v-expansion-panels class="mb-2">
    <v-expansion-panel>
      <v-expansion-panel-header expand-icon="mdi-plus">
        Add New Category
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <form>
          <v-scale-transition>
            <ErrorAlert v-if="errors" :error="errors" />
          </v-scale-transition>
          <v-text-field
            v-model="newCategory.name"
            :rules="rules.newCategory.name"
            color="purple darken-2"
            label="New Category Name"
            required
          ></v-text-field>
        </form>
        <v-card-actions>
          <v-btn
            :disabled="!formIsValid"
            @click="addNewCategory"
            text
            color="purple darken-2"
            type="submit"
            block
          >
            Add New Category
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'AdminAddNewCategory',
  data() {
    return {
      newCategory: {
        name: ''
      },
      rules: {
        newCategory: [
          (val) => (val || '').length > 0 || 'This field is required'
        ]
      },
      errors: null
    }
  },
  computed: {
    formIsValid() {
      return this.newCategory
    }
  },
  methods: {
    async addNewCategory() {
      try {
        await this.$store.dispatch('filters/addNewCategory', this.newCategory)
      } catch (e) {
        this.errors = e.message
      }
      this.newCategory.name = ''
    }
  }
}
</script>