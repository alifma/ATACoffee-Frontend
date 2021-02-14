<template>
  <div style="background:#dedede">
    <cHeader />
    <div class="container pt-4">
      <div id="breadcrumb-productDetails" class="d-inline">
        <router-link to="/product" class="mb-0 text-secondary font-rubik d-inline">Favorite & Promo</router-link>
        <router-link :to="`/product/${id}`" class="mb-0 font-weight-bold font-active font-rubik d-inline"> > {{detail.name}}</router-link>
      </div>
      <div>
        <div class="row py-4">
          <div class="col-md-5 col-lg-5 text-center">
            <img style="width:75%" class="product-rounded" :src="`${webURL}/image/${detail.image}`" alt="">
            <div class="mt-4">
              <h1 class="font-poppins font-weight-bolder">{{detail.name.toUpperCase()}}</h1>
              <h5 class="font-poppins font-weight-light">IDR {{formatPrice(detail.price)}}</h5>
            </div>
          </div>
          <div class=" col-md-7 col-lg-7">
            <div class="container h-100">
              <section class="info-product p-4">
                <div class="row p-4">
                  <div class="col">
                    <p v-if="detail.hourEnd !== null && detail.hourStart !== null"
                      class="font-poppins text-justify brown" style="font-size:20px">Delivery only on <b>Monday </b> to
                      <b>
                        friday</b> at
                      <b>{{detail.hourStart}}</b> to <b>{{detail.hourEnd}}</b></p>
                    <p v-else-if="detail.hourEnd !== null" class="font-poppins text-justify brown"
                      style="font-size:20px">Delivery only on
                      <b>Monday </b> to <b> friday</b> start from
                      <b>{{detail.hourStart}}</b></p>
                    <p v-else class="font-poppins text-justify brown" style="font-size:20px">Available
                      <b>Everytime!</b></p>
                    <p class="font-poppins brown" style="text-align:justify; font-size:20px;">{{detail.desc}}</p>
                  </div>
                </div>
                <div v-if="userAccess != null" class="row">
                  <div class="col text-center">
                    <h5 class="font-weight-bolder font-poppins">Choose a size</h5>
                    <div>
                      <!-- <button  v-for="(item, index) in detail.size" :key="index" class="btn btn-warning font-weight-bolder font-poppins mx-3 d-inline" style="border-radius:50px;height:50px;width:50px;font-size:15px;line-height:13px">{{item}}</button> -->
                      <div>
                        <b-form-group>
                          <b-form-radio-group v-model="cartHolder.size" :options="detail.size" buttons button-variant="outline-warning"></b-form-radio-group>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-lg-5 text-center">
            <div v-if="userAccess != null" style="width:75%" class="mx-auto d-flex flex-column">
              <button @click="addToCart()" style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-brown ">Add to Cart</button>
              <button v-if="userAccess == 1" @click="editProduct()" style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-yellow ">Edit Product</button>
              <button v-if="userAccess == 1" @click="$bvModal.show('deleteModal')" style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-black ">Delete Menu</button>
            </div>
          </div>
          <div v-if="userAccess != null" class=" col-md-7 col-lg-7">
            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <h5 class="font-weight-bolder font-poppins mb-4">Choose Delivery Methods</h5>
                  <div class="row">
                    <div class="col">
                      <!-- <button v-for="(item, index) in detail.delivery" :key="index" style="border-radius:10px" class="btn btn-brown font-weight-bolder font-poppins mx-3">{{item}}</button> -->
                      <b-form-group>
                          <b-form-radio-group v-model="cartHolder.orderType" :options="detail.delivery" buttons ></b-form-radio-group>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="row my-4">
                    <div class="col">
                      <form class="form-inline ">
                        <div class="form-group w-75 mx-auto">
                          <label class="my-1 mr-2 font-poppins">Set Time : </label>
                          <input v-model="cartHolder.orderDetails" type="text" class="form-control border-none w-75" style=""
                            placeholder="Enter the time you’ll arrived">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
    <!-- Cart Bottom -->
    <div v-if="userAccess != null" class="container my-4">
      <div class="row">
        <div class="col-1">
        </div>
        <div class="col-7">
          <div class="card shadow-lg" style="border-radius:25px">
          <!-- Jika ada itemnya -->
            <div v-if="fixCart.length > 0" class="row no-gutters" style="height:20vh">
              <div class="col-md-4 text-center my-auto">
                <img :src="`${webURL}/image/${detail.image}`" style="height:100px;width:100px"
                  class="card-img product-rounded">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="mb-0 card-title font-weight-bold">{{detail.name.toUpperCase()}}</h5>
                  <span @click="clearFixCart()" class="icon-edit-cupon" style="height:30px;width:30px"><i class="fas fa-times"></i></span>
                <div style="overflow-y:scroll">
                    <p class="card-text mb-0" v-for="(item, index) in fixCart" :key="index">x{{item.amount}} ({{item.size}})</p>
                  </div>
                </div>
              </div>
            </div>
          <!-- Jika Tidak ada itemnya -->
          <div v-else style="height:20vh" class="p-4 d-flex justify-content-center">
            <h5 class="text-center font-poppins font-weight-bold mb-0 my-auto">Click product size to add product</h5>
          </div>
          </div>
        </div>
        <div class="col-3">
          <button @click="buildCheckoutData()" style="font-size:20px;border-radius:25px;"
            class="text-dark w-100 h-100 btn mb-3 btn-yellow shadow-lg ">CHECKOUT</button>
        </div>
        <div class="col-1"></div>
        <b-modal id="deleteModal" hide-footer hide-header title="Using Component Methods" centered>
          <div class="p-5">
            <div class="d-block text-center">
            <p class="font-poppins font-weight-light" style="font-size:20px;">Are you sure want to delete this product?</p>
          </div>
          <div class="w-100">
          <button class="btn btn-primary text-center float-left mr-3 font-weight-bold" style="width:40%;margin-right:5%;background:#fff;border:3px solid #6A4029;color:#6A4029" @click="$bvModal.hide('deleteModal')">Cancel</button>
          <button class="btn btn-brown text-center float-right ml-3" style="width:40%;margin-left:5%;border:3px solid #6A4029;" @click="deleteConfirm()">Delete</button>
          </div>
          </div>
        </b-modal>
      </div>
    </div>
    <cFooter />
  </div>
</template>

<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      id: this.$route.params.id,
      cartHolder: {
        orderType: '',
        orderDetails: '',
        size: ''
      },
      fixCart: []
    }
  },
  components: {
    cHeader,
    cFooter
  },
  computed: {
    ...mapGetters({
      detail: 'products/detail',
      userID: 'auth/getUserID',
      userName: 'auth/getUserName',
      userAccess: 'auth/getAccess'
    })
  },
  methods: {
    ...mapActions({
      getDetailAction: 'products/getDetail',
      deleteAction: 'products/deleteProduct',
      addCartAction: 'carts/addToCart'
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
          orderPhone: '0'
        }))
        this.addCartAction(checkoutData)
        this.fixCart = []
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
    }
  },
  mounted () {
    this.getDetails()
  }
}
</script>

<style scoped>
.swal2-cancel.swal2-styled {
  border:1px solid aquamarine;
}
</style>
