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
    } // ,
    // getScrollbarWidth () {
    //   var outer = document.createElement('div')
    //   outer.style.visibility = 'hidden'
    //   outer.style.width = '100px'
    //   outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
    //   document.body.appendChild(outer)
    //   var widthNoScroll = outer.offsetWidth
    //
    //   // force scrollbars
    //   outer.style.overflow = 'scroll'
    //
    //   // add innerdiv
    //   var inner = document.createElement('div')
    //   inner.style.width = '100%'
    //   outer.appendChild(inner)
    //   var widthWithScroll = inner.offsetWidth
    //
    //   // remove divs
    //   outer.parentNode.removeChild(outer)
    //   return widthNoScroll - widthWithScroll
    // }
  } // ,
  // beforeMount () {
  //   var scrollbarWidth = this.getScrollbarWidth()
  //   store.dispatch('setScrollbarWidth', scrollbarWidth)
  // }
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
