<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <componentDetailOrders />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileDetailOrders />
    </div>
  </div>
</template>

<script>
import componentDetailOrders from '../components/w-detailOrders'
import mobileDetailOrders from '../components/m_detailOrders'
export default {
  components: {
    componentDetailOrders,
    mobileDetailOrders
  }
}
</script>
