<template>
  <div>
    <!-- from signup -->
    <section class="form-signup-web">
      <div class="container-signupweb">
        <div class="row">
          <div class="col-md-5">
            <img
              src="../assets/img/bgLogin.png"
              alt="bgLogin"
              class="img-signup-web"
            />
          </div>
          <div class="col-md-7">
            <!-- bar -->
            <div class="row mt-5">
              <div class="col-md-4">
                <img
                  src="../assets/img/icoWeb.png"
                  alt="iconWeb"
                  class="img-footer"
                />
                <h3 class="title-footer">Coffee Shop</h3>
              </div>
              <div class="col-md-7">
                <button
                  @click="gotoSigup()"
                  class="btn btn-link mr-4 bt-login-web"
                >
                  Sign Up
                </button>
              </div>
              <div class="col-md-1"></div>
            </div>
            <!-- end bar -->
            <!-- form data -->
            <form action="" @submit.prevent="loginForm()">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title-signup-form">Login</h2>
                </div>
                <div class="col-md-12">
                  <label class="lb-signup-email" for="email-form"
                    >Email Address :
                  </label>
                </div>
                <div class="col-md-12">
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    class="form-signup-email"
                    placeholder="Enter your email adress"
                    id="email-form"
                  />
                </div>
                <div class="col-md-12">
                  <label class="lb-signup-pass" for="password-form"
                    >Password :
                  </label>
                </div>
                <div class="col-md-12">
                  <input
                    v-model="formData.password"
                    type="password"
                    required
                    class="form-signup-pass"
                    placeholder="Enter your password"
                    id="password-form"
                  />
                </div>
                <div class="col-md-12">
                  <router-link class="forgot-pass-web" to="/"
                    >Forgot password?</router-link
                  >
                </div>
                <div class="col-md-12">
                  <button class="btn btn-warning btn-login-web">Login</button>
                </div>
              </div>
            </form>
            <!-- end form data -->
            <div class="col-md-12">
              <button
                @click="loginGoogle()"
                class="btn btn-light bt-login-google"
              >
                <img
                  src="../assets/img/google.png"
                  alt="google"
                  class="img-google mr-2"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end frorm signup -->
    <!-- box member card -->
    <div class="container">
      <section class="member-card">
        <div class="row">
          <div class="col-md-6">
            <h3 class="title-member-card">Get your member card now!</h3>
            <p class="info-member-card">
              Let's join with our member and enjoy the deals.
            </p>
          </div>
          <div class="col-md-6">
            <button @click="createBtn()" class="btn btn-create-member">
              Create Now
            </button>
          </div>
        </div>
      </section>
    </div>
    <!-- end box member card -->
    <!-- footer -->
    <componentFooter />
  </div>
</template>
<script>
import componentFooter from '../components/footers'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    componentFooter
  },
  methods: {
    gotoSigup () {
      this.$router.push('/signup')
    },
    loginForm () {
      alert('check console')
      console.log(this.formData)
      this.$router.push('/')
    },
    loginGoogle () {
      alert('Login Google')
    },
    createBtn () {
      alert('createNow')
    }
  }
}
</script>
