<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img class="img-navbar" src="../assets/img/icoWeb.png" alt="icoWeb" />
        Coffee Shop</router-link
      >
      <div class="collapse navbar-collapse justify-content-center">
        <div class="navbar-nav">
          <router-link class="nav-link" id="link1" to="/">Home</router-link>
          <router-link class="nav-link" id="link2" to="/product"
            >Product</router-link
          >
          <router-link
            v-if="getAccess != null"
            class="nav-link"
            id="link3"
            to="/checkout"
            >Your Cart</router-link
          >
          <router-link
            v-if="getAccess == 2"
            class="nav-link"
            id="link4"
            to="/orders"
            >History</router-link
          >
          <router-link
            v-if="getAccess == 1"
            class="nav-link"
            id="link5"
            to="/waitinglist"
            >Orders</router-link
          >
          <router-link
            v-if="getAccess == 1"
            class="nav-link"
            id="link6"
            to="/dashboard"
            >Dashboard</router-link
          >
        </div>
      </div>
      <div v-if="getAccess != null" class="justify-content-end">
        <input v-model="productQuery.name" @change="getProduct()" v-if="toggleSearch" type="text" id="productNameSearch" style="width:100px">
        <button
          @click="switchToggle()"
          style="
            border: none;
            background: none;
            font-size: 24px;
            color: #4f5665;
          "
          class="mr-5"
        >
          <i class="fas fa-search"></i>
        </button>
        <button
          @click="chating()"
          style="
            border: none;
            background: none;
            font-size: 30px;
            color: #4f5665;
          "
          class="mr-4"
        >
          <span
            class="font-rubik mt-n1 ml-n3"
            style="
              position: absolute;
              padding: 5px 10px;
              background: #6a4029;
              font-size: 8px;
              font-weight: 600;
              color: #fff;
              border-radius: 50%;
            "
            >1</span
          >
          <img src="../assets/img/chat.png" alt="chat" />
        </button>
        <button @click="profile()" style="background: none; border: none">
          <div
            v-if="
              getUserDetail.image === 'default.png' ||
              getUserDetail.image === undefined
            "
          >
            <img
              src="../assets/img/f-profile.png"
              style="
                border-radius: 50%;
                width: 45px;
                height: 45px;
                border: 3px solid #6a4029;
              "
              alt="wait"
            />
          </div>
          <div v-else>
            <img
              :src="`http://52.91.116.102:3001/image/${getUserDetail.image}`"
              style="
                border-radius: 50%;
                width: 45px;
                height: 45px;
                border: 3px solid #6a4029;
              "
              alt="wait"
            />
          </div>
        </button>
      </div>
      <div v-else>
        <button @click="login()" class="btn btn-link mr-4 bt-login">
          Login
        </button>
        <button @click="signup()" class="btn btn-warning bt-signup">
          Sign Up
        </button>
      </div>
    </div>
  </nav>
  <!-- end navbar -->
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
      alert('chating')
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
