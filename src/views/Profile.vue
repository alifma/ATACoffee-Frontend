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
              <img
                src="../assets/img/f-profile.png"
                class="img-f-profile mt-5"
                alt="foto profile"
              />
              <div class="card-body">
                <h5 class="card-title font-rubik" style="font-size: 2rem">
                  Zulaikha
                </h5>
                <h6
                  class="card-subtitle mb-2 text-muted font-rubik"
                  style="font-size: 0.8rem"
                >
                  zulaikha17@gmail.com
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
                    placeholder="zulaikha17@gmail.com"
                    id="email-contact"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formContact.mobilephone"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="(+62)813456782"
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
                    placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
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
                    v-model="formDetails.username"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    placeholder="Input user name"
                    id="name-detail"
                  />
                </div>
                <div class="col-md-5">
                  <input
                    v-model="formDetails.date"
                    class="font-poppins contacBorder w-100"
                    type="date"
                    id="date-detail"
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
                      v-model="formDetails.gender"
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
                      v-model="formDetails.gender"
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
                    v-model="formDetails.firstname"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    id="first-name-detail"
                    placeholder="Input frist name"
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
                    v-model="formDetails.lastname"
                    class="font-poppins contacBorder w-100"
                    type="text"
                    id="last-name-detail"
                    placeholder="Input last name"
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formContact: {
        email: '',
        mobilephone: '',
        address: ''
      },
      formDetails: {
        username: '',
        firstname: '',
        lastname: '',
        date: '',
        gender: ''
      }
    }
  },
  components: {
    cheader,
    cfooter
  },
  methods: {
    ...mapActions({
      signout: 'auth/logout',
      actionGetProfile: 'auth/getProfile'
    }),
    logout () {
      this.signout().then((response) => {
        if (response) {
          this.$router.push('/')
        }
      })
    },
    savechange () {
      alert('save change')
    },
    cancel () {
      alert('Cancel')
    },
    editPassword () {
      alert('Edit Password')
    },
    btnContact () {
      alert('form data contact')
      console.log(this.formContact)
    },
    btnDetails () {
      alert('form details contact')
      console.log(this.formDetails)
    }
  },
  mounted () {
    this.actionGetProfile()
      .then((response) => {
        this.formContact.email = response.email
        console.log(response)
        console.log(this.formDetails.email)
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
