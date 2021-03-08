<template>
  <div class="bg-gray">
    <!-- Header 8VH -->
    <mHeaders />
    <div class="container px-4 pt-3" style="height:87vh">
      <h1 class="font-poppins font-weight-bold">A good coffee is a good day</h1>
      <div class="text-center">
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <span class="input-group-text border-right-0 bg-gray"
              style="border-top-left-radius:25px;border-bottom-left-radius:25px"><i class="fas fa-search"></i></span>
          </div>
          <input v-model="productQuery.name" @change="getProduct()" type="text"
            class="font-poppins form-control bg-gray border-left-0"
            style="border-top-right-radius:25px;border-bottom-right-radius:25px" placeholder="Product Name">
        </div>
        <!-- Menunya -->
        <div>
          <div class="row">
            <div class="col-md-12" style="overflow-x:scroll; white-space: nowrap;">
              <span @click="setProductCategory('')" class="font-poppins bt-active mr-5">
                Favorite Product
              </span>
              <span v-for="(item, index) in categories" :key="index" @click="setProductCategory(item.value)"
                class="text-secondary font-poppins mr-5">{{item.text}}</span>
            </div>
          </div>
          <div v-if="loadProduct" class="row w-100">
            <div class="w-100 text-center p-4 m-4">
              <b-spinner variant="warning" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
            </div>
          </div>
          <div v-else-if="allitems.length === 0" class="row w-100">
            <div class="w-100 text-center p-4 m-4">
              <h1>No items</h1>
            </div>
          </div>
          <div v-else class="pt-3">
            <div style="overflow-x:scroll;white-space:nowrap;">
              <div class="mb-2 d-inline-block" v-for="(element, index) in allitems" :key="index">
                <div class="card mr-4" style="border-radius:25px;width:50vw;height:min-content;height:40vh">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12">
                        <img class="center-cropped" @click="detailProduct(element.id)"
                          :src="`${webURL}/image/${element.image}`" alt="" />
                      </div>
                      <div class="col-12">
                        <h5 class="font-poppins font-weight-bold mt-3" style="white-space:normal;">{{ element.name }}
                        </h5>
                        <h6 class="font-poppins brown mb-2">
                          IDR {{ formatPrice(element.price) }}
                        </h6>
                        <button v-if="getAccess == 1" @click="editProduct(element.id)" style="border-radius:50px"
                          class="btn btn-brown"><i class="fas text-white fa-pencil-alt"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="height:13vh;overflow-y:scroll">
            <div class="col-12 justify-content-left">
              <b-form-group>
                <b-form-radio-group id="btn-radios-2" @change="setOrderSort()" v-model="productQuery.page"
                  button-variant="outline-warning" :options="optionPage" buttons></b-form-radio-group>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-select v-model="productQuery.order" @change="setOrderSort()" size="sm" :options="optionOrder">
              </b-form-select>
            </div>
            <div class="col-4">
              <b-form-select v-model="productQuery.sort" @change="setOrderSort()" size="sm" :options="optionSort">
              </b-form-select>
            </div>
            <div class="col-4">
              <b-form-select v-model="productQuery.limit" @change="setProductCategory('')" size="sm" :options="options">
              </b-form-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer 8vh -->
    <mFooters />
    <!-- Sidebar -->
    <b-sidebar id="sidebar-1" title="Sidebar" shadow no-header backdrop>
      <div class="px-3 py-2 h-100 text-white align-middle" style="background:#6A4029">
        <div class="row h-100">
          <div class="col-12 my-auto">
            <ul v-if="getAccess === null" class="list-group">
              <li @click="linkTo('login')" style="background:#6A4029" class="list-group-item border-0 my-5 py-5">
                <p class="mb-0">Login<i class="fas fa-arrow-right ml-3"></i></p>
              </li>
            </ul>
            <ul v-else-if="getAccess == 1" class="list-group">
              <li style="background:#6A4029" @click="linkTo('profile')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="far mr-4 fa-user-circle"></i> Profile</p>
              </li>
              <li style="background:#6A4029" @click="linkTo('waitinglist')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="fas fa-cart-arrow-down mr-4 "></i> Pending Orders</p>
              </li>
              <li style="background:#6A4029" @click="linkTo('dashboard')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="fas fa-chart-line mr-4 "></i> Dashboard</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Settings', 'You can change your profile setings here', 'info');linkTo('profile')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="fas fa-cog mr-4 "></i> Settings</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Privacy Policy', `Every data saved is encrypted and won't be published anywhere`, 'info')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="far fa-file-alt mr-4 "></i> Privacy policy</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Security', 'You can change your password here', 'info');linkTo('profile')"
                class="list-group-item border-0 mb-5 pb-5">
                <p class="mb-0"><i class="fas fa-shield-alt mr-4 "></i> Security</p>
              </li>
              <li @click="logout()" style="background:#6A4029" class="list-group-item border-0 mt-5 pt-5">
                <p class="mb-0">Sign-out<i class="fas fa-arrow-right ml-3"></i></p>
              </li>
            </ul>
            <ul v-else class="list-group">
              <li style="background:#6A4029" @click="linkTo('profile')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="far mr-4 fa-user-circle"></i> Profile</p>
              </li>
              <li style="background:#6A4029" @click="linkTo('orders')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="fas fa-cart-arrow-down mr-4 "></i> Order History</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Settings', 'You can change your profile setings here', 'info');linkTo('profile')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="fas fa-cog mr-4 "></i> Settings</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Privacy Policy', `Every data saved is encrypted and won't be published anywhere`, 'info')"
                class="list-group-item border-top-0 border-left-0 border-right-0 border-bottom border-white">
                <p class="mb-0"><i class="far fa-file-alt mr-4 "></i> Privacy policy</p>
              </li>
              <li style="background:#6A4029" @click="swalAlert('Security', 'You can change your password here', 'info');linkTo('profile')"
                class="list-group-item border-0 mb-5 pb-5">
                <p class="mb-0"><i class="fas fa-shield-alt mr-4 "></i> Security</p>
              </li>
              <li @click="logout()" style="background:#6A4029" class="list-group-item border-0 mt-5 pt-5">
                <p class="mb-0">Sign-out<i class="fas fa-arrow-right ml-3"></i></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </b-sidebar>
    <!-- End Sidebar -->
  </div>
</template>

<script>
import mHeaders from './m_headers'
import mFooters from './m_footers'
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      loadProduct: false,
      stateAdmin: false,
      options: [
        { value: 4, text: 'Limit 4' },
        { value: 6, text: 'Limit 6' },
        { value: 12, text: 'Limit 12' },
        { value: 16, text: 'Limit 16', disabled: true }
      ],
      optionSort: [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' }
      ],
      optionOrder: [
        { value: 'created_at', text: 'Added' },
        { value: 'price', text: 'Price' },
        { value: 'name', text: 'Alphabet' }
      ]
    }
  },
  components: {
    mHeaders,
    mFooters
  },
  computed: {
    ...mapGetters({
      getAccess: 'auth/getAccess',
      allitems: 'products/allitems',
      categories: 'categories/categories',
      pagination: 'products/paginationItem',
      optionPage: 'products/optionPage'
    })
  },
  methods: {
    ...mapActions({
      signout: 'auth/logout',
      getAllProduct: 'products/getAllProduct',
      getCategories: 'categories/getCategories'
    }),
    editProduct (id) {
      this.$router.push(`/product/${id}/edit`)
    },
    test () {
      this.swalAlert('Comming Soon', 'You will be able to edit coupon', 'info')
    },
    btnCuppon () {
      this.swalAlert('Comming Soon', 'You will be able to use coupon', 'info')
    },
    addpromo () {
      this.swalAlert('Comming Soon', 'You will be able to add promo', 'info')
    },
    detailProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addnewproduct () {
      this.$router.push('/product/add')
    },
    setProductCategory (id) {
      this.productQuery.category = id
      this.productQuery.page = 1
      this.productQuery.name = ''
      this.getProduct()
    },
    setOrderSort () {
      this.productQuery.name = ''
      this.getProduct()
    },
    setProductPage (page) {
      this.productQuery.page = page
      this.getProduct()
    },
    getProduct () {
      this.loadProduct = true
      this.getAllProduct(this.productQuery)
        .then((res) => {
          this.loadProduct = false
        })
        .catch((err) => {
          this.loadProduct = false
          console.log(err)
        })
    },
    logout () {
      this.signout().then((response) => {
        this.swalAlert('Logout Success', 'See you next time!', 'success')
        if (response) {
          this.$router.push('/')
        }
      })
    }
  },
  mounted () {
    this.getProduct()
    this.getCategories()
  }
}
</script>

<style>

</style>
