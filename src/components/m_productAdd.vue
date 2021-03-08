<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
        <div class="col-2">
          <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
        </div>
        <div class="col-8 text-center">
          <p class="font-weight-bold font-poppins">New Product</p>
        </div>
        <div class="col-2"></div>
      </div>
    <div class="container">
      <form action="" @submit.prevent="addProduct()">
        <div class="row" style="height:75vh;overflow-y:scroll">
          <div class="col-12 text-center" style="height:35vh">
            <img class="img-fluid shadow text-center"
              style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 25vh;width:25vh"
              :src="`https://i.ibb.co/k6XzPrY/default-Food.png`" alt="">
            <div class="upload-btn-wrapper w-100">
              <button id="btnNewProductImg" style="font-size:20px;border-radius:25px;height:50px"
                class="w-75 btn mt-4 btn-dark ">Add more pictures</button>
              <input @change="processFile($event)" type="file" name="myfile" />
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-2"></div>
              <div class="col-8 px-4">
                <div class="form-group">
                  <input type="text"
                    class="text-center form-control inputBorder border-top-0 border-left-0 border-right-0 px-0"
                    style="background:#F2F2F2" v-model="newItem.name" placeholder="Type product name min. 30 characters">
                </div>
                <div class="form-group">
                  <input type="number"
                    class="text-center form-control inputBorder border-top-0 border-left-0 border-right-0 px-0"
                    style="background:#F2F2F2" v-model="newItem.price" placeholder="Type Product Price">
                </div>
              </div>
              <div class="col-2"></div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-poppins font-weight-bold mb-0" style="font-size:20px">Delivery Info</label>
              <input type="text"
                class="form-control inputBorder border-top-0 border-left-0 border-right-0 px-0"
                style="background:#F2F2F2" v-model="newItem.deliveryMethod" placeholder="Add comma for each item">
            </div>
            <div class="form-group">
              <label class="font-poppins font-weight-bold mb-0" style="font-size:20px">Description</label>
              <input type="text"
                class="form-control inputBorder border-top-0 border-left-0 border-right-0 px-0"
                style="background:#F2F2F2" v-model="newItem.description" placeholder="Type Description">
            </div>
            <div class="form-group">
              <label class="font-poppins font-weight-bold mb-0" style="font-size:20px">Product Size</label>
              <input type="text"
                class="form-control inputBorder border-top-0 border-left-0 border-right-0 px-0"
                style="background:#F2F2F2" v-model="newItem.size" placeholder="Add comma for each item">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-poppins font-weight-bold" style="font-size:20px">Delivery Hour</label>
              <div class="row">
                <div class="col">
                  <input class="form-control" v-model="newItem.hourStart" type="time">
                </div>
                <div class="col">
                  <input class="form-control" v-model="newItem.hourEnd" type="time">
                </div>
              </div>
              <div class="form-group my-4">
                <div class="row">
                  <div class="col">
                    <label class="font-poppins font-weight-bold" style="font-size:20px">Categories </label>
                    <b-form-select v-model="newItem.categoryID" :options="categories"></b-form-select>
                  </div>
                  <div class="col">
                    <label class="font-poppins font-weight-bold" style="font-size:20px">Stock </label>
                    <input v-model="newItem.stock" type="number" class="form-control">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-auto">
              <button type="submit" style="font-size:20px;border-radius:25px;height:8vh"
                class="w-100 btn btn-brown shadow-lg mt-3">Save Change</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
            this.swalAlert('Add Product Success', '', 'success')
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

</style>
