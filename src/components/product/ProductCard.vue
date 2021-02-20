<template>
  <v-col cols="12" lg="3" md="4" sm="6">
    <v-card>
      <router-link :to="{ name: 'Product', params: { id: product.id } }" v-slot="{ navigate }" custom>
        <div @click="navigate">
          <v-card-title>{{ product.name }}</v-card-title>
          <v-img v-if="product.image" height="250" :src="product.image"></v-img>
          <v-img
            v-else
            height="250"
            src="product.image"
            class="deep-purple lighten-5"
          ></v-img>
          <v-card-text>{{ product.description }}</v-card-text>
        </div>
      </router-link>
      <v-card-actions class="pa-4">
        <span class="font-weight-bold">{{ product.price }}</span>
        <v-spacer></v-spacer>
        <v-btn>Add to cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      required: true,
      type: Object
    }
  }
}
</script>