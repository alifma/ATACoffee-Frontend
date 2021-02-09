<template>
  <div>
    <h1 class="w-welcome">HOME</h1>
    <componentWelcome />
  </div>
</template>

<script>
import componentWelcome from '../components/m_welcome'
export default {
  name: 'Home',
  components: {
    componentWelcome
  }
}
</script>
<style src='../assets/css/styles.css'></style>
