<template>
  <v-card>
    <v-card-title>Filters</v-card-title>
    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="categories"
            :items="categories"
            attach
            chips
            label="Sort by category:"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                :value="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TheSidebar',
  data() {
    return {
      min: -50,
      max: 90,
      range: [-20, 70]
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.products.categories
    })
  }
}
</script>