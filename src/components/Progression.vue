<template>
  <div id="progression">
    <table class="table table-bordered header-table">
      <thead>
        <tr>
          <th class="header-cells"></th>
          <th class="header-cells" style="color: grey" v-on:click="orderByDiff(0)">Normal</th>
          <th class="header-cells" style="color: #00dadf" v-on:click="orderByDiff(1)">Difficile</th>
          <th class="header-cells" style="color: #ffcf40" v-on:click="orderByDiff(2)">Épique</th>
          <th class="header-cells" style="color: orange" v-on:click="orderByDiff(3)">Légendaire</th>
          <th class="header-cells" style="color: red" v-on:click="orderByDiff(4)">Inimaginable</th>
        </tr>
      </thead>
    </table>
    <div class="hide-scroll">
      <div class="scrollable" id="scrollable" ref="scrollable">
        <table class="table table-bordered">
          <tbody
            is="transition-group"
            name="progressTransition">
            <tr
            is="progression-row"
            v-for="(dung, index) in dungeons"
            v-bind:key="dung"
            v-bind:item="dung">
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressionRow from '@/components/ProgressionRow'
import store from '@/vuex/store'

export default {
  name: 'progression',
  components: {
    ProgressionRow
  },
  computed: {
    currentCharIs () {
      return store.getters.charListItems.currentIs
    },
    dungeons () {
      var prog = store.getters.progression
      for (var i in prog) {
        if (prog[i].name === this.currentCharIs.name) {
          return prog[i].dungeons
        }
      }
    },
    scrollbarWidth () {
      var sbw = store.getters.scrollbarWidth
      return sbw === undefined ? '00' : sbw
    }
  },
  methods: {
    orderByDiff (diff) {
      var r = {
        character: this.currentCharIs.name,
        diff: diff
      }
      store.dispatch('orderProgressByDiff', r)
    }
  },
  mounted () {
    var el = this.$refs.scrollable
    var offset = this.scrollbarWidth
    el.style.marginRight = '-1' + offset + 'px'
  }
}
</script>

<style scoped>

#progression {
  height: 93%;
}

.header-table {
  height: 10%;
}

.header-cells {
  background-color: #f9f9f9;
  text-align: center;
  border: 0;
}

.hide-scroll {
  overflow: hidden;
  height: 90%;
}

.scrollable {
  max-height: 100%;
  /*margin-right: -113px;*/
  padding-right: 100px;
  overflow-y: scroll;
}

table {
  table-layout: fixed;
  margin-bottom: 0;
}

.progressTransition-move {
  transition: all .5s;
}

</style>
