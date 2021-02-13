<template>
  <div>
    <div class="website">
      <componentHome />
    </div>
    <div class="mobile">
      <componentWelcome />
    </div>
  </div>
</template>

<script>
import componentWelcome from '../components/m_welcome'
import componentHome from '../components/w-home'
export default {
  name: 'Home',
  components: {
    componentWelcome,
    componentHome
  }
}
</script>
<style src='../assets/css/styles.css'></style>
