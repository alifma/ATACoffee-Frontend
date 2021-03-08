<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins">Waiting List</p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container" style="height:75vh;overflow-y:scroll">
      <div v-if="loadList" class="row w-100" style="height:75vh">
        <div class="w-100 text-center p-4 m-4">
          <b-spinner variant="warning" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>
      </div>
      <div v-else class="row">
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
    </div>
    <div class="container" style="height:15vh;overflow-y:scroll">
      <div class="row">
        <div class="col-12 my-3 text-center">
          <p v-for="(index, page) in pagination.totalPages" :key="index" class="mb-0 btn btn-warning mx-2"
            @click="getPendingPageQuery(page+1)">{{page+1}}</p>
        </div>
        <div class="col-6">
          <b-form-select v-model="pendingQuery.sort" @change="getPendingLimitQuery('')" size="sm" :options="optionSort">
          </b-form-select>
        </div>
        <div class="col-6">
          <b-form-select v-model="pendingQuery.limit" @change="getPendingLimitQuery('')" size="sm" :options="options">
          </b-form-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      loadList: true,
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
  methods: {
    ...mapActions({
      actionGetPending: 'orders/actionGetPendingOrders'
    }),
    viewDetails (inv) {
      this.$router.push(`/waitinglist/${inv}`)
    },
    getPending () {
      this.loadList = true
      this.actionGetPending(this.pendingQuery)
        .then((res) => {
          this.loadList = false
        })
        .catch((err) => {
          this.loadList = false
          console.log(err)
        })
    },
    getPendingPageQuery (page) {
      this.pendingQuery.page = page
      // this.getPending()
      this.getPending()
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
