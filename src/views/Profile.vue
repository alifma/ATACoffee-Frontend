<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <webProfile/>
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileProfile/>
    </div>
  </div>
</template>

<script>
import webProfile from '../components/w_profile'
import mobileProfile from '../components/m_profile'
export default {
  components: {
    webProfile,
    mobileProfile
  }
}
</script>

<style>

</style>
