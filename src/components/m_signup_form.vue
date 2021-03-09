<template>
  <div class="container" style="height:100vh;background:#f2f2f2">
    <div style="height:15vh"></div>
    <div class="px-3 text-center" style="height:40vh">
      <img src="https://i.ibb.co/txKrVcL/girl-chilling-exploring-on-the-phone-1.png" class="img-fluid" alt="">
    </div>
    <form action="" @submit.prevent="signupForm()" class="px-3 pt-5" style="height:45vh">
      <div class="form-group">
        <input v-model="formData.email" type="email" style="background:#F2F2F2"
          class="form-control border-top-0 border-left-0 border-right-0 shadow-none"
          placeholder="Enter your email adress">
      </div>
      <div class="form-group">
        <input v-model="formData.password" type="password" style="background:#F2F2F2"
          class="form-control border-top-0 border-left-0 border-right-0 shadow-none" placeholder="Enter your password">
      </div>
      <div class="form-group">
        <input v-model="formData.handphone" type="text" style="background:#F2F2F2"
          class="form-control border-top-0 border-left-0 border-right-0 shadow-none"
          placeholder="Enter your phone number">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-brown font-poppins w-100 px-4 py-3" style="border-radius:10px">Create
          Account</button>
      </div>
    <p class="text-center mt-3">Already Have an account? <span class="brown" @click="linkTo('login')">Login</span></p>
    </form>
    <!-- <section class="m-signup-form">
      <h2 class="title-signup-form">Sign Up</h2>
      <img
        class="img-signup-form"
        src="../assets/img/img3.png"
        alt="img3.png"
      />
      <form action="" @submit.prevent="onCreate()">
        <input
          v-model="formCreate.email"
          type="text"
          placeholder="Enter your email adress"
          class="form-m-email"
        />
        <input
          v-model="formCreate.password"
          type="password"
          placeholder="Enter your password"
          class="form-m-password"
        />
        <input
          v-model="formCreate.phone"
          type="text"
          placeholder="Enter your phone number (62)"
          class="form-m-phone"
        />
        <button type="submit" class="btn btn-create-account">
          Create Account
        </button>
      </form>
    </section> -->
  </div>
</template>
<script>
import { mixins } from '../helpers/mixin'
import { mapActions } from 'vuex'
export default {
  mixins: [mixins],
  data () {
    return {
      formData: {
        email: '',
        password: '',
        handphone: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actionregister: 'register/actionRegister'
    }),
    login () {
      this.$router.push('/login')
    },
    signupForm () {
      if (this.formData.email !== '' && this.formData.handphone !== '' && this.formData.password !== '') {
        this.swalLoading('Signup...')
        this.actionregister(this.formData).then((response) => {
          if (response === 'Email Exist') {
            this.$swal.close()
            this.$swal('Email already registered', 'Please Change Email ', 'error')
          } else {
            this.$swal.close()
            this.$swal('Register Email Success', 'You can Login Now ', 'success')
            this.$router.push('/login')
          }
        }).catch((error) => {
          this.$swal.close()
          console.log(error)
        })
      } else {
        this.swalAlert('Signup error', 'Please fill all required!', 'error')
      }
    }
  }
}
</script>
