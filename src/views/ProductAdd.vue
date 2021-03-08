<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <productAdd />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileProductAdd />
    </div>
  </div>
</template>
<script>
import productAdd from '../components/w-productAdd'
import mobileProductAdd from '../components/m_productAdd'
export default {
  components: {
    productAdd,
    mobileProductAdd
  }
}
</script>
