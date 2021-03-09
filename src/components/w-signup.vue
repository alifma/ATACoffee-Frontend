<template>
  <div>
    <div class="container-fluid" style="height:100%">
      <div class="row" style="height:100%">
        <div class="col-5"
          style="background-image: url('https://i.ibb.co/x875dQk/bgLogin.png');background-repeat: no-repeat;background-position: center;background-size:cover;">
        </div>
        <div class="col-7">
          <div class="container">
            <div class="row">
              <div class="col-12 py-4">
                <div class="row">
                  <div @click="gotoHome()" style="cursor:pointer" class="col-6 my-auto">
                    <img src="../assets/img/icoWeb.png" alt="iconWeb" class="img-footer" />
                    <h3 class="title-footer">Coffee Shop</h3>
                  </div>
                  <div class="col-6 my-auto text-right">
                    <button @click="linkTo('login')" class="btn btn-link mr-4 bt-login-web">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <form action="" @submit.prevent="sigupForm()">
                  <div class="row pt-3" style="height:100vh">
                    <div class="col-2"></div>
                    <div class="col-8 my-auto">
                      <h2 class="brown font-weight-bold font-rubik text-center mb-0">Sign Up</h2>
                      <div class="form-group">
                        <label class="font-rubik font-weight-bold text-secondary">Email Address
                          :</label>
                        <input v-model="formData.email" type="email" class="form-control"
                          style="border-radius:15px; height: 55px;border: 1px solid #4F5665;box-sizing:border-box"
                          placeholder="Enter your email adress">
                      </div>
                      <div class="form-group">
                        <label class="font-rubik font-weight-bold text-secondary">Password
                          :</label>
                        <input v-model="formData.password" type="password" class="form-control"
                          style="border-radius:15px; height: 55px;border: 1px solid #4F5665;box-sizing:border-box"
                          placeholder="Enter your email adress">
                      </div>
                      <div class="form-group">
                        <label class="font-rubik font-weight-bold text-secondary">Phone Number :
                          :</label>
                        <input v-model="formData.handphone" type="text" class="form-control"
                          style="border-radius:15px; height: 55px;border: 1px solid #4F5665;box-sizing:border-box"
                          placeholder="Enter your phone number (+62)">
                      </div>
                      <router-link to="/" class="brown font-weight-bold font-rubik">Forgot password?</router-link>
                      <button type="submit" class="w-100 mt-3 shadow btn btn-warning brown border-0"
                        style="background:#FFC107;border-radius:20px;height:60px;font-size:20px">Login</button>
                      <button @click="signupGoogle()" class="w-100 my-3 btn-light shadow btn border-0"
                        style="border-radius:20px;height:60px;font-size:20px"> <img src="../assets/img/google.png"
                          alt="google" class="img-google mr-2" />Login With Google</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- from signup -->
    <!-- <section class="form-signup-web">
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
    </section> -->
    <!-- end frorm signup -->
    <!-- box member card -->
    <!-- <div class="container">
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
    </div> -->
    <div class="container pt-5">
      <div class="card shadow-lg" style="border-radius:20px">
        <div class="card-body p-5">
          <div class="row">
            <div class="col-12 col-lg-6 col-md-12 text-center text-lg-left text-md-center">
              <h2 class="font-rubik font-weight-bold">Get your member card now!</h2>
              <p class="info-promo mt-3">Let's join with our member and enjoy the deals.</p>
            </div>
            <div class="col-12 col-lg-6 col-md-12 text-center text-md-center text-lg-right">
              <button @click="promoBtn()" class="btn btn-promo">Create now</button>
            </div>
          </div>
        </div>
      </div>
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
