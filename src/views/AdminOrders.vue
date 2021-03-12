<template>
  <v-container fluid>
    <LoaderSpinner v-if="isLoading" />
    <EmptyMessage v-else-if="!orders.length">No orders yet... </EmptyMessage>
    <v-row>
      <v-col v-for="order in orders" :key="order.id" cols="12" class="mb-5">
        <v-card class="elevation-5">
          <v-card-text>
            <v-row class="mb-5">
              <v-col>
                <h3>Customer information</h3>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      > <span class="font-weight-bold">Firstname:</span> {{ order.firstname }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">Lastname:</span> {{ order.lastname }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">Phone Number:</span> {{ order.phone }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">E-mail: </span> 
                      <a :href="`mailto:${order.email}`"> {{ order.email }}</a>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col>
                <h3>Customer address</h3>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">Address:</span> {{ order.address }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">City:</span> {{ order.city }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">State:</span> {{ order.state }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-content>
                    <v-list-item-title
                      ><span class="font-weight-bold">Zip:</span> {{ order.state }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item></v-col
              >
            </v-row>
            <v-row>
              <v-col><span class="font-weight-bold">Created At:</span> {{ order.createdAt }} </v-col>
            </v-row>
            <v-row v-if="order.message">
              <v-col><span class="font-weight-bold"> Mesasge:</span> {{ order.message }} </v-col>
            </v-row>
          </v-card-text>

          <v-btn
            @click="removeOrder(order.id)"
            class="ma-4"
            color="red"
            outlined
            rounded
            small
          >
            DELETE ORDER
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmptyMessage from '@/components/UI/EmptyMessage'
import LoaderSpinner from '@/components/UI/LoaderSpinner'
export default {
  components: { EmptyMessage, LoaderSpinner },
  name: 'AdminOrders',
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  computed: {
    orders() {
      return this.$store.getters['orders/orders']
    }
  },
  created() {
    this.loadOrders()
  },
  methods: {
    async loadOrders() {
      this.isLoading = true
      try {
        await this.$store.dispatch('orders/loadOrders')
      } catch (e) {
        this.errors = e.message
      }
      this.isLoading = false
    },
    removeOrder(id) {
      this.$store.dispatch('orders/removeOrder', id)
    }
  }
}
</script>