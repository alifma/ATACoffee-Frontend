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
              style="max-width: 800px; width: 100%; height: 830px"
            />
          </div>
          <div class="col-md-7 col-lg-7">
            <!-- bar -->
            <div class="row mt-5">
              <div @click="gotoHome()" class="col-md-4">
                <img
                  src="../assets/img/icoWeb.png"
                  alt="iconWeb"
                  class="img-footer"
                />
                <h3 class="title-footer">Coffee Shop</h3>
              </div>
              <div class="col-md-7">
                <button @click="login()" class="btn btn-link mr-4 bt-login-web">
                  Login
                </button>
              </div>
              <div class="col-md-1"></div>
            </div>
            <!-- end bar -->
            <!-- form data -->
            <form action="" @submit.prevent="sigupForm()">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title-signup-form">Sign Up</h2>
                </div>
                <div class="col-md-12">
                  <label class="lb-signup-email" for="email-form"
                    >Email Address :
                  </label>
                </div>
                <div class="col-md-12 col-lg-12">
                  <input
                    v-model="formData.email"
                    type="email"
                    class="form-signup-email"
                    placeholder="Enter your email adress"
                    required
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
                  <label class="lb-signup-phone" for="phone-form"
                    >Phone Number :
                  </label>
                </div>
                <div class="col-md-12">
                  <input
                    v-model="formData.handphone"
                    type="text"
                    required
                    class="form-signup-phone"
                    placeholder="Enter your phone number (+62)"
                    id="phone-form"
                  />
                </div>
                <div class="col-md-12">
                  <button class="btn btn-warning btn-signup-web">Signup</button>
                </div>
              </div>
            </form>
            <!-- end form data -->
            <div class="col-md-12">
              <button @click="signupGoogle()" class="btn btn-light bt-google">
                <img
                  src="../assets/img/google.png"
                  alt="google"
                  class="img-google mr-2"
                />
                Sign up with Google
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
          <div class="col-6">
            <h3 class="title-member-card">Get your member card now!</h3>
            <p class="info-member-card">
              Let's join with our member and enjoy the deals.
            </p>
          </div>
          <div class="col-6 bg-primary">
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
import { mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
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
  components: {
    componentFooter
  },
  methods: {
    ...mapActions({
      actionregister: 'register/actionRegister'
    }),
    login () {
      this.$router.push('/login')
    },
    sigupForm () {
      if (this.formData.email !== '' && this.formData.handphone !== '' && this.formData.password !== '') {
        this.swalLoading('Signup...')
        this.actionregister(this.formData).then((response) => {
          // console.log(response)
          if (response === 'Email Exist') {
            this.$swal.close()
            this.$swal('Email registed', 'Please Change Email ', 'error')
          } else {
            this.$swal.close()
            this.$swal('Register Email Success', 'You can Login Now ', 'success')
            this.$router.push('/login')
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.swalAlert('Signup error', 'Please fill all required!', 'error')
      }
    },
    signupGoogle () {
      this.swalAlert('Comming Soon', 'You will be able to signup with yor google Account', 'info')
    },
    createBtn () {
      window.scrollTo(0, 0)
    },
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>
