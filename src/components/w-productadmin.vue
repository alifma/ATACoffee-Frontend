<template>
  <div>
    <!-- header -->
    <cHeader />
    <div class="container-bars">
      <!-- aside left -->
      <aside class="left" id="side-left">
        <h3 class="title-aside-promo">Promo for you</h3>
        <p class="info-aside-promo">
          Coupons will be updated every weeks. Check them out!
        </p>
        <!-- box menu promo -->
        <section class="box-aside-menu" id="aside-menu3">KETIGA</section>
        <section class="box-aside-menu" id="aside-menu2">KEDUA</section>
        <section class="box-aside-menu" id="aside-menu1">
          <span v-if="getAccess == 1" @click="test()" class="icon-edit-cupon"
            ><i class="fas fa-pencil-alt"></i
          ></span>
          <img
            src="../assets/img/menu-Img4.png"
            alt="img4"
            class="img-aside-promo mt-5"
          />
          <h3 class="title-menu-aside mb-3">Beef Spaghetti</h3>
          <h3 class="discon-menu-aside mt-n2">20% OFF</h3>
          <p class="info-discon-aside">
            Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
          </p>
          <hr class="breakline" />
          <p class="title-codecupon">COUPON CODE</p>
          <h2 class="codecupon-aside">FNPR15RG</h2>
          <p class="sub-codecupon mt-5">Valid untill October 10th 2020</p>
          <button @click="btnCuppon()" class="btn btn-cupon mt-5">
            Apply Coupon
          </button>
          <!-- info foot aside -->
          <p class="msg-cupon">Terms and Condition</p>
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
          <!-- button admin -->
          <button
            v-if="getAccess == 1"
            @click="addpromo()"
            class="btn btn-warning bt-addpromo"
          >
            Add New Promo
          </button>
        </section>
        <!-- end box menu promo -->
      </aside>
      <!-- and aside left -->
      <!-- main menu -->
      <section class="main-menu" id="main-menu">
        <div class="row mb-5">
          <div class="col-md-12">
            <span @click="setOrderQuery('')" class="bt-favorite bt-active mr-5">
              Favorite Product
            </span>
            <span v-for="(item, index) in categories" :key="index" @click="setOrderQuery(item.value)" class="bt-vcoffe ml-4 mr-5">{{item.text}}</span>
            <!-- <span @click="vnoncoffe()" class="bt-vnoncoffe ml-4 mr-5"
              >Non Coffee</span
            >
            <span @click="vfoods()" class="bt-vfoods ml-4 mr-5">Foods</span>
            <span @click="vaddon()" class="bt-addon ml-4">Add-on</span> -->
          </div>
        </div>
        <!-- menu -->
        <div class="row">
          <div
            class="col-md-3 mt-5 mb-4"
            v-for="(element, index) in allitems"
            :key="index"
          >
            <div class="card-menu">
              <img
                @click="detailProduct(element.id)"
                :src="`http://52.91.116.102:3001/image/${element.image}`"
                alt=""
                class="img-menus"
              />
              <div class="card-body">
                <h5 class="card-title-menus mt-n3">{{ element.name }}</h5>
                <h6 class="card-subtitle-menus mb-2">
                  IDR {{ formatPrice(element.price) }}
                </h6>
                <span
                  v-if="getAccess == 1"
                  @click="editProduct(element.id)"
                  class="icon-edit-menus"
                  ><i class="fas fa-pencil-alt"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- menu -->
      </section>
      <!-- end main menu -->
    </div>
    <section class="button-add">
      <div class="row">
        <div class="col-md-12" v-if="getAccess == 1">
          <button @click="addnewproduct()" class="btn btn-add-new-product">
            Add New Product
          </button>
        </div>
      </div>
    </section>
    <!-- footer -->
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
      stateAdmin: false
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
      categories: 'categories/categories'
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
      alert('TEST')
    },
    favoritelist () {
      alert('Menu Favorite')
    },
    vcoffe () {
      alert('Menu Coffee')
    },
    vnoncoffe () {
      alert('Menu Non Coffee')
    },
    vfoods () {
      alert('Menu Foods')
    },
    vaddon () {
      alert('Add on')
    },
    btnCuppon () {
      alert('apply cupon')
    },
    addpromo () {
      alert('add promo')
    },
    detailProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addnewproduct () {
      this.$router.push('/product/add')
    },
    setOrderQuery (id) {
      this.productQuery.category = id
      console.log(this.productQuery)
      this.getAllProduct(this.productQuery)
    }
  },
  mounted () {
    this.getAllProduct(this.productQuery)
    this.getCategories()
  }
}
</script>
