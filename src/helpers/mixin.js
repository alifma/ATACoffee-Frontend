import Swal from 'sweetalert2'
export const mixins = {
  data () {
    return {
      Toast: Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      }),
      orderQuery: {
        limit: 9
      },
      productQuery: {
        limit: 12,
        category: ''
      }
    }
  },
  methods: {
    // Format Currency
    formatPrice (value) {
      return value.toLocaleString().replace(/,/g, '.')
    },
    swalToast (title, icon) {
      this.Toast.fire({
        icon,
        title
      })
    },
    swalAlert (title, text, icon) {
      Swal.fire({
        icon,
        title,
        text
      })
    },
    swalLoading (title) {
      Swal.fire({
        title: title,
        allowOutsideClick: true,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        }
      })
    }
  }
}
