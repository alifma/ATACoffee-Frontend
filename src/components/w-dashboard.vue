<template>
  <div>
    <cHeader />
    <div class="container-fluid" style="background: #dedede">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center textheader">
            See how your store progress so far
          </h1>
        </div>
        <div class="col-8">
          <div class="card cardmo">
            <div class="body-card">
              <div class="row">
                <div class="col-10">
                  <h3 class="cardtext mt-3">Monthly Report</h3>
                  <p>Last 6 months</p>
                </div>
                <div class="col-2">
                  <img src="../assets/img/more.png" alt="" class="mt-4" />
                </div>
                <div class="col-12">
                  <img src="../assets/img/Chart.png" alt="" class="imgchart" />
                  <div class="borders"></div>
                  <div class="list-inline mb-4">
                    <div class="list-inline-item spot1"></div>
                    <p class="list-inline-item ml-3">income</p>
                    <div class="list-inline-item spot2"></div>
                    <p class="list-inline-item ml-3">Outcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-block btn-primary btnreport">
            <h3>Download Report</h3>
          </button>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <div class="card cardbody">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="../assets/img/bg-Profile.png"
                        alt=""
                        class="imgprofile"
                      />
                    </div>
                    <div class="col-8">
                      <h5 class="textleft">cheryn laurent</h5>
                      <p>
                        Cheryn Laurent Keep up the good work and spread love!
                      </p>
                    </div>
                  </div>
                  <div class="borderside"></div>
                  <div class="row">
                    <div class="col-12">
                      <h4 class="textbest text-center">
                        Best Staff of the Month
                      </h4>
                    </div>
                    <div class="col-12">
                      <h1 class="text-center textprecent">80%</h1>
                    </div>
                    <div class="col-12">
                      <h3 class="textach">
                        Achieved 3.5M of total 5M 478 Customer
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card cardbody">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h1 class="text-center textleft">GOALs</h1>
                      <h3 class="textach">
                        Your goals is still on 76%. Keep up the good work!
                      </h3>
                    </div>
                    <div class="col-12">
                      <h1 class="text-center per">76%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-block btn-primary mb-1 btnshere">
                <h3>SHERE REPORT</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cFooter />
  </div>
</template>

<style scoped>
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
  width: 100px;
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

<script>
import cHeader from '../components/headers'
import cFooter from '../components/footers'
export default {
  components: {
    cHeader,
    cFooter
  }

}
</script>
