<template>
  <div>
    <div class="d-none d-md-block d-lg-block">
      <wWaitingList />
    </div>
    <div class="d-block d-md-none d-lg-none">
      <mWaitingList />
    </div>
  </div>
</template>

<script>
import wWaitingList from '../components/w-waitingList'
import mWaitingList from '../components/m_waitingList'
export default {
  components: {
    wWaitingList,
    mWaitingList
  }
}
</script>
