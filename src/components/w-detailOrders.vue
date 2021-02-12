<template>
  <div>
    <!-- Header -->
    <componentHeader />
    <!-- end Header -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6">
            <h5 class="tittle">Finish your customer Order now.</h5>
            <div class="card cardorder">
              <div class="card-body">
                <h3 class="ordertext">Delivery Order</h3>
                <p class="nameorder">for zulaikha</p>
                <div class="row scroll">
                  <div class="col-3">
                    <img
                      src="../assets/img/menu-img2.png"
                      class="imgcard"
                      alt=""
                    />
                  </div>
                  <div class="col-6">
                    <p class="nameorder">Hazelnut Latte x 1 Regular</p>
                  </div>
                  <div class="col-3">
                    <p class="nameorder">IDR 24.0</p>
                  </div>
                </div>
                <!-- footer card order -->
                <div class="footertest"></div>
                <div class="fontsubtotal">
                  <h5 class="float-left">SUBTOTAL</h5>
                  <h5 class="float-right">IDR 120.000</h5>
                </div>
                <div class="fontsubtotal">
                  <h5 class="float-left">TAX & FEES</h5>
                  <h5 class="float-right">IDR 20.000</h5>
                </div>
                <div class="fontsubtotal">
                  <h5 class="float-left">SHIPPING</h5>
                  <h5 class="float-right">IDR 10.000</h5>
                </div>
                <div class="fonttotal">
                  <h3 class="float-left font-weight-bold">TOTAL</h3>
                  <h3 class="float-right font-weight-bold">IDR 150.000</h3>
                </div>
              </div>
            </div>
            <button class="btn btn-lg btn-block btnswipe">
              Swipe up to see upcoming orders
            </button>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-6">
                <h3 class="float-left address">Address detail</h3>
              </div>
              <div class="col-6">
                <button class="btn float-right btnedit">edit</button>
              </div>
              <div class="col">
                <div class="card cardedit">
                  <div class="card-body">
                    <h5>
                      <span class="font-weight-bold">Delivery</span> to iskandar
                      street
                    </h5>
                    <div class="borderedit"></div>
                    <div>
                      <h5>
                        Km 5 refinery road oppsite re public road, effurun,
                        Jakarta
                      </h5>
                    </div>
                    <div class="borderedit"></div>
                    <div>
                      <h5>+62 81348287878</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3 class="float-left payment">payment</h3>
              </div>
              <div class="col-12">
                <div class="card cardedit">
                  <div class="card-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label fontpayment"
                        for="exampleRadios1"
                      >
                        card
                      </label>
                    </div>
                    <div class="borderedit"></div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label fontpayment"
                        for="exampleRadios1"
                      >
                        Bank Account
                      </label>
                    </div>
                    <div class="borderedit"></div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label fontpayment"
                        for="exampleRadios1"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <componentFooter />
    <!-- end footer -->
  </div>
</template>

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
  margin-left: 20%;

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
  max-height: 200px;
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

<script>
import componentHeader from '../components/headers'
import componentFooter from '../components/footers'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    componentHeader,
    componentFooter
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    })
  },
  mounted () {
  }
}
</script>
