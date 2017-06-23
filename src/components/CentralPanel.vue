<template>
  <div class="panel panel-default panel-central">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li
          v-show="currentCharIs.active"
          v-bind:class="{ active: centralPanel.navTab.progression }">
          <a v-on:click="navClick('progression')" href="#">Progression</a>
        </li>
        <li
          v-show="currentCharIs.active"
          v-bind:class="{ active: centralPanel.navTab.kinderPlan }">
          <a v-on:click="navClick('kinderPlan')" href="#">Kinder Plan</a>
        </li>
        <li v-bind:class="{ active: centralPanel.navTab.general }">
          <a v-on:click="navClick('general')" href="#">Général</a>
        </li>
      </ul>
    </div>

      <dungeons-list v-show="centralPanel.navTab.general"></dungeons-list>
      <progression v-show="centralPanel.navTab.progression"></progression>
      <kinder-plan v-show="centralPanel.navTab.kinderPlan"></kinder-plan>
  </div>
</template>

<script>
import DungeonsList from '@/components/DungeonsList'
import Progression from '@/components/Progression'
import KinderPlan from '@/components/KinderPlan'
import store from '@/vuex/store'

export default {
  name: 'central-panel',
  components: {
    DungeonsList,
    Progression,
    KinderPlan
  },
  computed: {
    centralPanel () {
      return store.getters.centralPanel
    },
    currentCharIs () {
      return store.getters.charListItems.currentIs
    }
  },
  watch: {
    currentCharIs: function (val, old) {
      if (!val.active) {
        store.dispatch('actNavTab', 'general')
      }
      if (old.name === '') {
        store.dispatch('actNavTab', 'progression')
      }
    }
  },
  methods: {
    navClick (tab) {
      store.dispatch('actNavTab', tab)
      if (tab === 'general') {
        store.dispatch('desCharListItem')
      }
    }
  }
}
</script>

<style scoped>
.panel-central {
  height: 100%;
  width: 60%;
  float: left;

  border-radius: 0;
  border-left: 0;
  border-right: 0;
}

.panel-heading {
  height: 7%;
}

.navTabTransition-move {
  transition: all .5s;
}
</style>
