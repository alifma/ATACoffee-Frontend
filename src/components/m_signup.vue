<template>
  <div v-if="!stateBtn">
    <componentSignFrom />
  </div>
  <div v-else>
    <div class="container-signup">
      <div class="bg-signup">
        <section class="m-signup">
          <h2 class="title-signup">Welcome!</h2>
          <p class="p-signup">
            Get a cup of coffee for free every sunday morning
          </p>
          <button @click="create" class="btn btn-create">
            Create New Account
          </button>
          <button @click="login" class="btn btn-login">Login</button>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import componentSignFrom from '../components/m_signup_form'
export default {
  data () {
    return {
      stateBtn: true
    }
  },
  components: {
    componentSignFrom
  }
}
</script>
