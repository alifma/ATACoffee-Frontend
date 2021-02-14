<template>
  <div
    style="
      background-image: url('https://i.ibb.co/xG1TYf0/bg-History.png');
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <!-- Header -->
    <componentHeader />
    <div v-if="orders.length > 0">
      <div class="container py-4">
        <h1
          class="text-white text-center tittle pt-4"
          style="font-size: 40px; text-shadow: 2px 2px 4px #000000"
        >
          Let's see what you have bought!
        </h1>
      </div>
       <!-- modal delete order -->
            <b-modal
              id="deleteModal"
              hide-footer
              hide-header
              title="Using Component Methods"
              centered
            >
              <div class="p-5">
                <div class="d-block text-center">
                  <p
                    class="font-poppins font-weight-light"
                    style="font-size: 20px"
                  >
                    Are you sure want to delete this order?
                  </p>
                </div>
                <div class="w-100">
                  <button
                    class="btn btn-primary text-center float-left mr-3 font-weight-bold"
                    style="
                      width: 40%;
                      margin-right: 5%;
                      background: #fff;
                      border: 3px solid #6a4029;
                      color: #6a4029;
                    "
                    @click="$bvModal.hide('deleteModal')"
                  >
                    Cancel
                  </button>
                  <button
                    class="btn btn-brown text-center float-right ml-3"
                    style="
                      width: 40%;
                      margin-left: 5%;
                      border: 3px solid #6a4029;
                    "
                    @click="deleteConfirm(item.inv)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </b-modal>
            <!-- end modal delete order -->
      <div class="container mb-4">
        <div class="row mb-4">
          <div
            class="col col-sm-6 col-lg-4 mt-2"
            v-for="(item, index) in orders"
            :key="index"
          >
            <!--  -->
            <div class="card cardheight">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <button
                      class="btndelete float-right"
                      @click="$bvModal.show('deleteModal')"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                    <button
                      class="btnDetail float-right"
                      @click="datailOrders(item.inv)"
                    >
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
                    <p
                      v-if="item.isPending === 1"
                      class="text-danger font-weight-bold mb-0"
                    >
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
        <div class="card row" style="border-radius: 25px">
          <div class="card-body col w-100 d-flex">
            <div class="row w-100">
              <div class="col-2 d-flex justify-content-left">
                <p class="mb-0 my-auto">Page : {{ orderQuery.page }}</p>
              </div>
              <div class="col-4 d-flex justify-content-center">
                <p class="mb-0 my-auto">Select :</p>
                <p
                  v-for="(index, page) in pagination.totalPages"
                  :key="index"
                  class="mb-0 btn btn-warning mx-2"
                  @click="getOrderLimitQuery(page + 1)"
                >
                  {{ page + 1 }}
                </p>
              </div>
              <div class="col-2">
                <b-form-select
                  v-model="orderQuery.pending"
                  @change="getOrderLimitQuery(1)"
                  size="sm"
                  :options="optionFilter"
                >
                </b-form-select>
              </div>
              <div class="col-2">
                <b-form-select
                  v-model="orderQuery.sort"
                  @change="getOrderLimitQuery(1)"
                  size="sm"
                  :options="optionSort"
                >
                </b-form-select>
              </div>
              <div class="col-2">
                <b-form-select
                  v-model="orderQuery.limit"
                  @change="getOrderLimitQuery(1)"
                  size="sm"
                  :options="options"
                ></b-form-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="container py-4 d-flex justify-content-center"
        style="height: 50vh"
      >
        <h1
          class="text-white text-center my-auto font-rubik"
          style="font-size: 40px; text-shadow: 2px 2px 4px #000000"
        >
          You have no order!<br />
          Start your order now
        </h1>
      </div>
    </div>
    <!-- end Header -->
    <!-- <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <h1 class="tittle text-center">Let's see what you have bought!</h1>
        <div class="row">
          <div
            class="col col-sm-6 col-lg-4"
            v-for="(item, index) in orders"
            :key="index"
          >
            <div class="card cardheight">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <button
                      class="btnDetail float-right"
                      @click="datailOrders(item.inv)"
                    >
                      <i class="fas fa-shopping-bag"></i>
                    </button>
                    <h4 class="fontstyle mb-0">Invoice: {{ item.inv }}</h4>
                    <p class="fontstyle2 mb-0">Created : {{ new Date(item.created_at).toLocaleDateString() }}</p>
                    <p class="fontstyle2 mb-0">Update : {{ item.updated_at === null ? '-' : new Date().toLocaleDateString() }}</p>
                    <p v-if="item.isPending === 1" class="text-danger font-weight-bold mb-0">Pending</p>
                    <p v-else class="font-weight-bold mb-0"><span class="text-success">Done</span> (Cashier : {{item.cashier}})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- footer -->
    <componentFooter />
    <!-- end footer -->
    <b-modal
      id="deleteModal"
      hide-footer
      hide-header
      title="Using Component Methods"
      centered
    >
      <div class="p-5">
        <div class="d-block text-center">
          <p class="font-poppins font-weight-light" style="font-size: 20px">
            Are you sure want to delete this order?
          </p>
        </div>
        <div class="w-100">
          <button
            class="btn btn-primary text-center float-left mr-3 font-weight-bold"
            style="
              width: 40%;
              margin-right: 5%;
              background: #fff;
              border: 3px solid #6a4029;
              color: #6a4029;
            "
            @click="$bvModal.hide('deleteModal')"
          >
            Cancel
          </button>
          <button
            class="btn btn-brown text-center float-right ml-3"
            style="width: 40%; margin-left: 5%; border: 3px solid #6a4029"
            @click="deleteConfirm(inv)"
          >
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
      this.orderQuery.user = Number(this.userID)
      this.getOrders(this.orderQuery)
    },
    getOrderLimitQuery (page) {
      this.orderQuery.page = page
      this.getAll()
    },
    deleteConfirm (inv) {
      this.deleteOrders(inv)
        .then((res) => {
          if (res.code === 200) {
            this.$bvModal.hide('deleteModal')
            this.$swal('Delete Success', 'Your order has been deleted', 'success')
          } else {
            this.$bvModal.hide('deleteModal')
            this.$swal('Delete Failed', res.msg, 'error')
          }
        })
        .catch((err) => {
          this.$bvModal.hide('deleteModal')
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
