<template>
  <tr>
    <td class="nameCells">{{ item.name }}</td>
    <td
    v-for="n in 5"
    v-bind:class="{ disabledCells: n > item.maxDiff , openCells: item.progress[n -1] > 0 && n <= item.maxDiff, closedCells: item.progress[n -1] === 0 && n <= item.maxDiff}"
    class="clickableParent">
    <div
    v-if="n <= item.maxDiff"
    v-on:click="modProgress(n)"
    class="clickable">
      <transition name="iconOkTransition">
        <div v-if="item.progress[n -1] === 2" class="iconCenter">
          <span class="glyphicon glyphicon-ok"></span>
        </div>
      </transition>
    </div>
  </td>
</tr>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'progression-row',
  props: ['item'],
  computed: {
    currentCharIs () {
      return store.getters.charListItems.currentIs
    }
  },
  methods: {
    modProgress (n) {
      store.dispatch('modProgress', {
        character: this.currentCharIs.name,
        dungeon: this.item.name,
        diff: n
      })
    }
  }
}
</script>

<style scoped>
.iconCenter {
  margin: 0 auto;
  width: 25%;
  line-height: 36px;
}

.nameCells {
  background-color: #428bca;
  color: white;
}

.clickableParent {
  padding: 0px;
}

.clickable {
  width: 100%;
  height: 36px;
}

.clickable :hover {
  cursor: pointer;
}

.openCells {
  background-color: #5cb85c;
  color: white;
}

.closedCells {
  background-color: #d9534f;
}

.disabledCells {
  background-color: #999999;
}

.iconOkTransition-enter-active {
  transition: all .3s ease;
}
.iconOkTransition-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.iconOkTransition-enter, .iconOkTransition-leave-to {
  opacity: 0;
}
</style>
