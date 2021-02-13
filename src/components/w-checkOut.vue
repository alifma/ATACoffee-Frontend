<template>
  <div>
    <cHeader />
    <div class="pb-4"
      style="background-image: url('https://i.ibb.co/jwqkCjf/bg-Checkout.png');background-repeat: no-repeat;background-position: center;">
      <div v-if="cart[0].itemName !== ''">
        <div class="container py-4">
          <h1 class="text-white font-rubik" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">Checkout your item
            now!</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="card" style="border-radius:25px">
                <div class="card-body p-4 mt-4">
                  <h1 class="text-center font-poppins font-weight-bold mt-4" style="color:#362115;">Order Summary</h1>
                  <div style="max-height:40vh;overflow-y:scroll">
                    <!-- Jika ada itemnya -->
                    <div v-for="(item, index) in cart" :key="index" class="row no-gutters" style="height:18vh">
                      <div class="col-md-4 text-center my-auto">
                        <img :src="`http://52.91.116.102:3001/image/${item.itemImage}`"
                          style="height:100px;width:100px;object-fit:cover;border-radius:25%" class="card-img">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <p class="float-right mb-0 text-danger font-weight-bold">Remove</p>
                          <h5 class="mb-0 card-title font-weight-bold">{{item.itemName}}</h5>
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
                        <h3 class="font-poppins font-weight-bold" style="color:#362115;">TOTAL</h3>
                      </td>
                      <td class="pb-0" style="text-align:right;width:min-content">
                        <h3 class="font-poppins font-weight-bold" style="color:#362115;">IDR
                          {{formatPrice(totalPrice+tax+shipping)}}</h3>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
            <div class="col-5">
              <p class="text-white font-rubik float-right mb-0" style="text-shadow: 2px 2px 4px #000000;">edit</p>
              <h3 class="text-white font-rubik" style="text-shadow: 2px 2px 4px #000000;">Address details</h3>
              <div class="card" style="border-radius:25px">
                <div class="card-body p-4 my-2">
                  <p class="mb-0 font-weight-bolder font-poppins">{{cart[0].orderType}}</p>
                  <hr class="my-0">
                  <p class="mb-0 font-poppins" style="text-align:justify">{{cart[0].orderDetails}}</p>
                  <hr class="my-0">
                  <p class="mb-0 font-poppins" style="text-align:justify">{{cart[0].orderPhone}}</p>
                </div>
              </div>
              <h3 class="text-white font-rubik mt-4" style="text-shadow: 2px 2px 4px #000000;">Payment Method</h3>
              <div class="card" style="border-radius:25px">
                <div class="card-body p-4 my-2">
                  <b-form-group>
                    <b-form-radio-group v-model="headOrder.paymentType" :options="headOrder.paymentOptions" size="lg"
                      plain stacked>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
              </div>
              <button @click="buildFinalData()" class="btn btn-brown w-100 mt-4"
                style="font-size:20px;border-radius:25px;height:60px">Confirm and Pay</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="container py-4 d-flex justify-content-center" style="height:50vh">
          <h1 class="text-white text-center my-auto font-rubik"
            style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">You have no item on your cart</h1>
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
  data () {
    return {
      headOrder: {
        inv: 0,
        paymentType: '',
        paymentOptions: ['Card', 'Bank Account', 'Cash on Delivery']
      }
    }
  },
  components: {
    cHeader,
    cFooter
  },
  computed: {
    ...mapGetters({
      cart: 'carts/cart',
      totalPrice: 'carts/totalPrice',
      tax: 'carts/tax',
      shipping: 'carts/shipping'
    })
  },
  methods: {
    ...mapActions({
      actionOrderPost: 'orders/createOrders',
      actionEmptYCart: 'carts/emptyCart'
    }),
    generateInv () {
      const invBase = Math.floor((Math.random() * 1000) + 1)
      let prefix = invBase + ''
      while (prefix.length < 4) { prefix = '0' + prefix }
      let invDate = new Date().getDate()
      let invMonth = new Date().getMonth() + 1
      if (invMonth < 10) { invMonth = '0' + invMonth }
      if (invDate < 10) { invDate = '0' + invDate }
      const invYear = new Date().getFullYear().toString().slice(2, 4)
      const finalDate = `${invYear}${invMonth}${invDate}${prefix}`
      this.headOrder.inv = finalDate
    },
    buildFinalData () {
      if (this.headOrder.paymentType !== '') {
        this.generateInv()
        const finalData = this.cart.map((i) => ({
          ...i,
          paymentType: this.headOrder.paymentType,
          inv: this.headOrder.inv
        }))
        console.log(finalData)
        this.actionOrderPost(finalData)
          .then((response) => {
            if (response.code === 200) {
              this.actionEmptYCart()
              this.swalAlert('Checkout Success', '', 'success')
            } else {
              console.log(response)
              this.swalAlert('Checkout Error', response.msg, 'error')
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.swalAlert('Checkout Error', 'Please select your payment method', 'error')
      }
    }
  }
}
</script>

<style>

</style>
