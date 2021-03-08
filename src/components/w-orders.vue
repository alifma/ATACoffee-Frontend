<template>
  <div style="
      background-image: url('https://i.ibb.co/xG1TYf0/bg-History.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    ">
    <!-- Header -->
    <componentHeader />
    <div v-if="orders.length > 0"  style="min-height:50vh">
      <div class="container py-4">
        <h1 class="text-white text-center tittle pt-4" style="font-size: 40px; text-shadow: 2px 2px 4px #000000">
          Let's see what you have bought!
        </h1>
      </div>
      <div class="container mb-4">
        <div v-if="lostOrder" class="row w-100">
          <div class="w-100 text-center p-4 m-4">
            <b-spinner variant="warning" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
          </div>
        </div>
        <div v-else class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4 mt-2" v-for="(item, index) in orders" :key="index">
              <div class="card cardheight">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <button class="btndelete float-right" @click="passDeleteInv(item.inv)">
                        <i class="fas fa-times"></i>
                      </button>
                      <button class="btnDetail float-right" @click="datailOrders(item.inv)">
                        <i class="fas fa-shopping-bag"></i>
                      </button>
                      <h4 class="fontstyle mb-0">Invoice: {{ item.inv }}</h4>
                      <p class="fontstyle2 mb-0">
                        Created :
                        {{ new Date(item.created_at).toLocaleDateString() }}
                      </p>
                      <p class="fontstyle2 mb-0">
                        Update :
                        {{
                        item.updated_at === null
                          ? "-"
                          : new Date().toLocaleDateString()
                      }}
                      </p>
                      <p v-if="item.isPending === 1" class="text-danger font-weight-bold mb-0">
                        Pending
                      </p>
                      <p v-else class="font-weight-bold mb-0">
                        <span class="text-success">Done</span> (Cashier :
                        {{ item.cashier }})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container py-4 d-flex justify-content-center" style="height: 50vh">
        <h1 class="text-white text-center my-auto font-rubik" style="font-size: 40px; text-shadow: 2px 2px 4px #000000">
          You have no order!<br />
          Start your order now
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="card row my-4 mx-2" style="border-radius: 25px">
        <div class="card-body col w-100 d-flex">
          <div class="row w-100">
            <div class="col-6">
              <b-form-group>
                <b-form-radio-group id="btn-radios-2" @change="setOrderSort()" v-model="orderQuery.page"
                  button-variant="outline-warning" :options="optionPage" buttons></b-form-radio-group>
              </b-form-group>
            </div>
            <div class="col-2">
              <b-form-select v-model="orderQuery.pending" @change="getOrderLimitQuery(1)" size="sm"
                :options="optionFilter">
              </b-form-select>
            </div>
            <div class="col-2">
              <b-form-select v-model="orderQuery.sort" @change="getOrderLimitQuery(1)" size="sm" :options="optionSort">
              </b-form-select>
            </div>
            <div class="col-2">
              <b-form-select v-model="orderQuery.limit" @change="getOrderLimitQuery(1)" size="sm" :options="options">
              </b-form-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Header -->
    <componentFooter />
    <!-- end footer -->
    <b-modal id="deleteModal" hide-footer hide-header title="Using Component Methods" centered>
      <div class="p-5">
        <div class="d-block text-center">
          <p class="font-poppins font-weight-light" style="font-size: 20px">
            Are you sure want to delete this order?
          </p>
        </div>
        <div class="w-100">
          <button class="btn btn-primary text-center float-left mr-3 font-weight-bold" style="
              width: 40%;
              margin-right: 5%;
              background: #fff;
              border: 3px solid #6a4029;
              color: #6a4029;
            " @click="$bvModal.hide('deleteModal')">
            Cancel
          </button>
          <button class="btn btn-brown text-center float-right ml-3"
            style="width: 40%; margin-left: 5%; border: 3px solid #6a4029" @click="deleteConfirm()">
            Delete
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import componentHeader from '../components/headers'
import componentFooter from '../components/footers'
import { mapActions, mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  data () {
    return {
      invHolder: '',
      lostOrder: true,
      options: [
        { value: 3, text: 'Limit 3' },
        { value: 6, text: 'Limit 6' },
        { value: 9, text: 'Limit 9' },
        { value: 12, text: 'Limit 12', disabled: true }
      ],
      optionSort: [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' }
      ],
      optionFilter: [
        { value: '', text: 'All' },
        { value: 1, text: 'Pending' },
        { value: 0, text: 'Success' }
      ]
    }
  },
  mixins: [mixins],
  components: {
    componentHeader,
    componentFooter
  },
  computed: {
    ...mapGetters({
      optionPage: 'orders/optionPage',
      orders: 'orders/getAllOrders',
      userID: 'auth/getUserID',
      pagination: 'orders/getAllOrdersPagination'
    })
  },
  methods: {
    ...mapActions({
      getOrders: 'orders/actionGetAllOrders',
      deleteOrders: 'orders/deleteOrders'
    }),
    datailOrders (Invoice) {
      this.$router.push('/orders/' + Invoice)
    },
    getAll () {
      this.lostOrder = true
      this.orderQuery.user = Number(this.userID)
      this.getOrders(this.orderQuery)
        .then((res) => {
          this.lostOrder = false
        })
        .catch((err) => {
          this.lostOrder = false
          console.log(err)
        })
    },
    getOrderLimitQuery (page) {
      this.orderQuery.page = page
      this.getAll()
    },
    passDeleteInv (inv) {
      this.$bvModal.show('deleteModal')
      this.invHolder = inv
    },
    deleteConfirm () {
      this.swalLoading('Removing Your Data')
      this.deleteOrders(this.invHolder)
        .then((res) => {
          if (res.code === 200) {
            this.$bvModal.hide('deleteModal')
            this.swalLoadingClose()
            this.$swal('Delete Success', 'Your order has been deleted', 'success')
          } else {
            this.$bvModal.hide('deleteModal')
            this.swalLoadingClose()
            this.$swal('Delete Failed', res.msg, 'error')
          }
        })
        .catch((err) => {
          this.$bvModal.hide('deleteModal')
          this.swalLoadingClose()
          this.$swal('Delete failed', err.message, 'success')
        })
    }
  },
  mounted () {
    this.getAll()
  }
}
</script>

<style scoped>
.btndelete {
  z-index: 2;
  /* margin-top: -30px; */
  margin-top: -13%;
  background: #ffba33;
  border-radius: 50%;
  padding-left: 3%;
  padding-right: 3%;
}
.btnDetail {
  z-index: 2;
  /* margin-top: -30px; */
  margin-top: -13%;
  background: #6a4029;
  border-radius: 50%;
  padding-left: 3%;
  padding-right: 3%;
  margin-right: 15%;
}
.tittle {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.cardheight {
  margin-top: 10%;
  margin-left: 3%;
  margin-right: 3%;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
.cardheight:hover {
  background: #ffffff;
  opacity: 0.7;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}

.imgcard {
  max-width: 140px;
  width: 100%;
  height: 100%;
  max-height: 70px;
}
.fontstyle {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  font-size: 2vw;
  color: #000000;
}
.fontstyle2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  text-align: left;
  color: #895537;
}
</style>
