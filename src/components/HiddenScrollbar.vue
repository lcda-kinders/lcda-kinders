<template>
  <div class="hide-scroll">
    <div id="scrollable" ref="scrollable">
      <slot name="scrollContent"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hidden-scrollbar',
  methods: {
    getScrollbarWidth () {
      var outer = document.createElement('div')
      outer.style.visibility = 'hidden'
      outer.style.width = '100px'
      outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
      document.body.appendChild(outer)
      var widthNoScroll = outer.offsetWidth

      // force scrollbars
      outer.style.overflow = 'scroll'

      // add innerdiv
      var inner = document.createElement('div')
      inner.style.width = '100%'
      outer.appendChild(inner)
      var widthWithScroll = inner.offsetWidth

      // remove divs
      outer.parentNode.removeChild(outer)
      return widthNoScroll - widthWithScroll
    }
  },
  mounted () {
    var el = this.$refs.scrollable
    var offset = this.getScrollbarWidth()
    el.style.marginRight = '-1' + offset + 'px'
  }
}
</script>

<style scoped>

.hide-scroll {
  overflow: hidden;
}

#scrollable {
  height: 100%;
  /*margin-right: -113px;*/
  padding-right: 100px;
  overflow-y: scroll;
}

</style>
