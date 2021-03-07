<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <ctWebProductDetail />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mProductDetail />
    </div>
  </div>
</template>
<script>
import ctWebProductDetail from '../components/w-productDetail'
import mProductDetail from '../components/m_ProductDetail'
export default {
  components: {
    ctWebProductDetail,
    mProductDetail
  }
}
</script>
