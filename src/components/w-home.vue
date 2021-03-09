<template>
  <div>
    <!-- Header -->
    <componentHeader />
    <!-- end Header -->
    <!-- jumbotron -->
    <div class="pb-5" style="background-image: url('https://i.ibb.co/Ph930NJ/bgHome.png');background-repeat: no-repeat;background-size:cover; background-position: center;">
      <div class="container py-5 pt-lg-3 pt-md-3 w-100">
        <div class=" d-none d-lg-block d-md-block">
          <div class="row">
            <div class="col-12 col-lg-6 col-md-6"></div>
            <div class="col-12 col-lg-6 col-md-6">
              <div class="float-lg-right float-md-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i></span>
                  </div>
                  <input type="text" class="form-controls shadow-none" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pb-5 mb-5">
          <div class="col-12 col-lg-6 text-white col-6">
            <h1 class="shadowText font-rubik font-weight-bold text-center text-lg-left text-md-left"
              style="font-size:45px;line-height:140%">Start Your Day with
              Coffee and Good Meals</h1>
            <h5 class="shadowText font-rubik font-weight-bold text-center text-lg-left text-md-left" style="line-height:140%">
              We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day
              with us for a bigger smile!
            </h5>
            <div class="text-center text-lg-left text-md-left">
              <button @click="getStart()" class="font-weight-bold px-4 mt-5 btn-warning btn bt-start">
              Get Started
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- info center -->
    <div class="container d-lg-block d-md-block d-none">
      <section class="info-center">
        <div class="row">
          <div class="col-4 col-lg-4 col-md-4 line-v">
            <span class="icon-people"><i class="fas fa-user"></i></span>
            <p class="poin-people">90+</p>
            <p class="sts-people">Staff</p>
          </div>
          <div class="col-4 col-lg-4 col-md-4 line-v">
            <span class="icon-location"
              ><i class="fas fa-map-marker-alt"></i
            ></span>
            <p class="poin-stores">30+</p>
            <p class="sts-stores">Stores</p>
          </div>
          <div class="col-4 col-lg-4 col-md-4 noline">
            <span class="icon-people"><i class="fas fa-heart"></i></span>
            <p class="poin-people">800+</p>
            <p class="sts-people">Customers</p>
          </div>
        </div>
      </section>
    </div>
    <!-- end info center -->
    <!-- start teamwork -->
    <div class="container">
      <div class="row py-5">
        <div class="col-12 col-lg-6 col-md-6">
          <img
              class="img-fluid"
              src="../assets/img/bg-Teamwork.png"
              alt="bg-teamwork"
            />
        </div>
        <div class="col-12 my-auto col-lg-6 col-md-6">
          <h2 class="font-rubik fw-500 lh-140 mb-4 text-center text-lg-left text-md-left">
              We Provide Good Coffee <br/> and Healthy Meals
            </h2>
            <p class="text-secondary text-center text-lg-left text-md-left" style="line-height:30px">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>

            <ul class="pl-0 text-center text-lg-left text-md-left" style="list-style: none;">
              <li>
                <i class="fas text-success fa-check-circle"></i>
                <span class="list ml-2"> High quality beans</span>
              </li>
              <li>
                <i class="fas text-success fa-check-circle"></i>
                <span class="list ml-2">
                  Healthy meals, you can request the ingredients</span
                >
              </li>
              <li>
                <i class="fas text-success fa-check-circle"></i>
                <span class="list ml-2">
                  Chat with our staff to get better experience for
                  ordering</span
                >
              </li>
              <li>
                <i class="fas text-success fa-check-circle"></i>
                <span class="list ml-2">
                  Free member card with a minimum purchase of IDR 200.000.</span
                >
              </li>
            </ul>
        </div>
      </div>
    </div>
    <!-- end teamwork -->
    <!-- favorite -->
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12">
            <h3 class="font-rubik fw-500 mb-3 text-center" style="line-height:30px; font-size:35px">Here is People's
              Favorite</h3>
            <p class="text-secondary text-center mb-0">
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </p>
          </div>
        </div>
        <div class="row mx-auto w-100 pt-5" style="height: min-content;">
          <div class="col-12 col-lg-4 col-md-6 mb-2 h-100">
            <div class="card" style="border-radius:15px;height:700px">
              <div class="card-body">
                <div class="text-center">
                  <img src="../assets/img/menu-img1.png" class="card-img-list" alt="menu-img1" />
                  <h5 class="font-weight-bold font-rubik mt-5">Hazelnut Latte</h5>
                </div>
                <ul class="mt-4" style="list-style:none">
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Hazelnut Syrup</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Wanilla Whipped Cream</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Ice / Hot</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Sliced Banana on Top</span>
                  </li>
                </ul>
                <div class="text-center">
                  <h3 class="font-weight-bold pt-5 pb-3">IDR 25.000</h3>
                  <button @click="select()" class="btn btn-outline-warning bt-order-now">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mb-2 h-100">
            <div class="card" style="border-radius:15px;height:700px">
              <div class="card-body">
                <div class="text-center">
                  <img src="../assets/img/menu-img2.png" class="card-img-list" alt="menu-img1" />
                  <h5 class="font-weight-bold font-rubik mt-5">Pinky Promise</h5>
                </div>
                <ul class="mt-4" style="list-style:none">
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">1 Shot of Coffee</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Vanilla Whipped Cream</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Chocolate Biscuits</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Strawberry Syrup</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Sliced strawberry on Top</span>
                  </li>
                </ul>
                <h3 class="font-weight-bold text-center pt-5 pb-3">IDR 30.000</h3>
                <div class="text-center">
                  <button @click="select()" class="btn btn-outline-warning bt-order-now">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 mb-2 h-100">
            <div class="card" style="border-radius:15px;height:700px">
              <div class="card-body">
                <div class="text-center">
                  <img src="../assets/img/menu-img3.png" class="card-img-list" alt="menu-img1" />
                  <h5 class="font-weight-bold font-rubik mt-5">Chicken Wings</h5>
                </div>
                <ul class="mt-4" style="list-style:none">
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Wings</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Drum Sticks</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Mayonaise and Lemon</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Hot Fried</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Secret Recipe</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check text-success"></i>
                    <span class="list-fav ml-3">Buy 1 Get 1 only for Dine in</span>
                  </li>
                </ul>
                <h3 class="font-weight-bold text-center pt-5 pb-3">IDR 40.000</h3>
                <div class="text-center">
                  <button @click="select()" class="btn btn-outline-warning bt-order-now">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end favorite -->
    <!-- visite store -->
    <div class="container ">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="font-rubik fw-500">
            Visit Our Store in the <br />
            Spot on the Map Below</h1>
            <p class="text-secondary">
              See our store in every city on the spot and spen your good day
              there. See <br />
              you soon!
            </p>

            <img
              class="img-fluid pt-0 mt-0 pt-lg-5 pt-md-5 mt-lg-5 mt-md-5"
              src="../assets/img/img-global.png"
              alt="img-global"
            />
        </div>
      </div>
    </div>
    <!-- end visite store -->
    <!-- out partner -->
    <section class="our-partner">
      <div class="container pt-5 pt-lg-0 pt-md-0">
        <div class="row">
          <div class="col-md-12">
            <h3 class="font-weight-bold text-center">Our Partner</h3>
          </div>
        </div>
        <div class="row pt-0 pt-lg-5 pt-md-5 mx-auto text-secondary">
          <div class="col-md-2 col-lg-2 col-4">
            <h4>NETFLIX</h4>
          </div>
          <div class="col-md-2 col-lg-2 col-4">
            <h4>reddit</h4>
          </div>
          <div class="col-md-2 col-lg-2 col-4">
            <h4>amazon</h4>
          </div>
          <div class="col-md-2 col-lg-2 col-4">
            <h4>DISCORD</h4>
          </div>
          <div class="col-md-2 col-lg-2 col-4">
            <h4>Spotify</h4>
          </div>
          <div class="col-md-2 col-lg-2 col-4">
            <h4>Microsoft</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- end our partner -->
    <!-- react customer -->
    <section class="react-customer">
      <div class="container  pt-5 pt-lg-0 pt-md-0">
        <div class="row">
        <div class="col-12">
            <h3 class="font-rubik fw-500 text-center mb-3">
              Loved by Thousands of <br> Happy Customer
            </h3>
            <p class="text-center text-secondary d-md-none d-lg-block">
              These are the stories of our customers who have visited us with great pleasure.
            </p>
        </div>
      </div>
      <div class=" d-none d-md-none d-lg-block">
        <div class="row">
          <div class="col-md-4">
            <div class="card-review cd-active">
              <div class="card-body-review">
                <div class="row">
                  <div class="col-3">
                    <img
                  src="../assets/img/profile1.png"
                  alt="profile1"
                  class="img-review"
                />
                  </div>
                  <div class="col-9 my-auto">
                    <p class="float-right mb-0 font-rubik fw-500">
                      4.5
                      <span class="start-review ml-2"><i class="fas fa-star"></i></span>
                    </p>
                    <h5 class="mb-0 fw-500 font-rubik">Viezh Robert</h5>
                    <h6 class="mb-0 text-secondary font-rubik">Warsaw, Poland</h6>
                  </div>
                </div>
                <p class="card-text-review mt-4">
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!"
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-review cd-noactive">
              <div class="card-body-review">
                <div class="row">
                  <div class="col-3">
                    <img
                  src="../assets/img/profile2.png"
                  alt="profile1"
                  class="img-review"
                />
                  </div>
                  <div class="col-9 my-auto">
                    <p class="float-right mb-0 font-rubik fw-500">
                      4.5
                      <span class="start-review ml-2"><i class="fas fa-star"></i></span>
                    </p>
                    <h5 class="mb-0 fw-500 font-rubik">Yessica Christy</h5>
                    <h6 class="mb-0 text-secondary font-rubik">Shanxi, China</h6>
                  </div>
                </div>
                <p class="card-text-review mt-4">
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte"
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-review cd-noactive">
               <div class="card-body-review">
                <div class="row">
                  <div class="col-3">
                    <img
                  src="../assets/img/profile3.png"
                  alt="profile1"
                  class="img-review"
                />
                  </div>
                  <div class="col-9 my-auto">
                    <p class="float-right mb-0 font-rubik fw-500">
                      4.5
                      <span class="start-review ml-2"><i class="fas fa-star"></i></span>
                    </p>
                    <h5 class="mb-0 fw-500 font-rubik">Kim Young Jou</h5>
                    <h6 class="mb-0 text-secondary font-rubik">Seoul, South Korea</h6>
                  </div>
                </div>
                <p class="card-text-review mt-4">
                  “This is very unusual for my taste, I haven’t liked coffee
                  before but their coffee is the best! and yup, you have to
                  order the chicken wings, the best in town!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" pt-5 d-none d-md-none d-lg-block">
        <div class="row">
          <div class="col-md-4 mt-4">
            <span class="dash1"></span>
            <span class="dash2 ml-2"></span>
            <span class="dash2 ml-2"></span>
            <span class="dash2 ml-2"></span>
          </div>
          <div class="col-md-8">
            <div class="container-btn">
              <button @click="arrowLeft()" class="btn btn-left">
                <i class="fas fa-arrow-left"></i>
              </button>
              <button @click="arrowRight()" class="btn btn-right ml-3">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <!-- end react customer -->
    <!-- box promo -->
    <div class="container pt-5">
      <div class="card shadow-lg" style="border-radius:20px">
        <div class="card-body p-5">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-12 text-center text-lg-left text-md-center">
            <h2 class="font-rubik font-weight-bold">Check our promo today!</h2>
            <p class="info-promo mt-3">Let's see the deals and pick yours!</p>
          </div>
          <div class="col-12 col-lg-6 col-md-12 text-center text-md-center text-lg-right">
            <button @click="promoBtn()" class="btn btn-promo">See Promo</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- end box promo -->
    <!-- footer -->
    <componentFooter />
    <!-- end footer -->
  </div>
</template>
<style scoped>
/* div.card {
  position: absolute;
  height: 800px;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
} */
</style>
<script>
import componentHeader from '../components/headers'
import componentFooter from '../components/footers'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  components: {
    componentHeader,
    componentFooter
  },
  methods: {
    getStart () {
      this.$router.push('/login')
    },
    select () {
      this.swalAlert('Comming Soon', 'You will be able to select our favourite products', 'info')
    },
    arrowLeft () {
      this.swalAlert('Comming Soon', 'You will be able to navigate left', 'info')
    },
    arrowRight () {
      this.swalAlert('Comming Soon', 'You will be able to navigate right', 'info')
    },
    promoBtn () {
      this.swalAlert('Comming Soon', 'You will be able to select our best promo!', 'info')
    }
  },
  mounted () {
    document.getElementById('link1').classList.add('active')
    console.log(process.env)
  }
}
</script>
