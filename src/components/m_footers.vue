<template>
  <div class="container pb-3 text-secondary" style="height:5vh">
    <div class="row">
      <div class="col-3">
        <p class="text-left">
          <i class="fas fa-lg mx-4 fa-home"></i>
        </p>
      </div>
      <div v-if="getAccess !== null" class="col-9 text-right">
        <p class="text-right d-inline" @click="linkTo('profile')">
          <i class="far fa-lg fa-user mx-4" ></i>
        </p>
        <p class="text-right d-inline">
          <i class="far fa-lg fa-comment-dots mx-4"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins],
  computed: {
    ...mapGetters({
      getAccess: 'auth/getAccess'
    })
  }
}
</script>

<style>

</style>
