<template>
  <div>
    <div class="website">
      <ctWebProductAdm />
      <!-- <ctWebProductCs /> -->
      <!-- <cWebNewProduct /> -->
    </div>
    <!-- <div class="mobile">
      <cMobileProduct />
    </div> -->
  </div>
</template>
<script>
import ctWebProductAdm from '../components/w-productadmin'
// import ctWebProductCs from '../components/w-productcust'
// import cWebNewProduct from '../components/w-newproduct'
// import cMobileProduct from '../components/m_product'
export default {
  components: {
    ctWebProductAdm
    // ctWebProductCs,
    // cWebNewProduct,
    // cMobileProduct
  }
}
</script>
