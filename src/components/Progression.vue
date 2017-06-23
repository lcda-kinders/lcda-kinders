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
    <hidden-scrollbar class="scroll-container">
      <table slot="scrollContent" class="table table-bordered">
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
    </hidden-scrollbar>
  </div>
</template>

<script>
import ProgressionRow from '@/components/ProgressionRow'
import HiddenScrollbar from '@/components/HiddenScrollbar'
import store from '@/vuex/store'

export default {
  name: 'progression',
  components: {
    ProgressionRow,
    HiddenScrollbar
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

.scroll-container {
  height: 90%;
}

table {
  table-layout: fixed;
  margin-bottom: 0;
}

.progressTransition-move {
  transition: all .5s;
}

</style>
