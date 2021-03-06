<template>
  <div class="container" style="height:100vh;background:#F2F2F2;">
    <div class="div" style="height:5vh"></div>
    <div class="row px-3" style="height:50vh">
      <div class="col-6 my-auto">
      <img class="img-fluid" src="../assets/img/img4.png" alt="img4" />
      </div>
      <div class="col-6 my-auto mx-0">
        <h1 class="font-weight-bold font-poppins mb-0 ml-0" style="font-size:60px">Log <br>in</h1>
      </div>
    </div>
      <form action="" @submit.prevent="onLogin()" class="px-3" style="height:45vh">
        <div class="form-group">
          <input v-model="formLogin.email" type="email" style="background:#F2F2F2"
            class="form-control border-top-0 border-left-0 border-right-0 shadow-none"
            placeholder="Enter your email adress">
        </div>
        <div class="form-group">
          <input v-model="formLogin.password" type="password" style="background:#F2F2F2"
            class="form-control bg-none border-top-0 border-left-0 border-right-0 shadow-none" placeholder="Password">
        </div>
        <router-link class="brown" to="/">Forgot password?</router-link>
        <div class="text-center">
          <button type="submit" class="btn btn-brown font-poppins w-100 px-4 py-3"
            style="border-radius:10px">Login</button>
          <div class="row my-2">
            <div class="col-3">
              <hr style="mb-0">
            </div>
            <div class="col-6 my-auto">
              <p class="text-secondary mb-0">or login with</p>
            </div>
            <div class="col-3">
              <hr style="mb-0">
            </div>
          </div>
          <button type="button" class="btn btn-light bg-white text-dark font-poppins w-100 px-4 py-3"
            style="border-radius:10px">
            <p class="mb-0"><img src="https://img-authors.flaticon.com/google.jpg" style="height:30px" alt="">Login With
              Google</p>
          </button>
        </div>
    <p class="text-center mt-3">Don't Have an account? <span class="brown" @click="linkTo('signup')">Sign up</span></p>
      </form>
  </div>
</template>
<script>
import { mixins } from '../helpers/mixin'
import { mapActions } from 'vuex'
export default {
  mixins: [mixins],
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actionLogin: 'auth/login'
    }),
    onLogin () {
      this.swalLoading('Login...')
      const dataLogin = {
        email: this.formLogin.email,
        password: this.formLogin.password
      }
      this.actionLogin(dataLogin)
        .then((response) => {
          // console.log(response)
          if (response === 'Email Not Registered') {
            this.$swal.close()
            this.$swal('Email Not Registered', 'Please Check your Email ', 'error')
          } else if (response === 'Wrong Password') {
            this.$swal.close()
            this.$swal('Wrong Password', 'Please Check your Password ', 'error')
          } else {
            this.$swal.close()
            this.$swal('Login Success', ' ', 'success')
            this.$router.push('/product')
          }
        })
        .catch((err) => {
          this.$swal.close()
          console.log(err)
        })
      // this.$router.push('/')
    },
    onGoogle () {
      this.swalAlert('Comming Soon', 'You will be able to signin with your google account!', 'info')
    }
  }
}
</script>
