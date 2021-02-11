<template>
  <div style="background:#dedede">
    <cHeader />
    <div class="container pt-4">
      <div id="breadcrumb-productDetails" class="d-inline">
        <p class="mb-0 text-secondary font-rubik d-inline">Favorite & Promo</p>
        <p class="mb-0 font-weight-bold font-active font-rubik d-inline"> > Cold Brew</p>
      </div>
      <div>
        <div class="row py-4">
          <div class="col-md-5 col-lg-5 text-center">
            <img style="width:75%" class="product-rounded" src="http://52.91.116.102:3001/image/defaultFood.png" alt="">
            <div class="mt-4">
              <h1 class="font-poppins font-weight-bolder">COLD BREW</h1>
              <h5 class="font-poppins font-weight-light">IDR 30.000</h5>
            </div>
          </div>
          <div class=" col-md-7 col-lg-7">
            <div class="container h-100">
              <section class="info-product p-4">
                <div class="row p-4">
                  <div class="col">
                    <p class="font-poppins brown" style="font-size:20px">Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b></p>
                    <p class="font-poppins brown" style="text-align:justify; font-size:20px;">Cold brewing is a method of brewing that
                      combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is
                      brewed in small batches and steeped for as long as 48 hours.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col text-center">
                    <h5 class="font-weight-bolder font-poppins">Choose a size</h5>
                    <button class="btn btn-warning font-weight-bolder font-poppins mx-3" style="border-radius:50px;height:50px;width:50px;">R</button>
                    <button class="btn btn-warning font-weight-bolder font-poppins mx-3" style="border-radius:50px;height:50px;width:50px;">L</button>
                    <button class="btn btn-warning font-weight-bolder font-poppins mx-3" style="border-radius:50px;height:50px;width:50px;">XL</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-lg-5 text-center">
            <div style="width:75%" class="mx-auto d-flex flex-column">
              <button style="font-size:20px;border-radius:250px;height:60px" class="btn mb-3 btn-brown ">Add to Cart</button>
              <button style="font-size:20px;border-radius:250px;height:60px" class="btn mb-3 btn-yellow ">Edit Product</button>
              <button style="font-size:20px;border-radius:250px;height:60px" class="btn mb-3 btn-black ">Delete Menu</button>
            </div>
          </div>
          <div class=" col-md-7 col-lg-7">
            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <h5 class="font-weight-bolder font-poppins mb-4">Choose Delivery Methods</h5>
                  <div class="row">
                    <div class="col">
                      <button style="border-radius:10px" class="btn btn-brown font-weight-bolder font-poppins mx-3">Dine
                        In</button>
                      <button style="border-radius:10px"
                        class="btn btn-secondary disabled font-weight-bolder font-poppins mx-3">Door Delivery</button>
                      <button style="border-radius:10px"
                        class="btn btn-secondary disabled font-weight-bolder font-poppins mx-3">Pick Up</button>
                    </div>
                  </div>
                  <div class="row my-4">
                    <div class="col d-flex">
                      <p>Set Time: </p>
                      <input type="text" class="form-control-plaintext" id="staticEmail2" value="email@example.com">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  </div>
</template>

<script>
import cHeader from '../components/headers'
export default {
  components: {
    cHeader
  }

}
</script>
