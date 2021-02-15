import Swal from 'sweetalert2'
export const mixins = {
  data () {
    return {
      webURL: process.env.VUE_APP_WEBURL,
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
        page: 1,
        sort: 'asc'
      },
      pendingQuery: {
        limit: 9,
        user: localStorage.getItem('id'),
        page: 1,
        sort: 'asc'
      },
      productQuery: {
        limit: 12,
        category: '',
        page: 1,
        name: '',
        sort: 'asc',
        order: 'created_at'
      },
      reportQuery: {
        limit: 10,
        page: 1,
        cashier: '',
        range: 'YEAR',
        rangeDisplay: 'Yearly',
        sort: 'desc',
        pending: 0
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
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        }
      })
    },
    swalLoadingClose () {
      Swal.close()
    }
  }
}
