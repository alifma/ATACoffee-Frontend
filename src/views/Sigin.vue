<template>
  <div>
    <div class="d-none d-md-block d-lg-block">
      <componentSigninWeb />
    </div>
    <div class="d-block d-md-none d-lg-none">
      <mobileSignin />
    </div>
  </div>
</template>
<script>
import componentSigninWeb from '../components/w-signin'
import mobileSignin from '../components/m_signin'
export default {
  components: {
    componentSigninWeb,
    mobileSignin
  }
}
</script>
