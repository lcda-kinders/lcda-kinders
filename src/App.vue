<template>
  <div id="app">
    <div id="header" class="page-header">
      <h1>LCDA <small>Kinders</small></h1>
    </div>
    <router-view></router-view>
    <alert-box v-if="showAlertBox" @close="dismAlertBox"></alert-box>
  </div>
</template>

<script>
import AlertBox from '@/components/AlertBox'
import store from '@/vuex/store'

export default {
  name: 'app',
  components: {
    AlertBox
  },
  computed: {
    showAlertBox () {
      return store.getters.alertBox.show
    }
  },
  methods: {
    dismAlertBox () {
      store.dispatch('dismAlertBox')
    }
  }
}
</script>

<style>
#header {
  height: 12%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (orientation:portrait) { height: 100vh;
           width: 100vw; }
@media screen and (orientation:landscape) {height: 100vh;
           width: 100vw; }
</style>
