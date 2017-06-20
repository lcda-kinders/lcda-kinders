<template>
  <li>
    <span>{{ title }}</span>
    <button v-on:click="$emit('remove')" class="btn btn-danger btn-xs">
      <span class="glyphicon glyphicon-remove"></span>
    </button>
    <select class="" v-model="val" v-on:change="change">
      <option value="1">
        Normal
      </option>
      <option value="2">
        Difficile
      </option>
      <option value="3">
        Épique
      </option>
      <option value="4">
        Légendaire
      </option>
      <option value="5">
        Inimaginable
      </option>
    </select>
  </li>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'dung-list-item',
  props: ['title', 'maxDiff'],
  data () {
    return {
      val: this.maxDiff
    }
  },
  methods: {
    change () {
      store.dispatch('modDungDiff', { name: this.title, maxDiff: this.val })
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 15px;
  float: right;
}

.glyphicon {
  margin: 0 auto;
  width: 20%%;
  line-height: 18px;
}

select {
  float: right;
}
</style>
