<template>
  <div class="panel panel-default panel-left">
    <div class="panel-heading">Personnages</div>
    <div class="panel-body">
      <div class="input-group">
        <input
          v-model="newCharName"
          v-on:keyup.enter="addNewChar"
          type="text" class="form-control" placeholder="Ajouter un perso">
        <span class="input-group-btn">
          <button
            v-on:click="addNewChar"
            class="btn btn-default" type="button">+</button>
        </span>
      </div>
    </div>

    <div class="hide-scroll">
      <div class="scrollable" id="scrollable" ref="scrollable">
        <transition-group
          tag="ul"
          name="charListTransition"
          id="charList"
          class="nav nav-pills nav-stacked">
          <li
            is="char-list-item"
            v-for="(char, index) in characters"
            v-bind:key="char"
            v-bind:title="char.name"
            v-bind:class="{ active: char.active }"
            v-on:activate="activate(char)"
            class="charListTransition-item"></li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import CharListItem from '@/components/CharListItem'
import store from '@/vuex/store'

export default {
  name: 'left-pannel',
  components: {
    CharListItem
  },
  data () {
    return {
      newCharName: ''
    }
  },
  computed: {
    characters () {
      return store.getters.charListItems.list
    },
    scrollbarWidth () {
      var sbw = store.getters.scrollbarWidth
      return sbw === undefined ? '00' : sbw
    }
  },
  methods: {
    addNewChar () {
      if (this.newCharName === '') {
        return
      }
      // Dont create duplicate
      if (this.charExist(this.newCharName)) {
        store.dispatch('actCharListItem', this.newCharName)
        this.newCharName = ''
        return
      }

      store.dispatch('addCharListItem', this.newCharName)
      store.dispatch('addCharProgress', this.newCharName)
      store.dispatch('actCharListItem', this.newCharName)
      this.newCharName = ''
    },
    activate (char) {
      if (char.active) {
        store.dispatch('desCharListItem')
      } else {
        store.dispatch('actCharListItem', char.name)
      }
    },
    charExist (newCharName) {
      for (var i in this.characters) {
        if (this.characters[i].name === newCharName) {
          return true
        }
      }
      return false
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
.panel-left {
  width: 20%;
  float: left;
  height: 100%;
  border-radius: 0;
}

.panel-heading {
  height: 7%;
}

.panel-body {
  height: 13%;
}

.hide-scroll {
  overflow: hidden;
  height: 80%;
}

.scrollable {
  max-height: 100%;
  /*margin-right: -113px;*/
  padding-right: 100px;
  overflow-y: scroll;
}

#charList {
  height: 100%;
}

.charListTransition-enter, .charListTransition-leave-to, .charListTransition-leave-active {
  opacity: 0;
  transform: translateY(-50px);
}
.charListTransition-leave-active {
  position: absolute;
}

.charListTransition-item {
  transition: all 1s;
  display: inline-block;
}
</style>
