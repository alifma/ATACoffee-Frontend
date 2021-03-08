<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('waitinglist')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins">Pending Order Details</p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container" style="height:75vh;overflow-y:scroll">
      <h5 class="text-center font-poppins"> Finish your customer order now.</h5>
      <div class="card" style="border-radius:15px">
        <div class="card-body">
          <h3 class="text-center font-weight-bold font-poppins brown">Order Receipt</h3>
          <h5 v-if="detailHead.cashier != null" class="text-center mb-0 font-poppins" style="color:#362115;">
            Cashier : {{detailHead.cashier}}</h5>
          <h5 v-else class="text-center text-danger mb-0 font-poppins">Pending</h5>
          <p class="text-center font-poppins">{{new Date(detailHead.created_at).toLocaleDateString()}}</p>
          <div style="max-height:40vh;overflow-y:scroll">
            <!-- Jika ada itemnya -->
            <div v-for="(item, index) in detailBody" :key="index" class="row no-gutters" style="height:18vh">
              <div class="col-4 text-center my-auto">
                <img :src="`${webURL}/image/${item.image}`"
                  style="height:100px;width:100px;object-fit:cover;border-radius:25%" class="card-img">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="mb-0 card-title font-weight-bold">{{item.item}}</h5>
                  <p class="float-right mb-0 font-weight-bold">IDR {{formatPrice(item.price)}}</p>
                  <p class="card-text mb-0">x {{item.amount}} ({{item.size}})</p>
                </div>
              </div>
            </div>
          </div>
          <table class="table table-borderless">
            <tr>
              <td class="pb-0" style="text-align:left">
                <p class="mb-0 font-poppins">SUBTOTAL</p>
              </td>
              <td class="pb-0" style="text-align:right">IDR {{formatPrice(totalPrice)}}</td>
            </tr>
            <tr>
              <td class="pb-0" style="text-align:left">
                <p class="mb-0 font-poppins">TAX & FEES</p>
              </td>
              <td class="pb-0" style="text-align:right">IDR {{formatPrice(tax)}}</td>
            </tr>
            <tr>
              <td class="pb-0" style="text-align:left">
                <p class="mb-0 font-poppins">SHIPPING</p>
              </td>
              <td class="pb-0" style="text-align:right">IDR {{formatPrice(shipping)}}</td>
            </tr>
            <tr>
              <td class="pb-0" style="text-align:left">
                <h5 class="font-poppins font-weight-bold" style="color:#362115;">TOTAL</h5>
              </td>
              <td class="pb-0" style="text-align:right;width:min-content">
                <h5 class="font-poppins font-weight-bold" style="color:#362115;">IDR
                  {{formatPrice(totalPrice+tax+shipping)}}</h5>
              </td>
            </tr>
          </table>
        </div>
      </div>
        <p class="font-weight-bold font-poppins mt-3 ml-2">Delivery Details</p>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body p-4 my-2">
            <p class="mb-0 font-poppins" style="text-align:justify">{{detailHead.orderDetails}}</p>
            <hr class="my-0">
            <p class="mb-0 font-poppins" style="text-align:justify">{{detailHead.orderPhone}}</p>
          </div>
        </div>
        <p class="font-weight-bold font-poppins mt-3 ml-2">Payment Details</p>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body p-4 my-2">
              <b-form-group>
                <b-form-radio-group v-model="detailHead.paymentType" disabled :options="paymentOptions" size="lg" plain
                  stacked>
                </b-form-radio-group>
              </b-form-group>
            </div>
        </div>
    </div>
    <div class="container" style="height:15vh;overflow-y:scroll">
      <button @click="updateDetail()" class="btn btn-brown w-100 mt-4"
              style="font-size:20px;border-radius:25px;height:60px">Mark as done</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      inv: this.$route.params.inv,
      paymentType: '',
      paymentOptions: ['Card', 'Bank Account', 'Cash on Delivery']
    }
  },
  computed: {
    ...mapGetters({
      detailHead: 'orders/getDetailOrdersHead',
      detailBody: 'orders/getDetailOrdersBody',
      tax: 'orders/tax',
      totalPrice: 'orders/totalPrice',
      shipping: 'orders/shipping',
      cashier: 'auth/getUserName'
    })
  },
  methods: {
    ...mapActions({
      getDetailAction: 'orders/actionGetDetailOrders',
      updateDetailAction: 'orders/updateOrders'
    }),
    getDetail () {
      this.swalLoading('Preparing Data')
      this.getDetailAction(this.inv)
        .then((response) => {
          this.swalLoadingClose()
          this.paymentType = response.data.head[0].paymentType
        })
        .catch((err) => {
          this.swalLoadingClose()
          console.log(err)
        })
    },
    updateDetail () {
      this.swalLoading('Confirming Payment')
      const fixData = {
        inv: this.inv,
        info: {
          cashierName: this.cashier,
          isPending: 0
        }
      }
      this.updateDetailAction(fixData)
        .then((res) => {
          if (res.code === 200) {
            this.swalLoadingClose()
            this.swalAlert('Success', 'Payment Confirmed', 'success')
            this.$router.push('/waitinglist')
          }
        })
        .catch((err) => {
          this.swalLoadingClose()
          this.swalAlert('Confirm Payment Failed', 'err.message', 'Error')
          console.log(err)
        })
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style>
</style>
