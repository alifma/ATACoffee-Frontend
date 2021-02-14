<template>
<div style="background-image: url('https://i.ibb.co/jwqkCjf/bg-Checkout.png');background-repeat: no-repeat;background-position: center;">
    <!-- Header -->
    <componentHeader />
    <!-- end Header -->
    <div class="container py-4">
      <h1 class="text-white font-rubik" style="font-size: 40px;text-shadow: 2px 2px 4px #000000;">Review your receipt</h1>
    </div>
    <div class="container pb-4 mb-4">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="card" style="border-radius:25px">
            <div class="card-body pr-4 pb-4 pl-4 mt-4">
              <h1 class="text-center font-poppins font-weight-bold mb-0" style="color:#362115;">Order Receipt</h1>
              <h5 v-if="detailOrdersHead.cashier != null" class="text-center mb-0 font-poppins" style="color:#362115;">Cashier : {{detailOrdersHead.cashier}}</h5>
              <h5 v-else class="text-center text-danger mb-0 font-poppins">Pending</h5>
              <p class="text-center font-poppins">{{new Date(detailOrdersHead.created_at).toLocaleDateString()}}</p>
              <div style="max-height:40vh;overflow-y:scroll">
                <!-- Jika ada itemnya -->
                <div v-for="(item, index) in detailOrdersBody" :key="index" class="row no-gutters" style="height:18vh">
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
          <h3 class="text-white font-rubik" style="text-shadow: 2px 2px 4px #000000;">Address details</h3>
          <div class="card" style="border-radius:25px">
            <div class="card-body p-4 my-2">
              <p class="mb-0 font-weight-bolder font-poppins">{{detailOrdersHead.orderType}}</p>
              <hr class="my-0">
              <p class="mb-0 font-poppins" style="text-align:justify">{{detailOrdersHead.orderDetails}}</p>
              <hr class="my-0">
              <p class="mb-0 font-poppins" style="text-align:justify">{{detailOrdersHead.orderPhone}}</p>
            </div>
          </div>
          <h3 class="text-white font-rubik mt-4" style="text-shadow: 2px 2px 4px #000000;">Payment Method</h3>
          <div class="card" style="border-radius:25px">
            <div class="card-body p-4 my-2">
              <b-form-group>
                <b-form-radio-group v-model="detailOrdersHead.paymentType" disabled :options="paymentOptions" size="lg" plain
                  stacked>
                </b-form-radio-group>
              </b-form-group>
            </div>
          </div>
          <button @click="gotoOrder()" class="btn btn-brown font-poppins w-100 mt-4"
            style="font-size:20px;border-radius:25px;height:60px">Back to Order</button>
          <button @click="gotoDashboard()" class="btn btn-warning font-weight-bold font-poppins w-100 mt-4"
            style="font-size:20px;border-radius:25px;height:60px">Go to Dashboard</button>
        </div>
      </div>
    </div>
    <componentFooter />
    <!-- end footer -->
  </div>
</template>

<script>
import componentHeader from '../components/headers'
import componentFooter from '../components/footers'
import { mapActions, mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  components: {
    componentHeader,
    componentFooter
  },
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
      shipping: 'orders/shipping'
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

<style scoped>
.creditcard {
  background: #f47b0a;
  border-radius: 10px;
}
.bank {
  background: linear-gradient(0deg, #895537, #895537), #c4c4c4;
  border-radius: 10px;
}
.cod {
  background: linear-gradient(0deg, #ffba33, #ffba33), #c4c4c4;
  border-radius: 10px;
}

.fontpayment {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
}
.borderedit {
  opacity: 0.3;
  border: 0.5px solid #000000;
  margin-bottom: 4%;
  margin-top: 4%;
}
.cardedit {
  width: 70%;
  margin-left: 10%;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}
.jumbotron {
  height: 900px;
}
.btnedit {
  margin-top: 25%;
  padding-right: 40%;
}
.payment {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  margin-top: 5%;
  margin-left: 10%;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.address {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  margin-top: 25%;
  margin-left: 10%;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.btnswipe {
  background: #ffba33;
  border-radius: 20px;
  margin-top: 10%;
  width: 85%;
  float: right;
}
.scroll {
  max-height: 600px;
  overflow-y: auto;
}
.tittle {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.ordertext {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  text-align: center;

  color: #362115;
}
.footertest {
  opacity: 0.3;
  border: 0.5px solid #000000;
  margin-top: 10%;
  margin-bottom: 4%;
}
.nameorder {
  font-family: Poppins;
  font-style: normal;
  font-size: 20px;
  text-align: center;
  color: #362115;
}
.cardorder {
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  margin-left: 15%;
  margin-top: 10%;
}
.fontsubtotal {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  clear: both;

  color: #362115;
}
.fonttotal {
  font-family: Poppins;
  font-style: normal;
  font-size: 30px;
  line-height: 45px;
  clear: both;
  margin-top: 10%;

  color: #362115;
}

.imgcard {
  border-radius: 20px;
  max-width: 100px;
  padding-bottom: 10%;
}
.fontstyle {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  font-size: 2vw;
  color: #000000;
}
.fontstyle2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  text-align: left;
  color: #895537;
}
.btnDetail {
  margin-top: -30px;
  background: #6a4029;
  border-radius: 50%;
  padding-left: 3%;
  padding-right: 3%;
}
</style>
