<template>
  <div>
    <div class="website">
      <ctWebProduct />
    </div>
    <div class="mobile">
      <cMobileProduct />
    </div>
  </div>
</template>
<script>
import ctWebProduct from '../components/w-product'
import cMobileProduct from '../components/m_product'
export default {
  components: {
    ctWebProduct,
    cMobileProduct
  }
}
</script>
