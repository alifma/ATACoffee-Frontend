<template>
  <div>
    <!-- from signup -->
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
                    <button @click="linkTo('signup')" class="btn btn-link mr-4 bt-login-web">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <form action="" @submit.prevent="loginForm()">
                  <div class="row pt-3" style="height:100vh">
                    <div class="col-2"></div>
                    <div class="col-8 my-auto">
                      <h2 class="brown font-weight-bold font-rubik text-center mb-0">Login</h2>
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
                      <router-link to="/" class="brown font-weight-bold font-rubik">Forgot password?</router-link>
                      <button type="submit" class="w-100 mt-3 shadow btn btn-warning brown border-0"
                        style="background:#FFC107;border-radius:20px;height:60px;font-size:20px">Login</button>
                      <button @click="loginGoogle()" class="w-100 my-3 btn-light shadow btn border-0"
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
    <!-- end frorm signup -->
    <!-- box member card -->
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
import { mapActions } from 'vuex'
import componentFooter from '../components/footers'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
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
    ...mapActions({
      actionGetProfile: 'auth/getProfile',
      actionLogin: 'auth/login'
    }),
    loginForm () {
      // alert('check console')
      this.swalLoading('Login...')
      const dataLogin = {
        email: this.formData.email,
        password: this.formData.password
      }
      this.actionLogin(dataLogin).then((response) => {
        // console.log(response)
        if (response === 'Email Not Registered') {
          this.swalLoadingClose()
          this.$swal('Email Not Registered', 'Please Check your Email ', 'error')
        } else if (response === 'Wrong Password') {
          this.swalLoadingClose()
          this.$swal('Wrong Password', 'Please Check your Password ', 'error')
        } else {
          this.actionGetProfile().then((res) => {
            this.swalLoadingClose()
            this.swalToast('success', 'Login Success!')
            this.$router.push('/product')
          })
        }
      })
      // this.$router.push('/')
    },
    gotoSigup () {
      this.$router.push('/signup')
    },
    loginGoogle () {
      this.$swal('Comming Soon', 'You will be able to login with your google account', 'info')
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
