// import Swal from 'sweetalert2'
export const mixins = {
  data () {
    return {
    }
  },
  methods: {
    // Format Currency
    formatPrice (value) {
      return value.toLocaleString().replace(/,/g, '.')
    }
  }
}
