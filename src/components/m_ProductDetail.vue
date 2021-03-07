<template>
  <div style="background:#F2F2F2;height:100vh">
    <div v-if="!showCheckout">
      <div class="row mx-0 my-0 p-4" style="height:10vh">
        <div class="col-3">
          <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
        </div>
        <div class="col-9">
          <p class="text-right mb-0 brown" @click="toggleCheckout()"><i class="fas fa-shopping-cart"></i></p>
        </div>
      </div>
      <div class="row mx-0 my-0" style="height:75vh">
        <div class="col-12 text-center" style="height:38vh">
          <img class="img-fluid shadow text-center"
            style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 25vh;width:25vh"
            :src="`${webURL}/image/${detail.image}`" alt="">
          <div class="mt-4">
            <h2 class="font-poppins font-weight-bolder">{{detail.name}}</h2>
            <h5 class="font-poppins font-weight-light brown">IDR {{formatPrice(detail.price)}}</h5>
          </div>
        </div>
        <div class="col-12" style="height:37vh;overflow-y:scroll">
          <div class="container">
            <h5 class="font-weight-bold font-poppins mt-3">Delivery Info</h5>
            <div>
              <p v-if="detail.hourEnd !== null && detail.hourStart !== null"
                class="font-poppins text-justify text-secondary">
                Delivery only on <b>Monday </b> to
                <b>
                  friday</b> at
                <b>{{detail.hourStart}}</b> to <b>{{detail.hourEnd}}</b></p>
              <p v-else-if="detail.hourEnd !== null" class="font-poppins text-justify text-secondary">
                Delivery only on
                <b>Monday </b> to <b> friday</b> start from
                <b>{{detail.hourStart}}</b></p>
              <p v-else class="font-poppins text-justify text-secondary">Available
                <b>Everytime!</b></p>
            </div>
            <h5 class="font-weight-bold font-poppins mt-3">Description</h5>
            <p class="font-poppins text-secondary" style="text-align:justify">{{detail.desc}}</p>
            <div v-if="userAccess != null" class="row">
              <div class="col text-center">
                <h5 class="font-weight-bolder font-poppins">Choose a size</h5>
                <div>
                  <div>
                    <b-form-group>
                      <b-form-radio-group v-model="cartHolder.size" :options="detail.size" buttons
                        button-variant="outline-warning"></b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-0 my-0" style="height:15vh;overflow-y:scroll">
        <div class="col-md-5 col-lg-5 text-center">
          <div v-if="userAccess != null" style="width:75%" class="mx-auto d-flex flex-column">
            <button @click="addToCart()" style="font-size:20px;border-radius:25px;height:60px"
              class="btn mb-3 btn-brown ">Add to Cart</button>
            <button v-if="userAccess == 1" @click="editProduct()" style="font-size:20px;border-radius:25px;height:60px"
              class="btn mb-3 btn-yellow ">Edit Product</button>
            <button v-if="userAccess == 1" @click="$bvModal.show('deleteModal')"
              style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-black ">Delete Menu</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row mx-0 my-0 p-4" style="height:10vh">
        <div class="col-3">
          <p class="mb-0 brown" @click="toggleCheckout()"><i class="fas fa-angle-left"></i></p>
        </div>
      </div>
      <div class="container">
        <div v-if="userAccess != null" class="container my-4">
          <div class="row">
            <div class="col-12">
              <div class="card shadow-lg" style="border-radius:25px">
                <!-- Jika ada itemnya -->
                <div v-if="fixCart.length > 0" class="row no-gutters" style="height:20vh">
                  <div class="col-md-4 col-4 col-lg-4 text-center my-auto">
                    <img :src="`${webURL}/image/${detail.image}`"
                      style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 10vh;width:10vh"
                      class="card-img product-rounded">
                  </div>
                  <div class="col-md-8 col-8 col-lg-8 my-auto">
                    <div class="card-body">
                      <h5 class="mb-0 card-title font-weight-bold">{{detail.name.toUpperCase()}}</h5>
                      <span @click="clearFixCart()" class="icon-edit-cupon" style="height:30px;width:30px"><i
                          class="fas fa-times"></i></span>
                      <div style="overflow-y:scroll">
                        <p class="card-text mb-0" v-for="(item, index) in fixCart" :key="index">x{{item.amount}}
                          ({{item.size}})</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Jika Tidak ada itemnya -->
                <div v-else style="height:20vh" class="p-4 d-flex justify-content-center">
                  <h5 class="text-center font-poppins font-weight-bold mb-0 my-auto">Click product size to add product
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-center">
              <h5 class="font-weight-bolder font-poppins mb-4">Choose Delivery Methods</h5>
              <div class="row">
                <div class="col">
                  <b-form-group>
                    <b-form-radio-group v-model="cartHolder.orderType" :options="detail.delivery" buttons>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <form class="form-inline ">
                    <div class="form-group mx-auto">
                      <label class="my-1 mr-2 font-poppins">Order Details : </label>
                      <input v-model="cartHolder.orderDetails" type="text" class="form-control border-none w-100"
                        style="border-radius:15px" placeholder="Enter your order details">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
               <button @click="buildCheckoutData()" style="font-size:20px;border-radius:25px;"
            class="text-dark w-100 h-100 btn mb-3 btn-yellow shadow-lg ">CHECKOUT</button>
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
      showCheckout: false,
      id: this.$route.params.id,
      cartHolder: {
        orderType: '',
        orderDetails: '',
        size: ''
      },
      fixCart: []
    }
  },
  computed: {
    ...mapGetters({
      detail: 'products/detail',
      userID: 'auth/getUserID',
      userName: 'auth/getUserName',
      userAccess: 'auth/getAccess',
      userDetail: 'auth/getUserDetail'

    })
  },
  methods: {
    ...mapActions({
      getDetailAction: 'products/getDetail',
      deleteAction: 'products/deleteProduct',
      addCartAction: 'carts/addToCart',
      userProfile: 'auth/getProfile'
    }),
    editProduct () {
      this.$router.push(`/product/${this.id}/edit`)
    },
    deleteConfirm () {
      this.deleteAction(this.id)
        .then((res) => {
          this.$bvModal.hide('deleteModal')
          this.$swal('Delete Success', 'Product has been deleted', 'success')
          this.$router.push('/product')
        })
        .catch((err) => {
          this.$bvModal.hide('deleteModal')
          this.$swal('Delete failed', err.message, 'success')
        })
    },
    addToCart () {
      if (this.cartHolder.size.length === 0) {
        this.swalAlert('Please Select Size', '', 'error')
      } else {
        this.swalAlert('Added To Item Cart', 'Click cart icon on the corner to checkout this items', 'success')
        const buildItemCart = {
          itemName: this.detail.name,
          itemImage: this.detail.image,
          size: this.cartHolder.size,
          price: this.detail.price,
          amount: 1
        }
        const isInCart = this.fixCart.filter((i) => {
          return i.size === this.cartHolder.size
        })
        if (isInCart.length > 0) {
          isInCart[0].amount += 1
        } else {
          this.fixCart.push(buildItemCart)
        }
        this.cartHolder.size = ''
      }
    },
    clearFixCart () {
      this.fixCart = []
    },
    buildCheckoutData () {
      if (this.fixCart.length === 0) {
        this.showCheckout = false
        this.swalAlert('Checkout Error', 'Please add Item', 'error')
      } else if (!this.cartHolder.orderType || !this.cartHolder.orderDetails) {
        this.swalAlert('Checkout Error', 'You should choose delivery type and order details', 'error')
      } else {
        const checkoutData = this.fixCart.map((i) => ({
          userID: this.userID,
          userName: this.userName,
          itemName: i.itemName,
          itemImage: i.itemImage,
          size: i.size,
          amount: i.amount,
          price: i.price,
          orderType: this.cartHolder.orderType,
          orderDetails: this.cartHolder.orderDetails,
          orderPhone: this.userDetail.handphone
        }))
        this.addCartAction(checkoutData)
        this.fixCart = []
        this.cartHolder.orderType = ''
        this.cartHolder.orderDetails = ''
        this.cartHolder.size = ''
        this.showCheckout = false
        this.swalAlert('Success', 'This item is now on your cart', 'success')
      }
    },
    getDetails () {
      this.swalLoading('Preparing Data')
      this.getDetailAction(this.id)
        .then((res) => {
          this.swalLoadingClose()
          // console.log(res)
        })
        .catch((err) => {
          this.swalLoadingClose()
          console.log(err)
        })
    },
    toggleCheckout () {
      this.showCheckout = !this.showCheckout
    }
  },
  mounted () {
    this.getDetails()
    this.userProfile(this.userID)
  }
}
</script>

<style>

</style>
