<template>
  <div style="height:100vh;background:#F2F2F2">
    <div>
      <!-- Cart Item -->
      <div v-if="showCart">
        <!-- Header -->
        <div class="row mx-0 my-0 p-4" style="height:10vh">
          <div class="col-2">
            <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
          </div>
          <div class="col-8 text-center">
            <p class="font-weight-bold font-poppins">Cart</p>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row mx-0 my-0" v-if="cart[0].itemName !== ''" style="height:90vh">
          <div class="col-12" style="height:75vh">
            <div class="container px-3" style="max-height:75vh;overflow-y:scroll">
              <!-- Jika ada itemnya -->
              <div v-for="(item, index) in cart" :key="index">
                <div class="card mb-3" style="border-radius:25px">
                  <div class="card-body">
                    <div class="row no-gutters">
                      <div class="col-md-4 col-4 col-lg-4 text-center my-auto">
                        <img :src="`${webURL}/image/${item.itemImage}`"
                          style="height:100px;width:100px;object-fit:cover;border-radius:25%" class="card-img">
                      </div>
                      <div class="col-md-8 col-8 col-lg-8">
                        <div class="card-body">
                          <p class="float-right mb-0 text-danger font-weight-bold">Remove</p>
                          <h5 class="mb-0 card-title font-weight-bold">{{item.itemName}}</h5>
                          <p class="float-right mb-0 font-weight-bold">IDR {{formatPrice(item.price)}}</p>
                          <p class="card-text mb-0">x {{item.amount}} ({{item.size}})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 py-3" style="height:15vh">
            <button @click="toggleShow('delivery')" style="font-size:20px;border-radius:25px;"
              class="w-100 h-100 btn btn-brown shadow-lg ">Confirm and Checkout</button>
          </div>
        </div>
        <div class="row" v-else>
          <div class="container py-4 px-5 d-flex justify-content-center" style="height:50vh">
            <h1 class="text-secondary text-center my-auto font-rubik" style="font-size: 40px;">You have no item on your
              cart</h1>
          </div>
        </div>
      </div>
      <div v-if="showDelivery">
        <div class="row mx-0 my-0 p-4" style="height:10vh">
          <div class="col-2">
            <p class="mb-0 brown" @click="toggleShow('cart')"><i class="fas fa-angle-left"></i></p>
          </div>
          <div class="col-8 text-center">
            <p class="font-weight-bold font-poppins">Checkout</p>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row mx-0 my-0" style="height:90vh">
          <div class="col-12" style="height:75vh">
            <div class="container">
              <h1 class="font-weight-bold font-poppins mb-4">Delivery</h1>
              <p class="float-right brown font-poppins">change</p>
              <p class="font-weight-bold font-poppins">Address Details</p>
              <div class="card mb-3" style="border-radius:25px">
                <div class="card-body p-4 my-2">
                  <p class="mb-0 font-poppins" style="text-align:justify">{{cart[0].orderDetails}}</p>
                  <hr class="my-0">
                  <p class="mb-0 font-poppins" style="text-align:justify">{{cart[0].orderPhone}}</p>
                </div>
              </div>
              <p class="font-weight-bold font-poppins">Delivery Methods</p>
              <div class="card mb-3" style="border-radius:25px">
                <div class="card-body p-4 my-2">
                  <b-form-group>
                    <b-form-radio-group v-model="headOrder.deliveryType" :options="headOrder.deliveryOptions" size="lg"
                      plain stacked>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
              </div>
              <h5 class="font-poppins font-weight-bold float-right" style="color:#362115;">IDR
                {{formatPrice(totalPrice+tax+shipping)}}</h5>
              <h5 class="font-poppins"> Total</h5>
            </div>
          </div>
          <div class="col-12 py-3" style="height:15vh">
            <button @click="toggleShow('payment')" style="font-size:20px;border-radius:25px;"
              class="w-100 h-100 btn btn-brown shadow-lg ">Proceed to payment</button>
          </div>
        </div>
      </div>
      <div v-if="showPayment">
        <div class="row mx-0 my-0 p-4" style="height:10vh">
          <div class="col-2">
            <p class="mb-0 brown" @click="toggleShow('delivery')"><i class="fas fa-angle-left"></i></p>
          </div>
          <div class="col-8 text-center">
            <p class="font-weight-bold font-poppins">Payment</p>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row mx-0 my-0">
          <div class="col-12">
            <div class="container">
              <p class="font-weight-bold font-poppins">Product</p>
              <div class="card" style="border-radius:15px">
                <div class="card-body">
                  <div style="max-height:25vh;overflow-y:scroll">
                    <!-- Jika ada itemnya -->
                    <div v-for="(item, index) in cart" :key="index" class="row no-gutters">
                      <div class="col-4 text-center my-auto">
                        <img :src="`${webURL}/image/${item.itemImage}`"
                          style="height:80px;width:80px;object-fit:cover;border-radius:25%" class="card-img">
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <h5 class="mb-0 card-title font-weight-bold">{{item.itemName}}</h5>
                          <p class="float-right mb-0 font-weight-bold">IDR {{formatPrice(item.price)}}</p>
                          <p class="card-text mb-0">x {{item.amount}} ({{item.size}})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 pt-3">
            <div class="container">
              <p class="font-weight-bold font-poppins">Payment Options</p>
              <div class="card mb-3" style="border-radius:25px">
                <div class="card-body p-4 my-2">
                  <b-form-group>
                    <b-form-radio-group v-model="headOrder.paymentType" :options="headOrder.paymentOptions" size="lg"
                      plain stacked>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
              </div>
              <h5 class="font-poppins font-weight-bold float-right" style="color:#362115;">IDR
                {{formatPrice(totalPrice+tax+shipping)}}</h5>
              <h5 class="font-poppins"> Total</h5>
            </div>
          </div>
          <div class="col-12 py-3" style="height:15vh">
            <button @click="buildFinalData()" style="font-size:20px;border-radius:25px;"
              class="w-100 h-100 btn btn-brown shadow-lg ">Proceed Payment</button>
          </div>
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
      showCart: true,
      showDelivery: false,
      showPayment: false,
      headOrder: {
        inv: 0,
        deliveryType: '',
        deliveryOptions: ['Door delivery', 'Pick up at store', 'Dine in'],
        paymentType: '',
        paymentOptions: ['Card', 'Bank Account', 'Cash on Delivery']
      }
    }
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
      this.swalLoading('Submitting Payment')
      if (this.headOrder.paymentType !== '') {
        this.generateInv()
        const finalData = this.cart.map((i) => ({
          ...i,
          paymentType: this.headOrder.paymentType,
          inv: this.headOrder.inv
        }))
        this.actionOrderPost(finalData)
          .then((response) => {
            if (response.code === 200) {
              this.swalLoadingClose()
              this.toggleShow('cart')
              this.actionEmptYCart()
              this.linkTo('product')
              this.swalAlert('Checkout Success', '', 'success')
            } else {
              this.swalLoadingClose()
              this.swalAlert('Checkout Error', response.msg, 'error')
            }
          })
          .catch((err) => {
            this.swalLoadingClose()
            console.log(err)
          })
      } else {
        this.swalLoadingClose()
        this.swalAlert('Checkout Error', 'Please select your payment method', 'error')
      }
    },
    toggleShow (show) {
      if (show === 'cart') {
        this.showCart = true
        this.showDelivery = false
        this.showPayment = false
      } else if (show === 'delivery') {
        this.showCart = false
        this.showDelivery = true
        this.showPayment = false
      } else {
        this.showCart = false
        this.showDelivery = false
        this.showPayment = true
      }
    }
  }
}
</script>

<style>

</style>
