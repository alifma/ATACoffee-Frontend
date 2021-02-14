<template>
  <div>
    <cHeader />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center textheader">
            See how your store progress so far
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
      </div>
       <div class="col-4 d-flex justify-content-center">
         <p @click="getReportRange('day', 'Daily' )" class="w-25 text-center font-weight-bold mx-1" style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
         <p @click="getReportRange('week', 'Weekly' )" class="w-25 text-center font-weight-bold mx-1" style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
         <p @click="getReportRange('month', 'Monthly')" class="w-25 text-center font-weight-bold mx-1" style="border-radius:50px;color:#FFBA33;font-size:40px">◉</p>
       </div>
       <div class="col-4">
       </div>
    </div>
    <div class="row">
      <div class="col-4">
      </div>
       <div class="col-4 d-flex justify-content-center">
         <p @click="getReportRange('day', 'Daily')" class="w-25 text-center font-weight-bold mx-1">Daily</p>
         <p @click="getReportRange('week', 'Weekly' )" class="w-25 text-center font-weight-bold mx-1">Weekly</p>
         <p @click="getReportRange('month', 'Monthly' )" class="w-25 text-center font-weight-bold mx-1">Monthly</p>
       </div>
       <div class="col-4">
       </div>
    </div>
    <div class="row mt-4">
      <div class="col-8">
        <div class="card p-4 shadow-lg" style="border-radius:25px">
          <div class="card-body">
              <div>
                <img @click="switchChart()" src="../assets/img/more.png" alt="" class="float-right mt-3" />
                <h1 class="font-poppins font-weight-bold">{{reportQuery.rangeDisplay}} Report</h1>
              </div>
              <p class="font-weight-light text-secondary" style="font-size:20px">Last 6 Month (Revenue : IDR {{formatPrice(formatPrice(Math.round((reportPagination.totalIncome*1.1)+(10000*reportPagination.allOrders))))}})</p>
              <div v-if="toggleChart">
                <img src="../assets/img/Chart.png" alt="" class="img-fluid p-4" />
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
                      <td><button @click="gotoDetail(item.inv)" class="btn btn-sm btn-warning"><i class="fas fa-eye"></i></button></td>
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
                  <p class="font-weight-bold font-poppins text-center text-secondary"> <span style="color:#FFBA33">⬤</span> Income  <span style="color:#6A4029">⬤</span> Outcome</p>
               </div>
               <div v-else>
                 <div class="row w-100">
                   <div class="col-2 d-flex justify-content-left">
                     <p class="mb-0 my-auto">Page : {{reportQuery.page}} </p>
                   </div>
                   <div class="col-4 d-flex justify-content-center">
                     <p v-for="(index, page) in reportPagination.totalPages" :key="index" class="mb-0 btn btn-warning mx-2"
                       @click="getReportPage(page+1)">{{page+1}}</p>
                   </div>
                   <div class="col-2">
                     <b-form-select v-model="reportQuery.pending" @change="getReportPage(1)" size="sm"
                       :options="optionStatus">
                     </b-form-select>
                   </div>
                   <div class="col-2">
                     <b-form-select v-model="reportQuery.sort" @change="getReportPage(1)" size="sm"
                       :options="optionSort">
                     </b-form-select>
                   </div>
                   <div class="col-2">
                     <b-form-select v-model="reportQuery.limit" @change="getReportPage(1)" size="sm"
                       :options="optionLimit"></b-form-select>
                   </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-4">
       <div class="row mb-4">
         <div class="col">
            <div class="card shadow-lg font-poppins" style="border-radius:25px">
          <div class="card-body">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img  :src="`${webURL}/image/${user.image}`" class="card-img product-rounded" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{{user.name}}</h5>
                  <p class="card-text">{{user.email}}</p>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col text-center"><h5 class="font-weight-bold">Best Staff of the Month</h5>
              <div class="progress mx-4">
                <div class="progress-bar bg-success" role="progressbar" style="width: 80%" ></div>
              </div>
              <h3>80%</h3>
              <p class="mb-0 font-weight-lighter text-secondary">Achieved 3.5M of total 5M </p>
              <p class="mb-0 font-weight-lighter text-secondary">478 Customer</p>
              </div>
            </div>
          </div>
        </div>
         </div>
       </div>
       <div class="row">
         <div class="col">
            <div class="card shadow-lg font-poppins" style="border-radius:25px">
          <div class="card-body">
            <div class="row">
              <div class="col text-center"><h5 class="font-weight-bold">Goals</h5>
                <p class="mb-0 font-weight-lighter text-secondary">Your goals is still on 76%. Keep up the good work!</p>
             <div class="progress mx-4">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 76%" ></div>
              </div>
              <h3>80%</h3>
              </div>
            </div>
          </div>
        </div>
         </div>
       </div>
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div class="col-8">
          <button @click="download()" style="font-size:20px;border-radius:25px;height:100px" class="btn mb-3 btn-brown w-100 h1 shadow-lg">Download Report</button>
      </div>
      <div class="col-4">
        <button @click="share()" style="font-size:20px;border-radius:25px;height:100px" class="btn mb-3 btn-brown w-100 h1 shadow-lg">Share Report</button>
      </div>
    </div>
  </div>
    <hr>
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
  components: {
    cHeader,
    cFooter
  },
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
      toggleChart: false,
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
          console.log(res)
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

<style scoped>
.imgmore {
  max-width: 50px;
  width: 100%;
}
.btnreport {
  margin-top: 6%;
  margin-bottom: 2%;
  width: 80%;
  margin-left: 15%;
  background: #6a4029;
  box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.6);
  border-radius: 20px;
  height: 7%;
}
.spot2 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #6a4029;
  margin-left: 20%;
}
.spot1 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffba33;
  margin-left: 20%;
}
.textheader {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  color: #6a4029;
  margin-bottom: 5%;
  margin-top: 5%;
}
.imgchart {
  margin-top: 10%;
  max-width: 800px;
  width: 100%;
  padding-right: 10%;
}
.borders {
  border: 1px solid #d6d9dc;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 10%;
}
.cardmo {
  padding-left: 5%;
  margin-left: 15%;
  width: 80%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
}
.btnshere {
  background: #6a4029;
  box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.6);
  border-radius: 20px;
  height: 120%;
  width: 80%;
}
.per {
  margin-top: 20%;
  margin-bottom: 20%;
}
.goal {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  /* color-black */

  color: #000000;
}
.textach {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: #7c828a;
}
.textprecent {
  margin-top: 10%;
}
.donat2 {
  margin-left: 30%;
  margin-top: 10%;
  background-color: red;
}
.cardbody {
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 10%;
  width: 80%;
  box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
}
.textbest {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
}
.borderside {
  border: 1px solid #d6d9dc;
  margin-top: 5%;
  margin-bottom: 5%;
}
.cardtext {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;

  /* color-black */

  color: #000000;
}
.imgprofile {
  max-width: 100px;
  width: 100%;
  border-radius: 50%;
}
.textleft {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}
</style>
