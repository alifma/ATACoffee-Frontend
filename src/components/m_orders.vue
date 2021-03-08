<template>
  <div class="" style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins"></p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container" style="height:75vh">
      <h1 class="font-weight-bold font-poppins">Order History</h1>
      <div v-if="lostOrder" class="row w-100">
        <div class="w-100 text-center p-4 m-4">
          <b-spinner variant="warning" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>
      </div>
      <div v-else>
        <div v-if="orders.length > 0" class="row" style="max-height:65vh;overflow-y:scroll">
          <div class="col-12 mb-3" v-for="(item, index) in orders" :key="index">
            <div class="card" style="border-radius:15px">
              <div class="card-body">
                <div class="float-right">
                <p @click="passDeleteInv(item.inv)" class="mb-0 font-weight-bold font-poppins text-danger">Delete</p>
                <p @click="detailOrders(item.inv)" class="mb-0 font-weight-bold font-poppins text-info">Details</p>
                </div>
                <p class="mb-0 font-weight-bold font-poppins">#{{ item.inv }}</p>
                <p class="font-poppins brown mb-0">
                  Created :
                  {{ new Date(item.created_at).toLocaleDateString() }}
                </p>
                <p class="font-poppins brown mb-0">
                  Updated : {{ item.updated_at === null ? "-" : new Date().toLocaleDateString() }}
                </p>
                <p v-if="item.isPending === 1" class="text-danger font-weight-bold mb-0">
                  Pending
                </p>
                <p v-else class="font-weight-bold mb-0">
                  <span class="text-success">Done</span> (Cashier :
                  {{ item.cashier }})
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="container py-4 d-flex justify-content-center" style="height: 50vh">
            <h1 class="text-secondary text-center my-auto font-rubik">
              Nothing Match!<br />
              Start your order now!
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="height:15vh">
      <div class="row w-100">
        <div class="col-12 mb-3 text-center">
          <b-form-group>
            <b-form-radio-group id="btn-radios-2" @change="setOrderSort()" v-model="orderQuery.page"
              button-variant="outline-warning" :options="optionPage" buttons></b-form-radio-group>
          </b-form-group>
        </div>
        <div class="col-4">
          <b-form-select v-model="orderQuery.pending" @change="getOrderLimitQuery(1)" size="sm" :options="optionFilter">
          </b-form-select>
        </div>
        <div class="col-4">
          <b-form-select v-model="orderQuery.sort" @change="getOrderLimitQuery(1)" size="sm" :options="optionSort">
          </b-form-select>
        </div>
        <div class="col-4">
          <b-form-select v-model="orderQuery.limit" @change="getOrderLimitQuery(1)" size="sm" :options="options">
          </b-form-select>
        </div>
      </div>
    </div>
      <b-modal id="deleteModalM" hide-footer hide-header title="Using Component Methods" centered>
        <div class="p-5">
          <div class="d-block text-center">
            <p class="font-poppins font-weight-light" style="font-size: 20px">
              Are you sure want to delete this order?
            </p>
          </div>
          <div class="w-100">
            <button class="btn btn-primary text-center float-left mr-3 font-weight-bold" style="
              width: 40%;
              margin-right: 5%;
              background: #fff;
              border: 3px solid #6a4029;
              color: #6a4029;
            " @click="$bvModal.hide('deleteModal')">
              Cancel
            </button>
            <button class="btn btn-brown text-center float-right ml-3"
              style="width: 40%; margin-left: 5%; border: 3px solid #6a4029" @click="deleteConfirm()">
              Delete
            </button>
          </div>
        </div>
      </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  data () {
    return {
      invHolder: '',
      lostOrder: true,
      options: [
        { value: 3, text: 'Limit 3' },
        { value: 6, text: 'Limit 6' },
        { value: 9, text: 'Limit 9' },
        { value: 12, text: 'Limit 12', disabled: true }
      ],
      optionSort: [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' }
      ],
      optionFilter: [
        { value: '', text: 'All' },
        { value: 1, text: 'Pending' },
        { value: 0, text: 'Success' }
      ]
    }
  },
  mixins: [mixins],
  computed: {
    ...mapGetters({
      optionPage: 'orders/optionPage',
      orders: 'orders/getAllOrders',
      userID: 'auth/getUserID',
      pagination: 'orders/getAllOrdersPagination'
    })
  },
  methods: {
    ...mapActions({
      getOrders: 'orders/actionGetAllOrders',
      deleteOrders: 'orders/deleteOrders'
    }),
    detailOrders (Invoice) {
      this.$router.push('/orders/' + Invoice)
    },
    getAll () {
      this.lostOrder = true
      this.orderQuery.user = Number(this.userID)
      this.getOrders(this.orderQuery)
        .then((res) => {
          this.lostOrder = false
        })
        .catch((err) => {
          this.lostOrder = false
          console.log(err)
        })
    },
    getOrderLimitQuery (page) {
      this.orderQuery.page = page
      this.getAll()
    },
    passDeleteInv (inv) {
      this.$bvModal.show('deleteModalM')
      this.invHolder = inv
    },
    deleteConfirm () {
      this.swalLoading('Removing Your Data')
      this.deleteOrders(this.invHolder)
        .then((res) => {
          if (res.code === 200) {
            this.$bvModal.hide('deleteModalM')
            this.swalLoadingClose()
            this.getAll()
            this.$swal('Delete Success', 'Your order has been deleted', 'success')
          } else {
            this.$bvModal.hide('deleteModalM')
            this.swalLoadingClose()
            this.getAll()
            this.$swal('Delete Failed', res.msg, 'error')
          }
        })
        .catch((err) => {
          this.$bvModal.hide('deleteModalM')
          this.swalLoadingClose()
          this.getAll()
          this.$swal('Delete failed', err.message, 'success')
        })
    }
  },
  mounted () {
    this.getAll()
  }
}
</script>

<style>

</style>
