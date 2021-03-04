<template>
  <v-card>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="4" md="12" align-self="center">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header> Categories </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" sm="4" md="12">
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
        </v-col>
        <v-col cols="12" sm="4" md="12">
          <v-switch
            @change="changeFilterByDiscount"
            :label="`With discount`"
          ></v-switch
        ></v-col>
        <v-col cols="12" sm="12" md="12">
          <v-range-slider
            v-model="range"
            :max="maxProductsPrice"
            :min="minProductsPrice"
            :thumb-size="24"
            @change="changeFilterByPrice"
            hide-details
            class="align-center"
            thumb-color="primary"
            thumb-label="always"
          ></v-range-slider
        ></v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: ['activeCategories'],
  data() {
    return {
      range: [this.minProductsPrice, this.maxProductsPrice]
    }
  },
  computed: {
    maxProductsPrice() {
      return this.$store.getters['products/maxProductsPrice']
    },
    minProductsPrice() {
      return this.$store.getters['products/minProductsPrice']
    }
  },
  methods: {
    changeFilterByCategory(id) {
      this.$store.dispatch('categories/changeFilterByCategory', id)
    },
    changeFilterByDiscount() {
      this.$store.dispatch('categories/changeFilterByDiscount')
    },
    changeFilterByPrice() {
      this.$store.dispatch('categories/changeFilterByPrice', this.range)
    }
  }
}
</script>