<template>
  <v-card outlined tile class="pa-3">
    <v-card-title>Add New Category</v-card-title>
    <v-card-text>
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
    </v-card-text>
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
      <!-- <v-btn @click="submit" block :disabled="$v.product.$invalid">Add</v-btn> -->
    </v-card-actions>
  </v-card>
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