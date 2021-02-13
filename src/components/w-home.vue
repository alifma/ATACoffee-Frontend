<template>
  <div>
    <!-- Header -->
    <componentHeader />
    <!-- end Header -->
    <!-- jumbotron -->
    <div class="jumbotron">
      <div class="container">
        <div class="search mt-n5">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping"
                ><i class="fas fa-search"></i
              ></span>
            </div>
            <input type="text" class="form-controls" placeholder="Search" />
          </div>
        </div>
        <h1 class="display-4">Start Your Day with Coffee and Good Meals</h1>
        <p class="text-jumbotron">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <button @click="getStart()" class="btn btn-warning mt-5 bt-start">
          Get Started
        </button>
      </div>
    </div>
    <!-- end jumbotron -->
    <!-- info center -->
    <div class="container">
      <section class="info-center">
        <div class="row">
          <div class="col-md-4 line-v">
            <span class="icon-people"><i class="fas fa-user"></i></span>
            <p class="poin-people">90+</p>
            <p class="sts-people">Staff</p>
          </div>
          <div class="col-md-4 line-v">
            <span class="icon-location"
              ><i class="fas fa-map-marker-alt"></i
            ></span>
            <p class="poin-stores">30+</p>
            <p class="sts-stores">Stores</p>
          </div>
          <div class="col-md-4 noline">
            <span class="icon-people"><i class="fas fa-heart"></i></span>
            <p class="poin-people">800+</p>
            <p class="sts-people">Customers</p>
          </div>
        </div>
      </section>
    </div>
    <!-- end info center -->
    <!-- start teamwork -->
    <section class="info-teamwork">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              class="img-teamwork"
              src="../assets/img/bg-Teamwork.png"
              alt="bg-teamwork"
            />
          </div>
          <div class="col-md-6">
            <h2 class="title-teamwork">
              We Provide Good Coffee and Healthy Meals
            </h2>
            <p class="info-teamwork">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <ul class="list-teamwork">
              <li>
                <i class="fas fa-check-circle"></i>
                <span class="list ml-2"> High quality beans</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span class="list ml-2">
                  Healthy meals, you can request the ingredients</span
                >
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span class="list ml-2">
                  Chat with our staff to get better experience for
                  ordering</span
                >
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span class="list ml-2">
                  Free member card with a minimum purchase of IDR 200.000.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- end teamwork -->
    <!-- favorite -->
    <section class="favorite">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-favorite mt-5">Here is People's Favorite</h3>
          </div>
          <div class="col-md-12">
            <p class="info-favorite">
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </p>
          </div>
        </div>
        <!-- card list -->
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="../assets/img/menu-img1.png"
                class="card-img-list"
                alt="menu-img1"
              />
              <div class="card-body">
                <h5 class="card-title mt-5">Hazelnut Latte</h5>
                <ul class="list-favorite mt-4">
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">HazelnutSyrup</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Wanilla Whipped Cream</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Ice / Hot</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Sliced Banana on Top</span>
                  </li>
                </ul>
                <h3 class="list-idr">IDR 25.000</h3>
                <button
                  @click="orderNow()"
                  class="btn btn-outline-warning bt-order-now"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="../assets/img/menu-img2.png"
                class="card-img-list"
                alt="menu-img2"
              />
              <div class="card-body">
                <h5 class="card-title mt-5">Pinky Promise</h5>
                <ul class="list-favorite mt-4">
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">1 Shot of Coffee</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Vanilla Whipped Cream</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Chocolate Biscuits</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Strawberry Syrup</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Sliced strawberry on Top</span>
                  </li>
                </ul>
                <h3 class="list-idr">IDR 30.000</h3>
                <button
                  @click="select()"
                  class="btn btn-outline-warning bt-order-now"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="../assets/img/menu-img3.png"
                class="card-img-list"
                alt="menu-img3"
              />
              <div class="card-body">
                <h5 class="card-title mt-5">Chicken Wings</h5>
                <ul class="list-favorite mt-4">
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Wings</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Drum Sticks</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Mayonaise and Lemon</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Hot Fried</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3">Secret Recipe</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check"></i>
                    <span class="list-fav ml-3"
                      >Buy 1 Get 1 only for Dine in</span
                    >
                  </li>
                </ul>
                <h3 class="list-idr">IDR 25.000</h3>
                <button
                  @click="select()"
                  class="btn btn-outline-warning bt-order-now"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end card list -->
      </div>
    </section>
    <!-- end favorite -->
    <!-- visite store -->
    <section class="visit-stores">
      <div class="container">
        <div class="row mt-n5">
          <div class="col-md-12">
            <h3 class="title-visit">
              Visit Our Store in the <br />
              Spot on the Map Below
            </h3>
          </div>
          <div class="col-md-12">
            <p class="info-visit-store">
              See our store in every city on the spot and spen your good day
              there. See <br />
              you soon!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <img
              class="img-global"
              src="../assets/img/img-global.png"
              alt="img-global"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- end visite store -->
    <!-- out partner -->
    <section class="our-partner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-ourpartner">Our Partner</h3>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-2">
            <h4>NETFLIX</h4>
          </div>
          <div class="col-md-2">
            <h4>reddit</h4>
          </div>
          <div class="col-md-4">
            <h4>amazon</h4>
          </div>
          <div class="col-md-2">
            <h4>DISCORD</h4>
          </div>
          <div class="col-md-2">
            <h4>Spotify</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- end our partner -->
    <!-- react customer -->
    <section class="react-customer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-react-cus">
              Loved by Thousands of Happy Customer
            </h3>
          </div>
          <div class="col-md-12">
            <p class="info-react-cus">
              These are the stories of our customers who have visited us with
              great pleasure.
            </p>
          </div>
        </div>
        <!-- card review-->
        <div class="row">
          <div class="col-md-4">
            <div class="card-review cd-active">
              <div class="card-body-review">
                <img
                  src="../assets/img/profile1.png"
                  alt="profile1"
                  class="img-review"
                />
                <h5 class="card-title-review">Viezh Robert</h5>
                <h6 class="card-subtitle-review">Warsaw, Poland</h6>
                <p class="score-review">
                  4.5
                  <span class="start-review ml-2"
                    ><i class="fas fa-star"></i
                  ></span>
                </p>
                <p class="card-text-review mt-4">
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-review cd-noactive">
              <div class="card-body-review">
                <img
                  src="../assets/img/profile2.png"
                  alt="profile2"
                  class="img-review"
                />
                <h5 class="card-title-review">Yessica Christy</h5>
                <h6 class="card-subtitle-review">Shanxi, China</h6>
                <p class="score-review">
                  4.5
                  <span class="start-review ml-2"
                    ><i class="fas fa-star"></i
                  ></span>
                </p>
                <p class="card-text-review mt-4">
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-review cd-noactive">
              <div class="card-body-review">
                <img
                  src="../assets/img/profile3.png"
                  alt="profile3"
                  class="img-review"
                />
                <h5 class="card-title-review">Kim Young Jou</h5>
                <h6 class="card-subtitle-review">Seoul, South Korea</h6>
                <p class="score-review">
                  4.5
                  <span class="start-review ml-2"
                    ><i class="fas fa-star"></i
                  ></span>
                </p>
                <p class="card-text-review mt-4">
                  “This is very unusual for my taste, I haven’t liked coffee
                  before but their coffee is the best! and yup, you have to
                  order the chicken wings, the best in town!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
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
        <!-- end card review-->
      </div>
    </section>
    <!-- end react customer -->
    <!-- box promo -->
    <div class="container">
      <section class="box-promo">
        <div class="row">
          <div class="col-md-6">
            <h2 class="title-promo">Check our promo today!</h2>
            <p class="info-promo mt-3">Let's see the deals and pick yours!</p>
          </div>
          <div class="col-md-6">
            <button @click="promoBtn()" class="btn btn-promo">See Promo</button>
          </div>
        </div>
      </section>
    </div>
    <!-- end box promo -->
    <!-- footer -->
    <componentFooter />
    <!-- end footer -->
  </div>
</template>
<style scoped>
div.card {
  position: absolute;
  height: 800px;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
}
</style>
<script>
import componentHeader from '../components/headers'
import componentFooter from '../components/footers'
export default {
  components: {
    componentHeader,
    componentFooter
  },
  methods: {
    getStart () {
      alert('Get Start')
    },
    select () {
      alert('Select')
    },
    orderNow () {
      alert('Order Now')
    },
    arrowLeft () {
      alert('Left')
    },
    arrowRight () {
      alert('Right')
    },
    promoBtn () {
      alert('Promo menarik!')
    }
  },
  mounted () {
  }
}
</script>
