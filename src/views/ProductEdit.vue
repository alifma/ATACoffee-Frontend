<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <productEdit />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileEdit />
    </div>
  </div>
</template>
<script>
import productEdit from '../components/w-productEdit'
import mobileEdit from '../components/m_productEdit'
export default {
  components: {
    productEdit,
    mobileEdit
  }
}
</script>
