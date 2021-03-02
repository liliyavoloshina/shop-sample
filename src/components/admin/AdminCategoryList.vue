<template>
  <div>
    <v-subheader>Categories</v-subheader>
    <Loader v-if="isLoading" />
    <div v-else-if="categories.length > 0">
      <v-list>
        <transition-group name="list">
          <v-list-item v-for="category in categories" :key="category.id">
            <v-list-item-avatar class="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="category.name"></v-list-item-title>

              <v-list-item-subtitle>Products in this category: {{category.count}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn v-if="category.count == 0" @click="removeCategory(category.id)" icon>
                <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </transition-group>
      </v-list>
    </div>
    <div v-else>So empty...</div>
  </div>
</template>

<script>
import Loader from '@/components/UI/LoaderSpinner'
export default {
  name: 'AdminProductList',
  props: {
    categories: {
      type: Array
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Loader
  },
  methods: {
    async removeCategory(id) {
      try {
        await this.$store.dispatch('categories/removeCategory', id)
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