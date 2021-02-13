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
          :to="`/product/${id}`"
          class="mb-0 font-weight-bold font-active font-rubik d-inline"
        >
          > {{ detail.name }}</router-link
        >
        <router-link
          :to="`/product/${id}/edit`"
          class="mb-0 font-weight-bold font-active font-rubik d-inline"
        >
          > Edit Product</router-link
        >
      </div>
      <div class="row mt-4">
        <div class="col-lg-6">
          <div class="text-center">
            <img
              :src="`http://52.91.116.102:3001/image/${detail.image}`"
              alt=""
              class="img-fluid w-100"
            />
            <div class="form-group text-center my-2">
              <input
                type="file"
                class="form-control-file"
                @change="processFile($event)"
                :placeholder="hold.image"
                id="exampleFormControlFile1"
              />
            </div>
          </div>
          <p>Delivery only on Monday to friday at 1 - 7 pm</p>
        </div>
        <div class="col-lg-6">
          <form action="" @submit.prevent="updateDetails(id)">
            <input
              type="text"
              class="text-dark form-control mb-2 font-poppins inputBorder font-weight-bold"
              style="font-size: 40px"
              v-model="hold.name"
            />
            <input
              type="number"
              class="text-dark form-control mb-2 font-poppins inputBorder font-weight-light"
              style="font-size: 30px"
              v-model="hold.price"
            />
            <textarea
              type="text"
              class="text-dark form-control mb-2 font-poppins inputBorder"
              minlength="150"
              style="font-size: 20px"
              v-model="hold.desc"
            > </textarea>
            <input
              type="text"
              class="text-dark form-control mb-2 font-poppins font-weight-light"
              style="font-size: 30px"
              v-model="hold.size"
            />
            <input
              type="text"
              class="text-dark form-control mb-2 font-poppins font-weight-light"
              style="font-size: 30px"
              v-model="hold.delivery"
            />
            <div class="form-inline">
              <input
                type="number"
                style="font-size: 20px; width: min-content"
                v-model="hold.stock"
                class="form-control"
              />
              <label class="ml-4 font-poppins">Stock </label>
            </div>
            <button
              style="font-size: 20px; border-radius: 25px; height: 60px"
              type="submit"
              class="btn w-100 my-4 btn-brown"
            >
              Save Change
            </button>
          </form>
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
      actionUpdate: 'products/updateDetail'
    }),
    getDetails () {
      this.getDetailAction(this.id)
        .then((res) => {
          this.hold.name = res.name
          this.hold.price = res.price
          this.hold.desc = res.desc
          this.hold.size = res.size
          this.hold.image = res.image
          this.hold.delivery = res.delivery
          this.hold.stock = res.stock
        })
        .catch('')
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
            this.$swal.close()
            this.getDetails()
            this.swalAlert('Update Data Success', '', 'success')
          } else {
            this.$swal.close()
            this.swalAlert('Update Data Failedd', response.data.msg, 'error')
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
