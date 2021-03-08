<template>
  <div style="height:100vh;background:#F2F2F2">
    <div v-if="!showEdit">
      <div class="row mx-0 my-0 p-4" style="height:10vh">
        <div class="col-2">
          <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
        </div>
        <div class="col-8 text-center">
          <p class="font-weight-bold font-poppins"></p>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="container" style="height:80vh;overflow-y:scroll">
        <h1 class="font-poppins font-weight-bold mb-3">My profile</h1>
        <p class="brown float-right font-poppins" @click="toggleEdit()">edit</p>
        <p class="font-weight-bold font-poppins">Your Information</p>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body">
            <div class="row">
              <div class="col-3 my-auto text-center">
                <img
                  :src="`${webURL}/image/${getUserDetail.image === 'default.png' ? 'default.png' : getUserDetail.image === undefined ? 'default.png' : getUserDetail.image }`"
                  class="" style="height:80px;width:80px;object-fit:cover;border-radius:50%" alt="foto profile" />
              </div>
              <div class="col-9 my-auto pr-0">
                <p class="mb-0 font-weight-bold font-poppins">
                  {{getUserDetail.username === null ? 'Username Not Set, Please Edit Your Profile' : getUserDetail.username}}
                </p>
                <p class="mb-0 font-poppins text-secondary">{{getUserDetail.email}}</p>
                <p class="mb-0 font-poppins text-secondary">{{getUserDetail.handphone}}</p>
                <p class="mb-0 font-poppins text-secondary">{{getUserDetail.address}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body">
            <div class="row">
              <div class="col-10 my-auto">
                <h5 @click="linkTo('orders')" class="mb-0 font-poppins font-weight-bold">Order History</h5>
              </div>
              <div class="col-2 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"><i class="fas fa-angle-right"></i></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body">
            <div class="row">
              <div class="col-10 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold">Edit Password</h5>
              </div>
              <div class="col-2 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"><i class="fas fa-angle-right"></i></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body">
            <div class="row">
              <div class="col-10 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"
                  @click="swalAlert('FAQ', 'This Application developed By ATA-Team', 'info')">FAQ</h5>
              </div>
              <div class="col-2 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"><i class="fas fa-angle-right"></i></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="border-radius:15px">
          <div class="card-body">
            <div class="row">
              <div class="col-10 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"
                  @click="swalAlert('Help', 'You can check this appplication documentation on our github', 'info')">Help
                </h5>
              </div>
              <div class="col-2 my-auto">
                <h5 class="mb-0 font-poppins font-weight-bold"><i class="fas fa-angle-right"></i></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="height:10vh">
        <div class="row">
          <div class="col-12 my-auto">
            <button @click="linkTo('product')" style="font-size:20px;border-radius:25px;height:8vh"
              class="w-100 btn btn-brown shadow-lg ">Save Change</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row mx-0 my-0 p-4" style="height:10vh">
        <div class="col-2">
          <p class="mb-0 brown" @click="toggleEdit()"><i class="fas fa-angle-left"></i></p>
        </div>
        <div class="col-8 text-center">
          <p class="font-weight-bold font-poppins">Edit Profile</p>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="container" style="height:80vh;overflow-y:scroll">
        <div class="row">
          <div class="col-12 text-center my-auto">
            <img
              :src="`${webURL}/image/${getUserDetail.image === 'default.png' ? 'default.png' : getUserDetail.image === undefined ? 'default.png' : getUserDetail.image }`"
              class="" style="height:20vh;width:20vh;object-fit:cover;border-radius:50%" alt="foto profile" />
              <input @change="processFile($event)"  type="file" class="form-control px-0 border-top-0 border-right-0 border-left-0 px-5"
                style="background:#F2f2f2" i>
          </div>
          <div class="col-12 pt-5">
            <div class="form-group">
              <label class="text-secondary font-poppins">Name</label>
              <input v-model="formContact.username"  type="text" class="form-control px-0 border-top-0 border-right-0 border-left-0"
                style="background:#F2f2f2" i>
            </div>
          </div>
          <div class="col-12 my-3">
            <div class="container">
              <div class="row">
                <div class="form-check col-6">
                  <input v-model="formContact.gender" class="form-check-input" type="radio" name="exampleRadios"
                    id="male" value="Male" checked />
                  <label class="form-check-label font-poppins text-secondary" for="male"> Male </label>
                </div>
                <div class="form-check col-6">
                  <input v-model="formContact.gender" class="form-check-input" type="radio" name="exampleRadios"
                    id="female" value="Female" checked />
                  <label class="form-check-label font-poppins text-secondary" for="female">
                    female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group">
              <label class="text-secondary font-poppins">Email Address</label>
              <input  v-model="formContact.email" type="email" class="form-control px-0 border-top-0 border-right-0 border-left-0"
                style="background:#F2f2f2" i>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group">
              <label class="text-secondary font-poppins">Handphone</label>
              <input v-model="formContact.handphone" type="email" class="form-control px-0 border-top-0 border-right-0 border-left-0"
                style="background:#F2f2f2" i>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group">
              <label class="text-secondary font-poppins">Date of Birth</label>
              <input v-model="formContact.lahir" type="date" class="form-control px-0 border-top-0 border-right-0 border-left-0"
                style="background:#F2f2f2" i>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group">
              <label class="text-secondary font-poppins">Delivery Address</label>
              <input v-model="formContact.address" type="text" class="form-control px-0 border-top-0 border-right-0 border-left-0"
                style="background:#F2f2f2" i>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style="height:10vh">
        <div class="row">
          <div class="col-12 my-auto">
            <button @click="savechange()" style="font-size:20px;border-radius:25px;height:8vh"
              class="w-100 btn btn-brown shadow-lg ">Save Change</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      showEdit: false,
      formContact: {
        username: '',
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
  computed: {
    ...mapGetters({
      pagination: 'orders/getAllOrdersPagination',
      getUserID: 'auth/getUserID',
      getUserDetail: 'auth/getUserDetail'
    })
  },
  methods: {
    ...mapActions({
      signout: 'auth/logout',
      actionGetProfile: 'auth/getProfile',
      actionPostProfile: 'auth/postProfile',
      getOrders: 'orders/actionGetAllOrders'
    }),
    savechange () {
      // console.log(this.formContact)
      this.swalLoading('Updating Data')
      const fd = new FormData()
      fd.append('name', `${this.formContact.firstname} ${this.formContact.lastname}`)
      fd.append('username', this.formContact.username)
      fd.append('handphone', this.formContact.handphone)
      fd.append('gender', this.formContact.gender)
      fd.append('address', this.formContact.address)
      fd.append('lahir', this.formContact.lahir)
      fd.append('image', this.formContact.image)
      fd.append('email', this.formContact.email)
      this.actionPostProfile(fd).then((response) => {
        if (response.code !== 400) {
          this.swalLoadingClose()
          this.actionGetProfile()
          this.state = false
          this.showEdit = false
          this.swalAlert('Update Profile Success', '', 'success')
        } else {
          this.swalLoadingClose()
          this.swalAlert('Update Profile Failed', response.msg, 'error')
        }
      }).catch((err) => {
        this.swalLoadingClose()
        console.log(err)
      })
    },
    mountedProfile () {
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
    },
    toggleEdit () {
      this.showEdit = !this.showEdit
    },
    processFile (el) {
      this.formContact.image = el.target.files[0]
    }
  },
  mounted () {
    this.mountedProfile()
  }

}
</script>

<style>

</style>
