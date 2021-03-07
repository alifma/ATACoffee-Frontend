<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('orders')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins">Detail Receipt</p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container" style="height:90vh;overflow-y:scroll">
      <div class="card" style="border-radius:15px">
        <div class="card-body">
          <h3 class="text-center font-weight-bold font-poppins brown">Order Receipt</h3>
          <h5 v-if="detailOrdersHead.cashier != null" class="text-center mb-0 font-poppins" style="color:#362115;">
            Cashier : {{detailOrdersHead.cashier}}</h5>
          <h5 v-else class="text-center text-danger mb-0 font-poppins">Pending</h5>
          <p class="text-center font-poppins">{{new Date(detailOrdersHead.created_at).toLocaleDateString()}}</p>
          <div style="max-height:40vh;overflow-y:scroll">
            <!-- Jika ada itemnya -->
            <div v-for="(item, index) in detailOrdersBody" :key="index" class="row no-gutters" style="height:18vh">
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
            <p class="mb-0 font-poppins" style="text-align:justify">{{detailOrdersHead.orderDetails}}</p>
            <hr class="my-0">
            <p class="mb-0 font-poppins" style="text-align:justify">{{detailOrdersHead.orderPhone}}</p>
          </div>
        </div>
        <p class="font-weight-bold font-poppins mt-3 ml-2">Payment Details</p>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body p-4 my-2">
              <b-form-group>
                <b-form-radio-group v-model="detailOrdersHead.paymentType" disabled :options="paymentOptions" size="lg" plain
                  stacked>
                </b-form-radio-group>
              </b-form-group>
            </div>
        </div>
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
      paymentOptions: ['Card', 'Bank Account', 'Cash on Delivery'],
      paramInv: this.$route.params.inv
    }
  },
  computed: {
    ...mapGetters({
      detailOrdersHead: 'orders/getDetailOrdersHead',
      detailOrdersBody: 'orders/getDetailOrdersBody',
      totalPrice: 'orders/totalPrice',
      tax: 'orders/tax',
      shipping: 'orders/shipping',
      userAccess: 'auth/getAccess'
    })
  },
  methods: {
    ...mapActions({
      actionGetDetail: 'orders/actionGetDetailOrders'
    }),
    gotoOrder () {
      this.$router.push('/orders')
    },
    gotoDashboard () {
      this.$router.push('/dashboard')
    },
    getDetail () {
      this.swalLoading('Preparing Data')
      this.actionGetDetail(this.paramInv)
        .then((res) => {
          this.swalLoadingClose()
        })
        .catch((err) => {
          this.swalLoadingClose()
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
