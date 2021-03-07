<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <componentOrders />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileOrders />
    </div>
  </div>
</template>

<script>
import componentOrders from '../components/w-orders'
import mobileOrders from '../components/m_orders'
export default {
  components: {
    componentOrders,
    mobileOrders
  }
}
</script>
