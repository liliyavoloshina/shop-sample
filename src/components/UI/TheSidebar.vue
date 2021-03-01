<template>
  <v-card>
    <v-card-title>Filters</v-card-title>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="4" md="4">
          <!-- <v-checkbox
            v-model="filters."
            label="red"
            color="secondary"
            value="red"
            hide-details
          ></v-checkbox> -->
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      filters: {

      }
    }
  }
}
</script>