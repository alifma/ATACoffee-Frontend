<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <wCheckout/>
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mCheckout />
    </div>
  </div>
</template>

<script>
import wCheckout from '../components/w-checkOut'
import mCheckout from '../components/m_checkOut'
export default {
  components: {
    wCheckout,
    mCheckout
  }
}
</script>
