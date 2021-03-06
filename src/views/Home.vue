<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <componentHome />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileHome/>
    </div>
  </div>
</template>

<script>
import componentHome from '../components/w-home'
import mobileHome from '../components/m_welcome'
export default {
  name: 'Home',
  components: {
    componentHome,
    mobileHome
  }
}
</script>
