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
        <!-- ganti router link -->
        <a class="forgot-pass" href="">Forgot password?</a>
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
export default {
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
        alert('Oops! Isi dahulu ya!')
      } else {
        console.log(this.formLogin)
        this.$router.push('/')
      }
    },
    onGoogle () {
      alert('google')
    }
  }
}
</script>
