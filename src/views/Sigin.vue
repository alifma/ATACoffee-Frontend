<template>
  <div>
    <div class="website">
      <componentSigninWeb />
    </div>
    <div class="mobile">
      <componentSignin />
    </div>
  </div>
</template>
<script>
import componentSigninWeb from '../components/w-signin'
import componentSignin from '../components/m_signin'
export default {
  components: {
    componentSigninWeb,
    componentSignin
  }
}
</script>
