<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <wDashboard />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mDashboard />
    </div>
  </div>
</template>

<script>
import wDashboard from '../components/w-dashboard'
import mDashboard from '../components/m_dashboard'
export default {
  components: {
    wDashboard,
    mDashboard
  }
}
</script>
