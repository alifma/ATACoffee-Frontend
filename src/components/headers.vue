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
      <div class="justify-conten-end">
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
export default {
  methods: {
    login () {
      // alert('Login')
      this.$router.push('/login')
    },
    signup () {
      // alert('Signup')
      this.$router.push('/signup')
    }
  }
}
</script>
