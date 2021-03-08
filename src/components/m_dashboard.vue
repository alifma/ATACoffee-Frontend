<template>
  <div style="height:100vh;background:#F2F2F2">
    <div class="row mx-0 my-0 p-4" style="height:10vh">
      <div class="col-2">
        <p class="mb-0 brown" @click="linkTo('product')"><i class="fas fa-angle-left"></i></p>
      </div>
      <div class="col-8 text-center">
        <p class="font-weight-bold font-poppins">Sales Chart</p>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container" style="height:90vh;overflow-y:scroll">
      <div class="row">
        <div class="col-1 col-md-2 col-lg-3">
        </div>
        <div class="col-10 col-md-8 col-lg-6 d-flex justify-content-center">
          <p @click="getReportRange('day', 'Daily' )" class="w-25 text-center font-weight-bold mx-1"
            style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
          <p @click="getReportRange('week', 'Weekly' )" class="w-25 text-center font-weight-bold mx-1"
            style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
          <p @click="getReportRange('month', 'Monthly')" class="w-25 text-center font-weight-bold mx-1"
            style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
        </div>
        <div class="col-1 col-md-2 col-lg-3">
        </div>
      </div>
      <div class="row">
        <div class="col-1 col-md-2 col-lg-3">
        </div>
        <div class="col-10 col-md-8 col-lg-6 d-flex justify-content-center">
          <p @click="getReportRange('day', 'Daily')" class="w-25 text-center font-weight-bold mx-1">Daily</p>
          <p @click="getReportRange('week', 'Weekly' )" class="w-25 text-center font-weight-bold mx-1">Weekly</p>
          <p @click="getReportRange('month', 'Monthly' )" class="w-25 text-center font-weight-bold mx-1">Monthly</p>
        </div>
        <div class="col-1 col-md-2 col-lg-3">
        </div>
      </div>
      <div class="row my-4">
        <div class="col-12">
          <div class="card p-4 shadow-lg" style="border-radius:25px">
            <div class="card-body">
              <div>
                <img @click="switchChart()" src="../assets/img/more.png" alt="" class="float-right" />
                <h5 class="font-poppins font-weight-bold">{{reportQuery.rangeDisplay}} Report</h5>
              </div>
              <p class="font-weight-light text-secondary" >Last 6 Month (Revenue : IDR
                {{formatPrice(formatPrice(Math.round((reportPagination.totalIncome*1.1)+(10000*reportPagination.allOrders))))}})
              </p>
              <div v-if="toggleChart">
                <img src="../assets/img/Chart.png" alt="" class="img-fluid" />
              </div>
              <div v-else>
                <div v-if="loadDashboard" class="row w-100">
                  <div class="w-100 text-center p-4 m-4">
                    <b-spinner variant="warning" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
                  </div>
                </div>
                <table v-else-if="report.length > 0" class="table table-responsive-sm">
                  <thead class="thead-dark text-center">
                    <tr>
                      <th scope="col">Inv</th>
                      <th scope="col">Cashier</th>
                      <th scope="col">Date</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in report" :key="index" class="text-center">
                      <th>{{item.inv}}</th>
                      <td>{{item.cashier}}</td>
                      <td>{{new Date(item.created_at).toLocaleDateString()}}</td>
                      <td>IDR {{formatPrice(Math.round((item.total*1.1)+10000))}}</td>
                      <td><button @click="gotoDetail(item.inv)" class="btn btn-sm btn-warning"><i
                            class="fas fa-eye"></i></button></td>
                    </tr>
                  </tbody>
                </table>
                <div v-else>
                  <h1 class="text-center font-poppins w-100">No Record</h1>
                </div>
              </div>
              <hr>
              <div>
                <div v-if="toggleChart">
                  <p class="mb-0 font-weight-bold font-poppins text-center text-secondary"> <span
                      style="color:#FFBA33">⬤</span> Income <span style="color:#6A4029">⬤</span> Outcome</p>
                </div>
                <div v-else>
                  <div class="row w-100">
                    <div class="col-12 mb-3 d-flex justify-content-center">
                      <p v-for="(index, page) in reportPagination.totalPages" :key="index"
                        class="mb-0 btn btn-warning mx-2" @click="getReportPage(page+1)">{{page+1}}</p>
                    </div>
                    <div class="col-4">
                      <b-form-select v-model="reportQuery.pending" @change="getReportPage(1)" size="sm"
                        :options="optionStatus">
                      </b-form-select>
                    </div>
                    <div class="col-4">
                      <b-form-select v-model="reportQuery.sort" @change="getReportPage(1)" size="sm"
                        :options="optionSort">
                      </b-form-select>
                    </div>
                    <div class="col-4">
                      <b-form-select v-model="reportQuery.limit" @change="getReportPage(1)" size="sm"
                        :options="optionLimit"></b-form-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12 text-center">
          <div class="card p-4 shadow-lg" style="border-radius:25px">
            <div class="card-body">
          <h5 class="font-weight-bold">Goals</h5>
          <p class="mb-0 font-weight-lighter text-secondary">Your goals is still on 76%. Keep up the good
            work!</p>
          <div class="progress mx-4">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 76%"></div>
          </div>
          <h3>76%</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <button @click="download()" style="font-size:20px;border-radius:25px;height:100px"
            class="btn mb-3 btn-brown w-100 h1 shadow-lg">Download Report</button>
        </div>
      </div>
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
      loadDashboard: true,
      optionLimit: [
        { value: 5, text: 'Limit 5' },
        { value: 10, text: 'Limit 10' },
        { value: 15, text: 'Limit 15' },
        { value: 20, text: 'Limit 20' }
      ],
      optionSort: [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' }
      ],
      optionStatus: [
        { value: '', text: 'All' },
        { value: 1, text: 'Pending' },
        { value: 0, text: 'Done' }
      ],
      toggleChart: true,
      formData: {
        name: '',
        image: 'https://free-icon-rainbow.com/i/icon_02035/icon_020350_256.png',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUserDetail',
      report: 'orders/report',
      reportPagination: 'orders/reportPagination'
    })
  },
  methods: {
    ...mapActions({
      actionGetUser: 'auth/getProfile',
      actionGetReport: 'orders/actionGetReport'
    }),
    getUser () {
      this.actionGetUser()
        .then((response) => {
          this.formData.name = response.firstname
          this.formData.image = response.image
          this.formData.email = response.email
        })
    },
    getReport () {
      this.loadDashboard = true
      this.actionGetReport(this.reportQuery)
        .then((res) => {
          // console.log(res)
          this.loadDashboard = false
        })
        .catch((err) => {
          this.loadDashboard = false
          console.log(err)
        })
    },
    getReportPage (page) {
      this.reportQuery.page = page
      this.getReport()
    },
    getReportRange (range, rangeText) {
      this.reportQuery.rangeDisplay = rangeText
      this.reportQuery.range = range
      this.getReportPage(1)
    },
    download () {
      this.swalAlert('Comming Soon', 'You will be able to download report', 'info')
    },
    share () {
      this.swalAlert('Comming Soon', 'You will be able to share report', 'info')
    },
    switchChart () {
      this.toggleChart = !this.toggleChart
    },
    gotoDetail (inv) {
      this.$router.push(`/orders/${inv}`)
    }
  },
  mounted () {
    this.getUser()
    this.getReport()
  }
}
</script>

<style>

</style>
