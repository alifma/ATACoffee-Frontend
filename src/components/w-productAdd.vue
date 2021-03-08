<template>
  <div>
    <cHeader />
    <div class="container pt-4">
      <div id="breadcrumb-productDetails" class="d-inline">
        <router-link
          to="/product"
          class="mb-0 text-secondary font-rubik d-inline"
          >Favorite & Promo</router-link
        >
        <router-link
          :to="`/product/add`"
          class="mb-0 font-weight-bold font-active font-rubik d-inline"
        >
          > Add new product</router-link
        >
      </div>
      <div>
        <form action="" @submit.prevent="addProduct()">
        <div class="row py-4">
          <div class="col-md-5 col-lg-5">
            <div class="text-center">
            <img style="width:75%" class="product-rounded" :src="`https://i.ibb.co/k6XzPrY/default-Food.png`" alt="">
            <button style="font-size:20px;border-radius:25px;height:60px;background:#0B132A" class="w-75 btn mt-4 btn-black ">Take a Picture</button>
            <!-- <button style="font-size:20px;border-radius:25px;height:60px" class="w-75 btn mt-4 btn-yellow ">Choose from gallery</button> -->
            <div class="upload-btn-wrapper w-100">
              <button id="btnNewProductImg" style="font-size:20px;border-radius:25px;height:60px" class="w-75 btn mt-4 btn-yellow ">Choose from gallery</button>
              <input @change="processFile($event)" type="file" name="myfile" />
            </div></div>
            <div class="row w-75 mx-auto">
              <div class="col">
                <div class="form-group my04">
                  <label class="font-rubik brown" style="font-size:20px">Delivery Hour : </label>
                  <div class="row">
                    <div class="col">
                      <input class="form-control" v-model="newItem.hourStart" type="time">
                    </div>
                    <div class="col">
                      <input class="form-control" v-model="newItem.hourEnd"  type="time">
                    </div>
                  </div>
                  <div class="form-group my-4">
                    <div class="row">
                      <div class="col">
                    <label class="font-rubik brown" style="font-size:20px">Categories : </label>
                    <b-form-select v-model="newItem.categoryID" :options="categories" ></b-form-select>
                      </div>
                      <div class="col">
                    <label class="font-rubik brown" style="font-size:20px">Stock : </label>
                    <input v-model="newItem.stock" type="number" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-7">
              <div class="form-group mb-4">
                <label class="font-rubik brown" style="font-size:20px">Name :</label>
                <input type="text" class="form-control inputBorder" v-model="newItem.name" placeholder="Type product name min. 50 characters">
              </div>
              <div class="form-group mb-4">
                <label class="font-rubik brown" style="font-size:20px">Price : </label>
                <input type="number" class="form-control inputBorder" v-model="newItem.price" placeholder="Type the price">
              </div>
              <div class="form-group mb-4">
                <label class="font-rubik brown" style="font-size:20px">Description : </label>
                <input type="text" class="form-control inputBorder " v-model="newItem.description" placeholder="Describe your product min. 150 characters">
              </div>
              <div class="form-group mb-4">
                <label class="font-rubik brown" style="font-size:20px">Input Product Size : </label>
                <small id="emailHelp" class="form-text text-muted">Click size you want to use for this product</small>
                <input type="text" class="form-control inputBorder"  v-model="newItem.size">
              </div>
              <div class="form-group mb-4">
                <label class="font-rubik brown" style="font-size:20px">Input Delivery Method : </label>
                <small id="emailHelp" class="form-text text-muted">Click methods you want to use for this product</small>
                <input type="text" class="form-control inputBorder"  v-model="newItem.deliveryMethod">
              </div>
              <button style="font-size:20px;border-radius:25px;height:60px" type="submit" class="btn w-100 my-2 btn-brown ">Save Product</button>
            <button @click="backToProduct()" style="font-size:20px;border-radius:25px;height:60px" type="submit" class="btn w-100 my-2 btn-secondary ">Cancel</button>
          </div>
        </div>
            </form>

      </div>
    </div>
    <cFooter />
  </div>
</template>

<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
import { mapActions, mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      newItem: {
        name: '',
        price: 0,
        description: '',
        size: '',
        deliveryMethod: '',
        categoryID: 1,
        hourStart: '00:00',
        hourEnd: '00:00',
        stock: 0,
        image: ''
      }
    }
  },
  components: {
    cHeader,
    cFooter
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
      addAction: 'products/addProduct'
    }),
    backToProduct () {
      this.$router.push('/product')
    },
    processFile (el) {
      this.newItem.image = el.target.files[0]
    },
    addProduct () {
      const fd = new FormData()
      fd.append('name', this.newItem.name)
      fd.append('price', this.newItem.price)
      fd.append('description', this.newItem.description)
      fd.append('size', this.newItem.size)
      fd.append('deliveryMethod', this.newItem.deliveryMethod)
      fd.append('categoryID', this.newItem.categoryID)
      fd.append('hourStart', this.newItem.hourStart)
      fd.append('hourEnd', this.newItem.hourEnd)
      fd.append('stock', this.newItem.stock)
      fd.append('image', this.newItem.image)
      this.swalLoading('Please Wait')
      this.addAction(fd)
        .then((response) => {
          if (response.data.code === 200) {
            this.$swal.close()
            this.$router.push('/product')
            this.swalToast('success', response.data.msg)
          } else {
            this.$swal.close()
            // this.alertToast('error', response.data.msg)
            // this.swalToast('error', response.data.msg)
            this.swalAlert('Add Product Failed', response.data.msg, 'error')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style>
.upload-btn-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: inline-block;
}
#btnNewProductImg {
  width: 100%;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}
.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
