<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <SkeletonLoader v-if="isLoading" :whatElem="'CategoryList'" />
        <Sidebar v-else :active-categories="activeCategories" />
      </v-col>
      <v-col md="9" cols="12">
        <EmptyMessage v-if="!isLoading && !filteredProducts.length > 0"
          >No products...</EmptyMessage
        >
        <SkeletonLoader v-if="isLoading" :whatElem="'ProductItemInhome'" />
        <transition-group name="list" mode="out-in" class="row"
          ><v-col
            v-for="product in filteredProducts"
            :key="product.id"
            lg="4"
            md="6"
            sm="6"
            cols="12"
          >
            <Product :product="product" /> </v-col
        ></transition-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '@/components/product/ProductCard'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import Sidebar from '@/components/UI/TheSidebar'
import EmptyMessage from '@/components/UI/EmptyMessage'
export default {
  name: 'Home',
  components: {
    Product,
    SkeletonLoader,
    Sidebar,
    EmptyMessage
  },
  data() {
    return {
      isLoading: false,
      errors: null,
      filters: {
        category: (category) => this.selectedCategories.includes(category),
        discount: (discount) =>
          discount == this.selectedDiscount ? [] : !this.selectedDiscount,
        price: (price) =>
          price >= this.selectedPrice[0] && price <= this.selectedPrice[1]
      }
    }
  },
  computed: {
    activeCategories() {
      return this.$store.getters['filters/activeCategories']
    },
    selectedCategories() {
      return this.$store.getters['filters/selectedCategories']
    },
    selectedDiscount() {
      return this.$store.getters['filters/selectedDiscount']
    },
    selectedPrice() {
      return this.$store.getters['filters/selectedPrice']
    },
    filteredProducts() {
      const products = this.$store.getters['products/products']
      const filters = this.filters
      const filterKeys = Object.keys(filters)
      return products.filter((item) => {
        // validates all filter criteria
        return filterKeys.every((key) => {
          // ignores non-function predicates
          if (typeof filters[key] !== 'function') return true
          return filters[key](item[key])
        })
      })
    }
  },
  created() {
    this.loadProducts()
    this.loadCategories()
    this.loadCart()
  },
  methods: {
    async loadProducts() {
      this.isLoading = true
      try {
        await this.$store.dispatch('products/loadProducts')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    },
    async loadCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('filters/loadCategories')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    },
    async loadCart() {
      this.isLoading = true
      try {
        await this.$store.dispatch('cart/loadCart')
      } catch (e) {
        this.errors = e
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.list-enter-from {
  opacity: 0;
}

.list-enter-active {
  transition: all 0.5s ease-out;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
}

.list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 0.5s ease;
}
</style>
