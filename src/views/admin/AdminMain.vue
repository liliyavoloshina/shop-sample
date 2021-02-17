<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-list>
          <v-subheader>Products</v-subheader>

          <v-list-item v-for="product in products" :key="product.id">
            <v-list-item-avatar class="grey"> </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="product.name"></v-list-item-title>

              <v-list-item-subtitle
                v-text="product.createdAt"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col align="end">
        <v-btn :to="{name: 'AdminAddNewProduct'}" class="my-5 mr-4"> Add New Product </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdminMain',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Sweeter',
          createdAt: '12.12.12'
        }
      ]
    }
  }
}
</script>