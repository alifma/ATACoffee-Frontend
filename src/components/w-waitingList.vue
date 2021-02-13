<template>
  <div
    style="background-image: url('https://i.ibb.co/jwqkCjf/bg-Checkout.png');background-repeat: no-repeat;background-position: center;">
    <cHeader />
    <div v-if="pendingOrders.length > 0">
      <div class="container py-4">
        <h1 class="text-white text-center font-rubik pt-4" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">
          Pending Order List</h1>
      </div>
      <div class="container mb-4">
        <div class="row">
          <div v-for="(item, index) in pendingOrders" :key="index" class="col-lg-4 col-md-6 mb-4">
            <div class="card" @click="viewDetails(item.inv)" style="border-radius:25px">
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
            <div class="row w-100">
              <div class="col-3 d-flex justify-content-left">
                <p class="mb-0 my-auto">Page : {{pendingQuery.page}} </p>
              </div>
              <div class="col-5 d-flex justify-content-center">
                <p class="mb-0 my-auto">Select : </p>
                <p v-for="(index, page) in pagination.totalPages" :key="index" class="mb-0 btn btn-warning mx-2"
                  @click="getPendingPageQuery(page+1)">{{page+1}}</p>
              </div>
              <div class="col-2">
                <b-form-select v-model="pendingQuery.sort" @change="getPendingLimitQuery('')" size="sm" :options="optionSort">
                </b-form-select>
              </div>
              <div class="col-2">
                <b-form-select v-model="pendingQuery.limit" @change="getPendingLimitQuery('')" size="sm"
                  :options="options"></b-form-select>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container py-4 d-flex justify-content-center" style="height:50vh">
        <h1 class="text-white text-center my-auto font-rubik" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">
          Everythings Clear!<br/>
          There Are No Pending Orders</h1>
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
  data () {
    return {
      options: [
        { value: 3, text: 'Limit 3' },
        { value: 6, text: 'Limit 6' },
        { value: 9, text: 'Limit 9' },
        { value: 12, text: 'Limit 12', disabled: true }
      ],
      optionSort: [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' }
      ]
    }
  },
  components: {
    cHeader,
    cFooter
  },
  methods: {
    ...mapActions({
      actionGetPending: 'orders/actionGetPendingOrders'
    }),
    viewDetails (inv) {
      this.$router.push(`/waitinglist/${inv}`)
    },
    getPending () {
      this.actionGetPending(this.pendingQuery)
    },
    getPendingPageQuery (page) {
      this.pendingQuery.page = page
      // this.getPending()
      this.actionGetPending(this.pendingQuery)
    },
    getPendingLimitQuery () {
      this.pendingQuery.page = 1
      this.getPending()
    }
  },
  computed: {
    ...mapGetters({
      pendingOrders: 'orders/getPendingOrders',
      pagination: 'orders/getPendingPagination'
    })
  },
  mounted () {
    this.getPending()
  }
}
</script>

<style>
</style>
