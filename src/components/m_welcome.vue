<template>
  <div class="container" style="height:100vh">
    <div v-if="showHome" class="row h-100">
      <div class="col-12 my-auto">
        <h1 class="font-poppins font-weight-bold mx-auto" style="font-size:60px">Coffee for Everyone</h1>
        <img class="img-fluid py-3" src="../assets/img/img1.png" alt="img1" />
        <button @click="toggleWelcome()" class="btn btn-brown w-100 px-4 py-3" style="border-radius:10px">Get
          started</button>
      </div>
    </div>
    <div v-else class="row text-white"
      style="height: 100vh;background: url('https://i.ibb.co/6sxrLmV/bg-Login-1-1.png') no-repeat;background-repeat:no-repeat;background-size:cover;background-position:center">
      <div class="col-12">
        <div class="text-center pt-5 mt-3" style="height:30vh">
          <h1 class="font-poppins font-weight-bold">Welcome!</h1>
          <p class="font-poppins">
            Get a cup of coffee for free every <br> sunday morning
          </p>
        </div>
        <div style="height:40vh">
        </div>
        <div class="text-center" style="height:30vh">
          <button @click="linkTo('signup')" class="btn btn-brown font-poppins w-100 px-4 py-3"
            style="border-radius:10px">Create New Account</button>
          <button @click="linkTo('login')" class="btn btn-yellow text-dark mt-3 font-poppins w-100 px-4 py-3"
            style="border-radius:10px">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      showHome: false
    }
  },
  methods: {
    toggleWelcome () {
      this.showHome = !this.showHome
    },
    start () {
      this.$router.push('/signup')
    }
  }
}
</script>
