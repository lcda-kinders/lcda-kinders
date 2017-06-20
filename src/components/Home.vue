<template>
  <div class="home">
    <left-panel></left-panel>
    <central-panel></central-panel>
    <right-panel></right-panel>
  </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
import CentralPanel from '@/components/CentralPanel'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'home',
  components: {
    LeftPanel,
    CentralPanel,
    RightPanel
  }
}
</script>

<style scoped>
.home {
  height: 85%;
  padding: 0;
  margin: 0;
}
</style>
