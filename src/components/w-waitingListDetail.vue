<template>
  <div
    style="background-image: url('https://i.ibb.co/jwqkCjf/bg-Checkout.png');background-size:cover;background-repeat: no-repeat;background-position: center;">
    <cHeader />
    <div class="container" style="min-height:50vh">
      <div class="container py-4">
        <h1 class="text-white font-rubik" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">Finish your customer
          order
          now.</h1>
      </div>
      <div class="container mb-4 pb-4">
        <div class="row">
          <div class="col-12 col-lg-7 col-md-12">
            <div class="card" style="border-radius:25px">
              <div class="card-body p-4">
                <h1 class="text-center font-poppins font-weight-bold mt-4" style="color:#362115;">Order Summary</h1>
                <h5 class="text-center font-poppins mb-4" style="color:#362115;">for {{detailHead.customer}}</h5>
                <div style="max-height:40vh;overflow-y:scroll">
                  <div v-for="(item, index) in detailBody" :key="index" class="row no-gutters" style="height:18vh">
                    <div class="col-md-4 text-center my-auto">
                      <img :src="`${webURL}/image/${item.image}`"
                        style="height:100px;width:100px;object-fit:cover;border-radius:25%" class="card-img">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="mb-0 card-title font-weight-bold">{{item.item}}</h5>
                        <p class="float-right mb-0 font-weight-bold">IDR {{formatPrice(item.price)}}</p>
                        <p class="card-text mb-0">x {{item.amount}} ({{item.size}})</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="mb-0">
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
                    <td class="pb-0" style="text-align:right">IDR
                      {{formatPrice(tax)}}
                    </td>
                  </tr>
                  <tr>
                    <td class="pb-0" style="text-align:left">
                      <p class="mb-0 font-poppins">SHIPPING</p>
                    </td>
                    <td class="pb-0" style="text-align:right">IDR
                      {{formatPrice(shipping)}}
                    </td>
                  </tr>
                  <tr>
                    <td class="pb-0" style="text-align:left">
                      <h3 class="font-poppins font-weight-bold" style="color:#362115;">TOTAL</h3>
                    </td>
                    <td class="pb-0" style="text-align:right;width:min-content">
                      <h3 class="font-poppins font-weight-bold" style="color:#362115;">IDR
                        {{formatPrice(totalPrice+tax+shipping)}}
                      </h3>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5 col-md-12 mt-4 mt-lg-0 mt-md-4">
            <!-- <p class="text-white font-rubik float-right mb-0" style="text-shadow: 2px 2px 4px #000000;">edit</p> -->
            <h3 class="text-white font-rubik" style="text-shadow: 2px 2px 4px #000000;">Address details</h3>
            <div class="card" style="border-radius:25px">
              <div class="card-body p-4 my-2">
                <p class="mb-0 font-weight-bolder font-poppins">{{detailHead.orderType}}</p>
                <hr class="my-0">
                <p class="mb-0 font-poppins" style="text-align:justify">{{detailHead.orderDetails}}</p>
                <hr class="my-0">
                <p class="mb-0 font-poppins" style="text-align:justify">{{detailHead.orderPhone}}</p>
              </div>
            </div>
            <h3 class="text-white font-rubik mt-4" style="text-shadow: 2px 2px 4px #000000;">Payment Method</h3>
            <div class="card" style="border-radius:25px">
              <div class="card-body p-4 my-2">
                <b-form-group>
                  <b-form-radio-group v-model="paymentType" :options="paymentOptions" size="lg" plain stacked disabled>
                  </b-form-radio-group>
                </b-form-group>
              </div>
            </div>
            <button @click="updateDetail()" class="btn btn-brown w-100 mt-4"
              style="font-size:20px;border-radius:25px;height:60px">Mark as done</button>
          </div>
        </div>
      </div>
    </div>
    <cFooter />
  </div>
</template>
<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
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
  components: {
    cHeader,
    cFooter
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
