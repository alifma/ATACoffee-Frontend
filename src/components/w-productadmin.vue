<template>
  <div>
    <!-- header -->
    <cHeader />
    <div class="container">
      <div class="row">
        <div class="col-4 border-0">
          <h4 class="font-weight-bold font-poppins text-center brown pt-5 mb-3">Promo for you</h4>
          <p class="font-poppins text-center">Coupons will be updated every weeks.<br />Check them out!</p>
          <div class="container pt-3">
            <div class="card border-0 shadow" style="border-radius:15px;background:#FFCB65">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center my-auto">
                    <span v-if="getAccess == 1" @click="btnCuppon()" class="icon-edit-menus"><i
                          class="fas fa-pencil-alt float-right"></i></span>
                    <img src="../assets/img/menu-Img4.png"
                      style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 120px;width:120px"
                      class="card-img product-rounded">
                  </div>
                  <div class="col-12 text-center ">
                    <h3 class="title-menu-aside  mt-3">Beef Spaghetti</h3>
                    <h3 class="title-menu-aside ">20% OFF</h3>
                    <p class="info-discon-aside">
                      Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                    </p>
                    <hr class="breakline" />
                    <p class="title-codecupon">COUPON CODE</p>
                    <h2 class="codecupon-aside">FNPR15RG</h2>
                    <p class="sub-codecupon mt-5">Valid untill October 10th 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <button v-if="getAccess != null" @click="btnCuppon()" class="btn btn-cupon w-100 mt-5">
              Apply Coupon
            </button>
            <p class="msg-cupon mt-3">Terms and Condition</p>
            <ul class="list-msg-cupon ml-n4">
              <li class="txt-msg-cupon">
                1. You can only apply 1 coupon per day
              </li>
              <li class="txt-msg-cupon">2. it only for dine in</li>
              <li class="txt-msg-cupon">3. Buy 1 get 1 only for new user</li>
              <li class="txt-msg-cupon">
                4. Should make member card to apply coupon
              </li>
            </ul>
          </div>
        </div>
        <div class="col-8 border-left">
          <div class="row">
            <div class="col-12 mt-3 pt-3 hideScroll" style="white-space:pre;overflow-x:scroll;overflow-y:hidden">
              <span @click="setProductCategory('')" class="bt-favorite bt-active mx-4">
                Favorite Product
              </span>
              <span v-for="(item, index) in categories" :key="index" @click="setProductCategory(item.value)"
                class="bt-vcoffe mx-4">{{item.text}}</span>
            </div>
            <div class="col-12 mt-3">
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
              <div v-else class="row">
                <div class="col-md-4 col-lg-3 col-4 mt-5 mb-4" v-for="(element, index) in allitems" :key="index">
                  <div class="card-menu">
                    <img @click="detailProduct(element.id)" :src="`${webURL}/image/${element.image}`" alt=""
                      class="img-menus" />
                    <div class="card-body">
                      <h5 class="card-title-menus mt-n3">{{ element.name }}</h5>
                      <h6 class="card-subtitle-menus mb-2">
                        IDR {{ formatPrice(element.price) }}
                      </h6>
                      <span v-if="getAccess == 1" @click="editProduct(element.id)" class="icon-edit-menus"><i
                          class="fas fa-pencil-alt"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12 text-center">
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
      <div class="row ">
        <div class="col-4 my-auto border-0">
          <button v-if="getAccess == 1" @click="addpromo()" class="btn btn-warning bt-addpromo w-100">
            Add New Promo
          </button>
        </div>
        <div class="col-8  my-auto border-left">
          <div class="row">
            <div class="col-12" v-if="getAccess == 1">
              <button @click="addnewproduct()" class="btn btn-cupon w-100" style="border-radius:20px;height:80px">
                Add New Product
              </button>
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
    cHeader,
    cFooter
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
    }
  },
  mounted () {
    this.getProduct()
    this.getCategories()
  }
}
</script>
