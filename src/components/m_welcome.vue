<template>
  <section class="m-welcome">
    <h2 class="m-title">Coffee for Everyone</h2>
    <img class="m-img1" src="../assets/img/img1.png" alt="img1" />
    <button @click="start" class="btn btn-start">Get started</button>
  </section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    start () {
      this.$router.push('/signup')
    }
  }
}
</script>
