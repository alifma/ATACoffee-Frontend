<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins"></p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container">
      <h1 class="font-poppins font-weight-bold mb-3">My profile</h1>
      <p class="brown float-right font-poppins">edit</p>
      <p class="font-weight-bold font-poppins">Your Information</p>
      <div class="card" style="border-radius:15px">
        <div class="card-body">
          <div class="row">
          <div class="col-3 text-center">
            <img :src="`${webURL}/image/${getUserDetail.image === 'default.png' ? 'default.png' : getUserDetail.image === undefined ? 'default.png' : getUserDetail.image }`" class="" style="height:80px;width:80px;object-fit:cover;border-radius:50%" alt="foto profile" />
          </div>
          <div class="col-9 my-auto pr-0">
            <p class="mb-0 font-weight-bold font-poppins">{{getUserDetail.username === null ? 'Username Not Set, Please Edit Your Profile' : getUserDetail.username}}</p>
            <p class="mb-0 font-poppins text-secondary">{{getUserDetail.email}}</p>
            <p class="mb-0 font-poppins text-secondary">{{getUserDetail.handphone}}</p>
            <p class="mb-0 font-poppins text-secondary">{{getUserDetail.address}}</p>
          </div>
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
    }
  },
  mounted () {
    this.mountedProfile()
  }

}
</script>

<style>

</style>
