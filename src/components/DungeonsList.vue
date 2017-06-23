<template>
  <div id="dungeons" class="panel panel-default">
    <div class="panel-body">
      <div class="input-group">
        <input
          v-model="newDungName"
          v-on:keyup.enter="addNewDung"
          type="text" class="form-control" placeholder="Ajouter un donj">
        <span class="input-group-btn">
          <button
            v-on:click="addNewDung"
            class="btn btn-default" type="button">+</button>
        </span>
      </div>
    </div>
    <hidden-scrollbar class="scroll-container">
      <ul slot="scrollContent" class="list-group">
        <li
          is="dung-list-item"
          v-for="(dung, index) in dungeons"
          v-bind:key="dung"
          v-bind:title="dung.name"
          v-bind:maxDiff="dung.maxDiff"
          v-on:remove="del(dung)"
          class="list-group-item"></li>
      </ul>
    </hidden-scrollbar>
  </div>
</template>

<script>
import DungListItem from '@/components/DungListItem'
import HiddenScrollbar from '@/components/HiddenScrollbar'
import store from '@/vuex/store'

export default {
  name: 'dungeons-list',
  components: {
    DungListItem,
    HiddenScrollbar
  },
  data () {
    return {
      newDungName: ''
    }
  },
  computed: {
    dungeons () {
      return store.getters.dungeons
    }
  },
  methods: {
    addNewDung () {
      if (this.newDungName === '') {
        console.log('wtf ' + this.scrollbarWidth)
        return
      }
      // Dont create duplicate
      if (this.dungExist(this.newDungName)) {
        store.dispatch('showAlertBox', {
          type: 'warning',
          msg: 'Ce donjon existe déjà !'
        })
        this.newDungName = ''
        return
      }

      var newDung = {
        name: this.newDungName,
        maxDiff: 1
      }
      store.dispatch('addDung', newDung)
      this.newDungName = ''
    },
    dungExist (newDungName) {
      for (var i in this.dungeons) {
        if (this.dungeons[i].name === newDungName) {
          return true
        }
      }
      return false
    },
    del (dung) {
      store.dispatch('remDung', dung)
    }
  }
}
</script>


<style scoped>
#dungeons {
  width: 45%;
  height: 100%;
  float: right;
  border-radius: 0;
  border-right: 0;
}

.panel-body {
  height: 10%;
}

.scroll-container {
  height: 83%;
}
</style>
