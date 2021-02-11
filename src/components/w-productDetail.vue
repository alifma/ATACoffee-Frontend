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
            <img style="width:75%" class="product-rounded" :src="`http://52.91.116.102:3001/image/${detail.image}`" alt="">
            <div class="mt-4">
              <!-- <h1 class="font-poppins font-weight-bolder">COLD BREW</h1> -->
              <h1 class="font-poppins font-weight-bolder">{{detail.name.toUpperCase()}}</h1>
              <h5 class="font-poppins font-weight-light">IDR {{formatPrice(detail.price)}}</h5>
            </div>
          </div>
          <div class=" col-md-7 col-lg-7">
            <div class="container h-100">
              <section class="info-product p-4">
                <div class="row p-4">
                  <div class="col">
                    <p class="font-poppins brown" style="font-size:20px">Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b></p>
                    <p class="font-poppins brown" style="text-align:justify; font-size:20px;">{{detail.desc}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col text-center">
                    <h5 class="font-weight-bolder font-poppins">Choose a size</h5>
                    <div>
                      <button  v-for="(item, index) in detail.size" :key="index" class="btn btn-warning font-weight-bolder font-poppins mx-3 d-inline" style="border-radius:50px;height:50px;width:50px;font-size:15px;line-height:13px">{{item}}</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-lg-5 text-center">
            <div style="width:75%" class="mx-auto d-flex flex-column">
              <button style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-brown ">Add to Cart</button>
              <button @click="editProduct()" style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-yellow ">Edit Product</button>
              <button @click="deleteConfirm()" style="font-size:20px;border-radius:25px;height:60px" class="btn mb-3 btn-black ">Delete Menu</button>
            </div>
          </div>
          <div class=" col-md-7 col-lg-7">
            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <h5 class="font-weight-bolder font-poppins mb-4">Choose Delivery Methods</h5>
                  <div class="row">
                    <div class="col">
                      <button v-for="(item, index) in detail.delivery" :key="index" style="border-radius:10px" class="btn btn-brown font-weight-bolder font-poppins mx-3">{{item}}</button>
                    </div>
                  </div>
                  <div class="row my-4">
                    <div class="col">
                      <form class="form-inline ">
                        <div class="form-group w-75 mx-auto">
                          <label class="my-1 mr-2 font-poppins">Set Time : </label>
                          <input type="text" class="form-control border-none w-75" style=""
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
      id: this.$route.params.id
    }
  },
  components: {
    cHeader,
    cFooter
  },
  computed: {
    ...mapGetters({
      detail: 'products/detail'
    })
  },
  methods: {
    ...mapActions({
      getDetailAction: 'products/getDetail',
      deleteAction: 'products/deleteProduct'
    }),
    editProduct () {
      this.$router.push(`/product/${this.id}/edit`)
    },
    deleteConfirm () {
      // this.$swal('Email Not Registered', 'Please Check your Email ', 'error')
      this.$swal.fire({
        text: 'Are you Sure want to delete this product?',
        showCancelButton: true,
        confirmButtonColor: '#6A4029',
        cancelButtonColor: '#FFF',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAction(this.id)
            .then((res) => {
              this.$swal('Delete Success', 'Product has been deleted', 'success')
              this.$router.push('/product')
            })
            .catch((err) => {
              this.$swal('Delete failed', err.message, 'success')
            })
        }
      })
    }
  },
  mounted () {
    this.getDetailAction(this.id)
  }
}
</script>
