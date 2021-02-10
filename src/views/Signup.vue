<template>
  <div>
    <div class="website">
      <componentWebSignup />
    </div>
    <div class="mobile">
      <componentSigup />
    </div>
  </div>
</template>
<script>
import componentWebSignup from '../components/w-signup'
import componentSigup from '../components/m_signup'
export default {
  components: {
    componentWebSignup,
    componentSigup
  }
}
</script>
