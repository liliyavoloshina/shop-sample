<template>
  <v-card>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="4" md="12" align-self="center">
          <FilterByCategory :active-categories="activeCategories" />
        </v-col>
        <v-col cols="12" sm="4" md="12">
          <FilterByDiscount />
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <FilterByPrice />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import FilterByCategory from '@/components/filters/FilterByCategory'
import FilterByDiscount from '@/components/filters/FilterByDiscount'
import FilterByPrice from '@/components/filters/FilterByPrice.vue'
export default {
  name: 'TheSidebar',
  props: ['activeCategories'],
  components: { FilterByCategory, FilterByDiscount, FilterByPrice }
}
</script>