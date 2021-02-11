<template>
  <div>
    <div class="website">
      <!-- <ctWebProductAdm /> -->
      <ctWebProductCs />
    </div>
    <div class="mobile">
      <cMobileProduct />
    </div>
  </div>
</template>
<script>
// import ctWebProductAdm from '../components/w-productadmin'
import ctWebProductCs from '../components/w-productcust'
import cMobileProduct from '../components/m_product'
export default {
  components: {
    // ctWebProductAdm,
    ctWebProductCs,
    cMobileProduct
  }
}
</script>
