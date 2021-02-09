<template>
  <div class="container-signup-form">
    <section class="m-signup-form">
      <h2 class="title-signup-form">Sign Up</h2>
      <img
        class="img-signup-form"
        src="../assets/img/img3.png"
        alt="img3.png"
      />
      <form action="" @submit.prevent="onCreate()">
        <input
          v-model="formCreate.email"
          type="text"
          placeholder="Enter your email adress"
          class="form-m-email"
        />
        <input
          v-model="formCreate.password"
          type="password"
          placeholder="Enter your password"
          class="form-m-password"
        />
        <input
          v-model="formCreate.phone"
          type="text"
          placeholder="Enter your phone number (62)"
          class="form-m-phone"
        />
        <button type="submit" class="btn btn-create-account">
          Create Account
        </button>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formCreate: {
        email: '',
        password: '',
        phone: ''
      }
    }
  },
  methods: {
    onCreate () {
      // aksi ke axios atau db
      if (!this.formCreate.email ||
      !this.formCreate.password ||
      !this.formCreate.phone) {
        alert('kosong, diisi dulu ya!')
      } else {
        alert('lihat console dan tekan F5 blm di arahin ke laman lain soalnya')
        console.log(this.formCreate)
      }
    }
  }
}
</script>
