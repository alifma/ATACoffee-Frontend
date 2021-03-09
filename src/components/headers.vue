<template>
  <!-- navbar -->
<div class="bg-white">
  <div class="container d-none d-md-none d-lg-block py-3">
    <div class="row">
      <div class="col-2 my-auto">
        <router-link class="navbar-brand" to="/"><img class="img-navbar mb-0" src="../assets/img/icoWeb.png" alt="icoWeb" />
          Coffee Shop</router-link>
      </div>
      <div class="col-6 my-auto col-lg-6 col-md-6 text-center hideScroll" style="overflow-x:scroll;white-space:pre">
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Home' ? 'active ' : ''}`" id="link1" to="/">Home</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Product' || $route.name === 'ProductAdd' || $route.name === 'ProductDetails' ? 'active ' : ''}`" id="link2" to="/product">Product</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'checkout' ? 'active ' : ''}`" v-if="getAccess != null" id="link3" to="/checkout">
          Your Cart</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'orders' || $route.name === 'detailOrders' ? 'active ' : ''}`" v-if="getAccess == 2" id="link4" to="/orders">
          History</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'waitingList' || $route.name === 'WaitingListDetails' ? 'active ' : ''}`" v-if="getAccess == 1" id="link5" to="/waitinglist">
          Orders</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Dashboard' ? 'active ' : ''}`" v-if="getAccess == 1" id="link6" to="/dashboard">
          Dashboard</router-link>
      </div>
      <div class="col-lg-4 col-md-6 text-right" v-if="getAccess != null">
        <input v-model="productQuery.name" @change="getProduct()" v-if="toggleSearch" type="text" id="productNameSearch"
          style="width: 100px" />
        <button @click="switchToggle()" style="
            border: none;
            background: none;
            font-size: 24px;
            color: #4f5665;
          " class="mr-5">
          <i class="fas fa-search"></i>
        </button>
        <button @click="chating()" style="
            border: none;
            background: none;
            font-size: 30px;
            color: #4f5665;
          " class="mr-4">
          <span class="font-rubik mt-n1 ml-n3" style="
              position: absolute;
              padding: 5px 10px;
              background: #6a4029;
              font-size: 8px;
              font-weight: 600;
              color: #fff;
              border-radius: 50%;
            ">1</span>
          <img src="../assets/img/chat.png" alt="chat" />
        </button>
        <button @click="profile()" style="background: none; border: none">
          <div v-if="
              getUserDetail.image === 'default.png' ||
              getUserDetail.image === undefined
            ">
            <img src="../assets/img/avatar.png" style="
                border-radius: 50%;
                width: 45px;
                height: 45px;
                border: 3px solid #6a4029;
              " alt="wait" />
          </div>
          <div v-else>
            <img :src="`${webURL}/image/${getUserDetail.image}`"
              style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 45px;width:45px;border: 3px solid #6a4029;"
              alt="wait" />
          </div>
        </button>
      </div>
      <div class="col-lg-4 col-md-6 text-right" v-else>
        <button @click="login()" class="btn btn-link mr-4 bt-login">
          Login
        </button>
        <button @click="signup()" class="btn btn-warning bt-signup">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  <div class="container d-block d-md-block d-lg-none py-3">
    <div class="row">
      <div class="col-6 my-auto">
        <router-link class="navbar-brand" to="/"><img class="img-navbar mb-0" src="../assets/img/icoWeb.png" alt="icoWeb" />
          Coffee Shop</router-link>
      </div>
      <div class="col-lg-4 col-md-6 text-right" v-if="getAccess != null">
        <input v-model="productQuery.name" @change="getProduct()" v-if="toggleSearch" type="text" id="productNameSearch"
          style="width: 100px" />
        <button @click="switchToggle()" style="
            border: none;
            background: none;
            font-size: 24px;
            color: #4f5665;
          " class="mr-5">
          <i class="fas fa-search"></i>
        </button>
        <button @click="chating()" style="
            border: none;
            background: none;
            font-size: 30px;
            color: #4f5665;
          " class="mr-4">
          <span class="font-rubik mt-n1 ml-n3" style="
              position: absolute;
              padding: 5px 10px;
              background: #6a4029;
              font-size: 8px;
              font-weight: 600;
              color: #fff;
              border-radius: 50%;
            ">1</span>
          <img src="../assets/img/chat.png" alt="chat" />
        </button>
        <button @click="profile()" style="background: none; border: none">
          <div v-if="
              getUserDetail.image === 'default.png' ||
              getUserDetail.image === undefined
            ">
            <img src="../assets/img/avatar.png" style="
                border-radius: 50%;
                width: 45px;
                height: 45px;
                border: 3px solid #6a4029;
              " alt="wait" />
          </div>
          <div v-else>
            <img :src="`${webURL}/image/${getUserDetail.image}`"
              style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 45px;width:45px;border: 3px solid #6a4029;"
              alt="wait" />
          </div>
        </button>
      </div>
      <div class="col-lg-4 col-md-6 text-right" v-else>
        <button @click="login()" class="btn btn-link mr-4 bt-login">
          Login
        </button>
        <button @click="signup()" class="btn btn-warning bt-signup">
          Sign Up
        </button>
      </div>
      <div class="col-12 my-auto col-lg-12 col-md-12 text-center hideScroll" style="overflow-x:scroll;white-space:pre">
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Home' ? 'active ' : ''}`" id="link1" to="/">Home</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Product' || $route.name === 'ProductAdd' || $route.name === 'ProductDetails' ? 'active ' : ''}`" id="link2" to="/product">Product</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'checkout' ? 'active ' : ''}`" v-if="getAccess != null" id="link3" to="/checkout">
          Your Cart</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'orders' || $route.name === 'detailOrders' ? 'active ' : ''}`" v-if="getAccess == 2" id="link4" to="/orders">
          History</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'waitingList' || $route.name === 'WaitingListDetails' ? 'active ' : ''}`" v-if="getAccess == 1" id="link5" to="/waitinglist">
          Orders</router-link>
        <router-link :class="`navigasi px-3 text-dark font-poppins ${$route.name === 'Dashboard' ? 'active ' : ''}`" v-if="getAccess == 1" id="link6" to="/dashboard">
          Dashboard</router-link>
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
      toggleSearch: false,
      formContact: {
        image: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getAccess: 'auth/getAccess',
      getUserDetail: 'auth/getUserDetail'
    })
  },
  methods: {
    ...mapActions({
      actionGetProfile: 'auth/getProfile',
      allitems: 'products/getAllProduct'
    }),
    profile () {
      this.$router.push('/profile')
    },
    login () {
      this.$router.push('/login')
    },
    signup () {
      this.$router.push('/signup')
    },
    chating () {
      this.swalAlert('Comming Soon', 'You will be able to chat with our cashier', 'info')
    },
    search () {
      alert('Searching')
    },
    switchToggle () {
      this.toggleSearch = !this.toggleSearch
    },
    getProduct () {
      this.productQuery.page = 1
      this.allitems(this.productQuery)
      // this.$router.push('/waitinglist')
    }
  },
  mounted () {
    // this.actionGetProfile()
  }
}
</script>
