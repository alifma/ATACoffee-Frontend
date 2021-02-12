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
          <router-link class="nav-link" id="link3" to="/"
            >Your Cart</router-link
          >
          <router-link class="nav-link" id="link4" to="/">History</router-link>
        </div>
      </div>
      <div v-if="getAccess != null" class="justify-conten-end">
        <button
          @click="search()"
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
          <img
            style="
              border-radius: 50%;
              width: 45px;
              height: 45px;
              border: 3px solid #6a4029;
            "
            src="../assets/img/f-profile.png"
            alt=""
          />
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getAccess: 'auth/getAccess'
    })
  },
  methods: {
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
    }
  }
}
</script>
