<template>
  <div style="background-image: url('https://i.ibb.co/jwqkCjf/bg-Checkout.png');background-repeat: no-repeat;background-position: center;">
    <cHeader />
      <div class="container py-4">
        <h1 class="text-white text-center font-rubik pt-4" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">Pending Order List</h1>
      </div>
      <div class="container mb-4">
        <div class="row">
          <div v-for="(item, index) in pendingOrders" :key="index"  class="col-lg-4 col-md-6 mb-4">
            <div class="card" style="border-radius:25px">
              <div class="card-body">
                <p class="mb-0 float-right text-danger font-weight-bold">Pending</p>
                <h5 class="font-weight-bold font-poppins">#{{item.inv}}</h5>
                <p class="mb-0" style="text-align:right">Customer : {{item.customer}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card row" style="border-radius:25px">
          <div class="card-body col w-100 d-flex">
            <h5 class="font-weight-bold">Page</h5>
            <p class="mb-0 d-inline" v-for="(item, index) in pendingPagination.totalPages" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
    <cFooter />
  </div>
</template>

<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  components: {
    cHeader,
    cFooter
  },
  methods: {
    ...mapActions({
      actionGetPending: 'orders/actionGetPendingOrders'
    })
  },
  computed: {
    ...mapGetters({
      pendingOrders: 'orders/getPendingOrders',
      pendingPagination: 'orders/getPendingPagination'
    })
  },
  mounted () {
    this.actionGetPending(this.pendingQuery)
    console.log(this.pendingOrders)
  }

}
</script>

<style>

</style>
