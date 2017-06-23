import * as types from '../mutation-types'

const state = {
  main: {
    currentIs: { name: '', active: false },
    list: []
  }
}

const mutations = {
  [types.ADD_CHAR_LIST_ITEM] (state, payload) {
    var newChar = {
      name: payload,
      active: false
    }
    state.main.list.push(newChar)

    state.main.list.sort(function (a, b) {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  },
  [types.REM_CHAR_LIST_ITEM] (state, payload) {
    for (var i in state.main) {
      if (state.main.list[i].name === payload) {
        state.main.list.splice(i, 1)
        break
      }
    }
  },
  [types.ACT_CHAR_LIST_ITEM] (state, payload) {
    for (var i in state.main.list) {
      state.main.list[i].active = false
      if (state.main.list[i].name === payload) {
        var c = state.main.list[i]
        c.active = true
        state.main.currentIs = c
      }
    }
  },
  [types.DES_CHAR_LIST_ITEM] (state) {
    for (var i in state.main.list) {
      state.main.list[i].active = false
    }
    state.main.currentIs = { name: '', active: false }
  }
}

export default {
  state,
  mutations
}
