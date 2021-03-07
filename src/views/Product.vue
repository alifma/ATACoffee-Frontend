<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <ctWebProductAdm />
    </div>
    <div class="block d-lg-none d-md-none">
      <mobileProduct />
    </div>
  </div>
</template>
<script>
import ctWebProductAdm from '../components/w-productadmin'
import mobileProduct from '../components/m_product'
export default {
  components: {
    ctWebProductAdm,
    mobileProduct
  }
}
</script>
