import * as types from '../mutation-types'

const state = {
  main: [
    // {
    //   name: 'Toto',
    //   dungeons: [
    //     {
    //       name: 'Mintarn',
    //       maxDiff: 3,
    //       progress: [2, 1, 0, 0, 0]
    //     }
    //   ]
    // }
  ]
}

const mutations = {
  [types.ADD_DUNG] (state, payload) {
    for (var i in state.main) {
      state.main[i].dungeons.push({
        name: payload.name,
        maxDiff: payload.maxDiff,
        progress: [1, 0, 0, 0, 0]
      })
    }
  },
  [types.REM_DUNG] (state, payload) {
    for (var i in state.main) {
      for (var j in state.main[i].dungeons) {
        if (state.main[i].dungeons[j].name === payload.name) {
          state.main[i].dungeons.splice(j, 1)
          break
        }
      }
    }
  },
  [types.MOD_DUNG_DIFF] (state, payload) {
    for (var i in state.main) {
      for (var j in state.main[i].dungeons) {
        if (state.main[i].dungeons[j].name === payload.name) {
          state.main[i].dungeons[j].maxDiff = payload.maxDiff
          break
        }
      }
    }
  },
  [types.ADD_CHAR_PROGRESS] (state, payload) {
    var dungeons = []
    for (var i in payload.dungeons) {
      dungeons.push({
        name: payload.dungeons[i].name,
        maxDiff: payload.dungeons[i].maxDiff,
        progress: [1, 0, 0, 0, 0]
      })
    }
    state.main.push({
      name: payload.name,
      dungeons: dungeons
    })
  },
  [types.REM_CHAR_LIST_ITEM] (state, payload) {
    for (var i in state.main) {
      if (state.main[i].name === payload.name) {
        state.main.splice(i, 1)
        break
      }
    }
  },
  [types.MOD_PROGRESS] (state, payload) {
    for (var i in state.main) {
      if (state.main[i].name === payload.character) {
        for (var j in state.main[i].dungeons) {
          if (state.main[i].dungeons[j].name === payload.dungeon) {
            var p = ++state.main[i].dungeons[j].progress[payload.diff - 1] % 3
            state.main[i].dungeons[j].progress[payload.diff - 1] = p
            state.main[i].dungeons[j].progress.splice(5, 1)
            break
          }
        }
        break
      }
    }
  },
  [types.ORDER_PROGRESS_BY_DIFF] (state, payload) {
    for (var i in state.main) {
      if (state.main[i].name === payload.character) {
        console.log('hello ' + payload.character)
        state.main[i].dungeons.sort(function (a, b) {
          console.log('diff ' + payload.diff)
          var av = a.progress[payload.diff]
          var bv = b.progress[payload.diff]
          if (av === 1 && bv !== 1) {
            return -1
          }
          if (bv === 1 && av !== 1) {
            return 1
          }
          return 0
        })
        break
      }
    }
  }
}

export default {
  state,
  mutations
}
