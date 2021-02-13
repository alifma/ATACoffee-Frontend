<template>
  <div>
    <!-- Header -->
    <cHeader />
    <!-- end Header -->
    <div class="jumbotron jumbotron-fluid">
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
                    <h4 class="fontstyle">Invoice: {{ item.inv }}</h4>
                    <p class="fontstyle2">Update : {{ item.update_at }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <cFooter />
    <!-- end footer -->
  </div>
</template>

<style scoped>
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
  font-size: 1.5vw;
  text-align: left;
  color: #895537;
}
.btnDetail {
  margin-top: -30px;
  background: #6a4029;
  border-radius: 50%;
  padding-left: 3%;
  padding-right: 3%;
}
</style>

<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    cHeader,
    cFooter
  },
  data () {
    return {
      form: {
        limit: '',
        user: ''

      }
    }
  },
  computed: {
    ...mapGetters({
      orders: 'orders/getAllOrders'
    })
  },
  methods: {
    ...mapActions({
      getOrders: 'orders/actionGetAllOrders'
    }),
    datailOrders (Invoice) {
      this.$router.push('/orders/' + Invoice)
    }
  },
  mounted () {
    this.getOrders(this.form)
  }
}

</script>
