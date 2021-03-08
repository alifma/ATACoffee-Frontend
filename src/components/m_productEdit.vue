<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <router-link :to="`/product/${detail.id}`" class="mb-0 brown"><i class="fas fa-angle-left"></i></router-link>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins"></p>
      </div>
      <div class="col-2"></div>
    </div>
    <form action="" @submit.prevent="updateDetails(id)">
    <div class="row mx-0 my-0" style="height:75vh;overflow-y:scroll;">
      <div class="col-12 text-center">
        <img class="img-fluid shadow text-center"
          style="border-radius:50%;image-position:center;object-fit: cover;object-position: center;height: 20vh;width:20vh"
          :src="`${webURL}/image/${detail.image}`" alt="">
        <div class="upload-btn-wrapper w-100">
          <button id="btnNewProductImg" style="font-size:20px;border-radius:25px;height:50px"
            class="w-75 btn btn-dark mt-4">Edit pictures</button>
          <input @change="processFile($event)" type="file" name="myfile" />
        </div>
        <div>
          <input type="text"
            class="text-dark text-center border-0 py-0 form-control font-poppins inputBorder font-weight-bold"
            style="font-size:25px;background:#F2F2F2" v-model="hold.name" />
          <input type="text"
            class="brown text-center py-0 border-0 form-control font-poppins inputBorder  font-weight-light"
            style="font-size:20px;background:#F2F2F2" v-model="hold.price" />
        </div>
      </div>
      <div class="col-12">
        <div class="container">
          <h5 class="font-weight-bold font-poppins mt-3 mb-0">Description</h5>
          <div>
            <textarea type="text"
              class="text-secondary form-control mb-0 px-0 border-0 text-justify font-poppins inputBorder"
              minlength="150" style="font-size: 15px;background:#f2f2f2;height:20vh" v-model="hold.desc"> </textarea>
          </div>
          <h5 class="font-weight-bold font-poppins mt-3 mb-0">Product Size</h5>
          <div>
            <input type="text"
              class="text-secondary form-control py-0 px-0 border-0 text-justify font-poppins inputBorder"
              style="font-size: 15px;background:#f2f2f2" v-model="hold.size" />
          </div>
          <h5 class="font-weight-bold font-poppins mt-3 mb-0">Order Option</h5>
          <div>
            <input type="text"
              class="text-secondary form-control py-0 px-0 border-0 text-justify font-poppins inputBorder"
              style="font-size: 15px;background:#f2f2f2" v-model="hold.delivery" />
          </div>
          <h5 class="font-weight-bold font-poppins mt-3 mb-0">Stock</h5>
          <div>
            <input type="number"
              class="text-secondary form-control py-0 px-0 border-0 text-justify font-poppins inputBorder"
              style="font-size: 15px;background:#f2f2f2" v-model="hold.stock" />
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="height:15vh">
      <div class="row">
        <div class="col-12 my-auto">
          <button type="submit" style="font-size:20px;border-radius:25px;height:8vh"
            class="w-100 btn btn-brown shadow-lg mt-3">Save Change</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      id: this.$route.params.id,
      hold: {
        name: '',
        price: 0,
        desc: '',
        size: '',
        image: 'defaultFood.png',
        delivery: '',
        stock: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      detail: 'products/detail'
    })
  },
  methods: {
    ...mapActions({
      getDetailAction: 'products/getDetail',
      actionUpdate: 'products/updateDetail'
    }),
    getDetails () {
      this.swalLoading('Preparing Data...')
      this.getDetailAction(this.id)
        .then((res) => {
          this.swalLoadingClose()
          this.hold.name = res.name
          this.hold.price = res.price
          this.hold.desc = res.desc
          this.hold.size = res.size
          this.hold.image = res.image
          this.hold.delivery = res.delivery
          this.hold.stock = res.stock
        })
        .catch((err) => {
          this.swalLoadingClose()
          console.log(err)
        })
    },
    processFile (el) {
      this.hold.image = el.target.files[0]
    },
    updateDetails () {
      this.swalLoading('Updating Data')
      const fd = new FormData()
      fd.append('name', this.hold.name)
      fd.append('price', this.hold.price)
      fd.append('description', this.hold.desc)
      fd.append('size', this.hold.size)
      fd.append('deliveryMethod', this.hold.delivery)
      fd.append('image', this.hold.image)
      fd.append('stock', this.hold.stock)
      const fixData = {
        id: this.id,
        fd
      }
      this.actionUpdate(fixData)
        .then((response) => {
          if (response.data.code === 200) {
            this.swalLoadingClose()
            this.getDetails()
            this.$router.push(`/product/${this.id}`)
            this.swalAlert('Update Data Success', '', 'success')
          } else {
            this.swalLoadingClose()
            this.swalAlert('Update Data Failed', response.data.msg, 'error')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getDetails()
  }
}
</script>

<style>

</style>
