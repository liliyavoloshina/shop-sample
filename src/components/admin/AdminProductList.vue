<template>
  <div>
    <v-scale-transition>
      <ErrorAlert v-if="errors" :error="errors" />
    </v-scale-transition>
    <Loader v-if="isLoading" />
    <div v-else-if="products.length > 0">
      <v-list>
        <transition-group name="list">
          <v-list-item v-for="product in products" :key="product.id">
            <v-list-item-avatar class="grey"
              ><img :src="product.image"
            /></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="product.name"></v-list-item-title>

              <v-list-item-subtitle
                v-text="product.createdAt"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="removeProduct(product)">
                <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </transition-group>
      </v-list>
    </div>
    <EmptyMessage v-if="!isLoading && products.length < 1">No products...</EmptyMessage>
  </div>
</template>

<script>
import Loader from '@/components/UI/LoaderSpinner'
import EmptyMessage from '@/components/UI/EmptyMessage'
export default {
  name: 'AdminProductList',
  props: {
    products: {
      type: Array
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    errors: {
      type: String
    }
  },
  components: {
    Loader,
    EmptyMessage
  },
  methods: {
    async removeProduct(product) {
      try {
        await this.$store.dispatch('products/removeProduct', product.id)
        await this.$store.dispatch(
          'filters/decreaseCategoryCount',
          product.category
        )
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-enter-active {
  transition: all 0.2s ease-out;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 0.2s ease-in;
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.2s ease;
}
</style>