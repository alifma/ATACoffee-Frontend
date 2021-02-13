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
        limit: 9,
        user: localStorage.getItem('id'),
        pending: '',
        page: 1
      },
      pendingQuery: {
        limit: 9,
        user: localStorage.getItem('id'),
        page: 1,
        sort: 'asc'
      },
      productQuery: {
        limit: 4,
        category: '',
        page: 1,
        name: '',
        sort: 'asc',
        order: 'created_at'
      }
    }
  },
  methods: {
    // Format Currency
    formatPrice (value) {
      return value.toLocaleString().replace(/,/g, '.')
    },
    swalToast (icon, title) {
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
