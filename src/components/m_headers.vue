<template>
  <div class="container py-3 text-secondary" style="height:8vh">
    <div class="row">
      <div class="col-6">
        <b-button v-b-toggle.sidebar-1>
          <p class="text-left mb-0">
            <i class="fas fa-lg mx-4 fa-align-left"></i>
          </p>
        </b-button>
      </div>
      <div class="col-6">
        <p class="text-right" @click="linkTo('checkout')">
          <i class="fas fa-lg mx-4 fa-shopping-cart"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '../helpers/mixin'
export default {
  mixins: [mixins]

}
</script>

<style>

</style>
