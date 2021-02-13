<template>
  <div class="website">
    <cheader />
    <section class="body-profile">
      <div class="container">
        <div class="row">
          <div class="col mt-5 font-rubik">
            <h2 style="color: #fff; font-size: 2.2rem">User Profile</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mt-5">
            <div class="card-fotoprofile">
              <div v-if="getUserDetail.image === 'default.png'">
                <img
                  src="../assets/img/f-profile.png"
                  class="img-f-profile mt-5"
                  alt="foto profile"
                />
              </div>
              <div v-else>
                <img
                  :src="`http://52.91.116.102:3001/image/${getUserDetail.image}`"
                  class="img-f-profile mt-5"
                  alt="foto profile"
                />
              </div>
              <span @click="btnChangeFoto()" class="icon-edit-cupon post-img"
                ><i class="fas fa-pencil-alt"></i
              ></span>
              <div class="card-body">
                <div v-show="state === true">
                  <input
                    @change="processFile($event)"
                    type="file"
                    class="font-poppins w-70 ml-5 mb-n4"
                    style="font-size: 12px"
                  />
                </div>
                <div v-if="getUserDetail.username != null">
                  <h5 class="card-title font-rubik" style="font-size: 2rem">
                    {{ getUserDetail.username }}
                  </h5>
                </div>
                <div v-else>
                  <h5 class="card-title font-rubik" style="font-size: 2rem">
                    Username
                  </h5>
                </div>
                <h6
                  class="card-subtitle mb-2 text-muted font-rubik"
                  style="font-size: 0.8rem"
                >
                  {{ formContact.email }}
                </h6>
                <p class="card-text mt-5">Has been ordered 15 products</p>
              </div>
            </div>
          </div>
          <div class="col-md-9 mt-5">
            <div class="card-contact-profile w-100">
              <div class="row">
                <div class="col-md-10">
                  <h3
                    class="font-poppins font-weight-bold"
                    style="color: #4f5665; font-size: 25px"
                  >
                    Contacts
                  </h3>
                </div>
                <div class="col-md-2">
                  <span @click="btnContact()" class="icon-edit-cupon mt-n3 mr-2"
                    ><i class="fas fa-pencil-alt"></i
                  ></span>
                </div>
              </div>
              <!-- form contacts -->
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="font-poppins lb-contact" for="email-contact"
                    >Email adress :
                  </label>
                </div>
                <div class="col-md-6">
                  <label class="font-poppins lb-contact" for="mobile-contact"
                    >Mobile number :</label
                  >
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formContact.email"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="Edit your email"
                    id="email-contact"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formContact.handphone"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="Edit your mobile phone (+62)"
                    id="mobile-contact"
                  />
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-md-12">
                  <label class="font-poppins lb-contact" for="address-contact"
                    >Delivery adress :</label
                  >
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formContact.address"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="Edit your address"
                    id="address-contact"
                  />
                </div>
              </div>
              <!-- form contacts -->
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-8 mt-5">
            <div class="card-detail-profile w-100">
              <div class="row">
                <div class="col-md-10">
                  <h3
                    class="font-poppins font-weight-bold"
                    style="color: #4f5665; font-size: 25px"
                  >
                    Details
                  </h3>
                </div>
                <div class="col-md-2">
                  <span @click="btnDetails()" class="icon-edit-cupon mt-n3 mr-2"
                    ><i class="fas fa-pencil-alt"></i
                  ></span>
                </div>
              </div>
              <!-- form details -->
              <div class="row mt-3">
                <div class="col-md-7">
                  <label class="font-poppins lb-contact" for="name-detail"
                    >Display name :</label
                  >
                </div>
                <div class="col-md-5">
                  <label class="font-poppins lb-contact" for="date-detail"
                    >DD/MM/YY</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-md-7">
                  <input
                    v-model="formContact.username"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="Edit user name"
                    id="name-detail"
                  />
                </div>
                <div class="col-md-5">
                  <input
                    v-model="formContact.lahir"
                    type="date"
                    class="font-poppins contacBorder w-100"
                    id="date-detail"
                    style="background: #fff"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-7">
                  <label class="font-poppins lb-contact" for="first-name-detail"
                    >First name :</label
                  >
                </div>
                <!-- radio -->
                <div class="col-md-5">
                  <div class="form-check">
                    <input
                      v-model="formContact.gender"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="male"
                      value="Male"
                      checked
                    />
                    <label class="form-check-label" for="male"> Male </label>
                  </div>
                  <div class="form-check">
                    <input
                      v-model="formContact.gender"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="female"
                      value="Female"
                      checked
                    />
                    <label class="form-check-label" for="female">
                      female
                    </label>
                  </div>
                </div>
                <!-- end radio -->
              </div>
              <div class="row">
                <div class="col-md-7">
                  <input
                    v-model="formContact.firstname"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    id="first-name-detail"
                    placeholder="Edit frist name"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-7">
                  <label class="font-poppins lb-contact" for="last-name-detail"
                    >Last name :</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    v-model="formContact.lastname"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    id="last-name-detail"
                    placeholder="Edit last name"
                  />
                </div>
              </div>
              <!-- end form details -->
            </div>
          </div>
          <!-- button -->
          <div class="col-md-4 mt-5">
            <div class="row text-xl-center">
              <div class="col-12">
                <h3
                  class="font-poppins font-weight-bold"
                  style="color: #fff; font-size: 25px"
                >
                  Do you want to save the change?
                </h3>
              </div>
              <div class="col-12">
                <button
                  @click="savechange()"
                  class="btn-brown p-3 w-100 mt-4"
                  style="border-radius: 15px; float: right; border: none"
                >
                  Save Change
                </button>
              </div>
              <div class="col-12">
                <button
                  @click="cancel()"
                  class="btn btn-warning font-poppins font-weight-bold p-3 w-100 mt-3"
                  style="
                    border-radius: 15px;
                    border: none;
                    font-size: 18px;
                    color: #6a4029;
                  "
                >
                  cancel
                </button>
              </div>
              <div class="col-12">
                <button
                  @click="editPassword()"
                  class="btn btn-light font-poppins font-weight-bold p-3 w-100 mt-3"
                  style="
                    border-radius: 15px;
                    border: none;
                    text-align: left;
                    font-size: 18px;
                    color: #6a4029;
                  "
                >
                  Edit Password
                  <span class="ico-bt-right"
                    ><i class="fas fa-chevron-right"></i
                  ></span>
                </button>
              </div>
              <div class="col-12">
                <button
                  @click="logout()"
                  class="btn btn-light font-poppins font-weight-bold p-3 w-100 mt-3"
                  style="
                    border-radius: 15px;
                    border: none;
                    text-align: left;
                    font-size: 18px;
                    color: #6a4029;
                  "
                >
                  Log out
                  <span class="ico-bt-right"
                    ><i class="fas fa-chevron-right"></i
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <!-- end button -->
        </div>
      </div>
    </section>
    <cfooter />
  </div>
</template>
<script>
import cheader from '../components/headers'
import cfooter from '../components/footers'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      formContact: {
        username: '',
        firstname: '',
        lastname: '',
        handphone: '',
        gender: '',
        address: '',
        lahir: '',
        image: 'defaultUser.png',
        email: ''
      },
      state: false
    }
  },
  components: {
    cheader,
    cfooter
  },
  computed: {
    ...mapGetters({
      getUserID: 'auth/getUserID',
      getUserDetail: 'auth/getUserDetail'
    })
  },
  methods: {
    ...mapActions({
      signout: 'auth/logout',
      actionGetProfile: 'auth/getProfile',
      actionPostProfile: 'auth/postProfile'
    }),
    logout () {
      this.signout().then((response) => {
        if (response) {
          this.$router.push('/')
        }
      })
    },
    btnChangeFoto () {
      this.state = !this.state
    },
    processFile (el) {
      this.formContact.image = el.target.files[0]
    },
    savechange () {
      // console.log(this.formContact)
      const fd = new FormData()
      fd.append('name', `${this.formContact.firstname} ${this.formContact.lastname}`)
      fd.append('username', this.formContact.username)
      fd.append('firstname', this.formContact.firstname)
      fd.append('lastname', this.formContact.lastname)
      fd.append('handphone', this.formContact.handphone)
      fd.append('gender', this.formContact.gender)
      fd.append('address', this.formContact.address)
      fd.append('lahir', this.formContact.lahir)
      fd.append('image', this.formContact.image)
      fd.append('email', this.formContact.email)
      this.actionPostProfile(fd).then((response) => {
        this.actionGetProfile()
        this.state = false
        this.$swal(response, '', 'success')
      }).catch('')
      // this.$router.push('/product')
    },
    cancel () {
      this.actionGetProfile().then((response) => {
        this.formContact.email = response.email
        this.formContact.handphone = response.handphone
        this.formContact.address = response.address
        this.formContact.username = response.username
        this.formContact.firstname = response.firstname
        this.formContact.lastname = response.lastname
        if (response.lahir != null) {
          this.formContact.lahir = response.lahir.substring(0, 10)
        } else {
          this.formContact.lahir = ''
        }
        this.formContact.gender = response.gender
        this.formContact.image = response.image
      })
      this.$swal('Cancel', '', 'info')
    },
    editPassword () {
      alert('Edit Password')
    },
    btnContact () {
      alert('form data contact')
    },
    btnDetails () {
      alert('form details contact')
    }
  },
  mounted () {
    this.actionGetProfile()
      .then((response) => {
        this.formContact.email = response.email
        this.formContact.handphone = response.handphone
        this.formContact.address = response.address
        this.formContact.username = response.username
        this.formContact.firstname = response.firstname
        this.formContact.lastname = response.lastname
        if (response.lahir != null) {
          this.formContact.lahir = response.lahir.substring(0, 10)
        } else {
          this.formContact.lahir = ''
        }
        this.formContact.gender = response.gender
        this.formContact.image = response.image
      })
  }
}
</script>
<style scoped>
section.body-profile {
  width: 100%;
  height: 1150px;
  background-image: url("../assets/img/bg-Profile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

span.post-img {
  margin-right: 60px;
  margin-top: 100px;
}

div.card-fotoprofile {
  width: 18rem;
  height: 21rem;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  border-bottom: 10px solid #6a4029;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
}

img.img-f-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

div.card-contact-profile {
  background: #fff;
  padding: 20px 30px;
  margin-left: 40px;
  height: 21rem;
  border-radius: 10px;
  border-bottom: 10px solid #6a4029;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
}

label.lb-contact {
  font-weight: 500;
  font-size: 20px;
  color: #9f9f9f;
}

div.card-detail-profile {
  background: #fff;
  padding: 20px 30px;
  height: 25rem;
  border-radius: 10px;
  border-bottom: 10px solid #6a4029;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
}

span.ico-bt-right {
  position: absolute;
  top: 32px;
  right: 35px;
}
</style>
