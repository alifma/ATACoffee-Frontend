<template>
  <div class="container-signin">
    <section class="m-sign-form">
      <h2 class="title-signin-form">Log<br />in</h2>
      <img class="img-m-signin" src="../assets/img/img4.png" alt="img4" />
      <form action="" @submit.prevent="onLogin()">
        <input
          v-model="formLogin.email"
          type="text"
          placeholder="Enter your email adress"
          class="login-m-email"
        />
        <input
          v-model="formLogin.password"
          type="password"
          placeholder="Enter your password"
          class="login-m-password"
        />
        <hr class="hr-line-l" />
        <router-link class="forgot-pass" to="/">Forgot password?</router-link>
        <hr class="hr-line-r" />
        <button type="submit" class="btn btn-login-form">Login</button>
      </form>
      <p class="or-login">or login in with</p>
      <button @click="onGoogle()" class="btn btn-login-google">
        <img src="../assets/img/google.png" alt="google" /> Login with Google
      </button>
    </section>
  </div>
</template>
<script>
import { mixins } from '../helpers/mixin'
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
    onLogin () {
      if (!this.formLogin.email || !this.formLogin.password) {
        this.swalAlert('Input Failed', 'Please Fill All Required', 'error')
      } else {
        this.$router.push('/')
      }
    },
    onGoogle () {
      this.swalAlert('Comming Soon', 'You will be able to signin with your google account!', 'info')
    }
  }
}
</script>
