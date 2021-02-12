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
        <div class="row py-4">
          <div class="col-md-5 col-lg-5">
            <div class="text-center">
              <img
                style="width: 75%"
                class="product-rounded"
                :src="`http://52.91.116.102:3001/image/defaultFood.png`"
                alt=""
              />
              <button
                style="
                  font-size: 20px;
                  border-radius: 25px;
                  height: 60px;
                  background: #0b132a;
                "
                class="w-75 btn mt-4 btn-black"
              >
                Take a Picture
              </button>
              <!-- <button style="font-size:20px;border-radius:25px;height:60px" class="w-75 btn mt-4 btn-yellow ">Choose from gallery</button> -->
              <div class="upload-btn-wrapper w-100">
                <button
                  id="btnNewProductImg"
                  style="font-size: 20px; border-radius: 25px; height: 60px"
                  class="w-75 btn mt-4 btn-yellow"
                >
                  Choose from gallery
                </button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="row w-75 mx-auto">
              <div class="col">
                <div class="form-group my04">
                  <label for="exampleInputEmail1">Delivery Hour : </label>
                  <div class="row">
                    <div class="col">
                      <input
                        class="form-control"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                    <div class="col">
                      <input
                        class="form-control"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                  </div>
                  <div class="form-group my-4">
                    <div class="row">
                      <div class="col">
                        <label for="exampleInputEmail1">Categories : </label>
                        <b-form-select
                          v-model="newItem.category_id"
                          :options="categories"
                          required
                        ></b-form-select>
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1">Stock : </label>
                        <input type="number" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-7">
            <form action="">
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Name :</label>
                <input
                  type="text"
                  class="form-control inputBorder"
                  placeholder="Type product name min. 50 characters"
                />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Price : </label>
                <input
                  type="number"
                  class="form-control inputBorder"
                  placeholder="Type the price"
                />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Description : </label>
                <input
                  type="text"
                  class="form-control inputBorder"
                  placeholder="Describe your product min. 150 characters"
                />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Input Product Size : </label>
                <small id="emailHelp" class="form-text text-muted"
                  >Click size you want to use for this product</small
                >
                <input type="text" class="form-control inputBorder" />
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Input Delivery Method : </label>
                <small id="emailHelp" class="form-text text-muted"
                  >Click methods you want to use for this product</small
                >
                <input type="text" class="form-control inputBorder" />
              </div>
            </form>
            <button
              style="font-size: 20px; border-radius: 25px; height: 60px"
              type="submit"
              class="btn w-100 my-2 btn-brown"
            >
              Save Product
            </button>
            <button
              @click="backToProduct()"
              style="font-size: 20px; border-radius: 25px; height: 60px"
              type="submit"
              class="btn w-100 my-2 btn-secondary"
            >
              Cancel
            </button>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      newItem: {
        name: '',
        price: 0,
        description: '',
        size: '',
        deliveryMethod: '',
        category_id: 1
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
      getCategories: 'categories/getCategories'
    }),
    backToProduct () {
      this.$router.push('/product')
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
