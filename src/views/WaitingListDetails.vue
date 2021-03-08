<template>
  <div>
    <div class="d-none d-md-block d-lg-block">
      <wWaitingListDetails />
    </div>
    <div class="d-block d-md-none d-lg-none">
      <mWaitingListDetails />
    </div>
  </div>
</template>

<script>
import wWaitingListDetails from '../components/w-waitingListDetail'
import mWaitingListDetails from '../components/m_waitingListDetail'
export default {
  components: {
    wWaitingListDetails,
    mWaitingListDetails
  }
}
</script>
