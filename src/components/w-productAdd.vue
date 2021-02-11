<template>
  <div>
    <cHeader />
    <div class="container pt-4">
      <div id="breadcrumb-productDetails" class="d-inline">
        <router-link to="/product" class="mb-0 text-secondary font-rubik d-inline">Favorite & Promo</router-link>
        <router-link :to="`/product/add`" class="mb-0 font-weight-bold font-active font-rubik d-inline"> > Add new
          product</router-link>
      </div>
      <div>
        <div class="row py-4">
          <div class="col-md-5 col-lg-6 text-center">
            <img style="width:75%" class="product-rounded" :src="`http://52.91.116.102:3001/image/defaultFood.png`" alt="">
            <button style="font-size:20px;border-radius:25px;height:60px;background:#0B132A" class="w-75 btn mt-4 btn-black ">Take a Picture</button>
            <!-- <button style="font-size:20px;border-radius:25px;height:60px" class="w-75 btn mt-4 btn-yellow ">Choose from gallery</button> -->
            <div class="upload-btn-wrapper w-100">
              <button id="btnNewProductImg" style="font-size:20px;border-radius:25px;height:60px" class="w-75 btn mt-4 btn-yellow ">Choose from gallery</button>
              <input type="file" name="myfile" />
            </div>
          </div>
          <div class="col-md-5 col-lg-6">
            <form action="">
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email address :</label>
                <input type="text" class="form-control inputBorder" placeholder="Type product name min. 50 characters">
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Price : </label>
                <input type="number" class="form-control inputBorder" placeholder="Type the price">
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Description : </label>
                <input type="text" class="form-control inputBorder" placeholder="Describe your product min. 150 characters">
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Input Product Size : </label>
                <small id="emailHelp" class="form-text text-muted">Click size you want to use for this product</small>
                <input type="text" class="form-control inputBorder">
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Input Delivery Method : </label>
                <small id="emailHelp" class="form-text text-muted">Click methods you want to use for this product</small>
                <input type="text" class="form-control inputBorder">
              </div>
              {{categories}}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cHeader from '../components/headers'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    cHeader
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories'
    })
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style>

  .upload-btn-wrapper {
  position: relative;
  width:100%;
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

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
