<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <componentWebSignup />
    </div>
    <div class="d-block d-lg-none d-md-none">
      <mobileSignup />
    </div>
  </div>
</template>
<script>
import componentWebSignup from '../components/w-signup'
import mobileSignup from '../components/m_signup_form'
export default {
  components: {
    componentWebSignup,
    mobileSignup
  }
}
</script>
