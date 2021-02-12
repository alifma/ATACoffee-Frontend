<template>
  <div class="website">
    <cheader />
    <section class="body-profile">
      <div class="container">
        <button
          @click="logout()"
          class="btn-brown p-2 w-25 mt-5"
          style="border-radius: 10px; float: right; border: none"
        >
          Logout
        </button>
      </div>
    </section>
    <cfooter />
  </div>
</template>
<script>
import cheader from '../components/headers'
import cfooter from '../components/footers'
import { mapActions } from 'vuex'
export default {
  components: {
    cheader,
    cfooter
  },
  methods: {
    ...mapActions({
      signout: 'auth/logout'
    }),
    logout () {
      this.signout().then((response) => {
        if (response) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
