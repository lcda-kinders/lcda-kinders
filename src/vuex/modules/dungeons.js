import * as types from '../mutation-types'

const state = {
  main: [
    { name: 'Pirates', maxDiff: '5' },
    { name: 'Géants', maxDiff: '4' },
    { name: 'D\'Regs', maxDiff: '3' },
    { name: 'Dédale', maxDiff: '3' },
    { name: 'IDG', maxDiff: '3' },
    { name: 'OT2', maxDiff: '4' },
    { name: 'Mintarn', maxDiff: '3' },
    { name: 'Façonneur', maxDiff: '1' },
    { name: 'Illithids', maxDiff: '3' },
    { name: 'Tyrannœils', maxDiff: '3' },
    { name: 'Driders', maxDiff: '3' },
    { name: 'IDS', maxDiff: '1' }
  ]
}

const mutations = {
  [types.ADD_DUNG] (state, payload) {
    if (!state.main.includes(payload)) {
      state.main.push(payload)
    }
  },
  [types.REM_DUNG] (state, payload) {
    if (state.main.includes(payload)) {
      state.main.splice(state.main.indexOf(payload), 1)
    }
  },
  [types.MOD_DUNG_DIFF] (state, payload) {
    for (var i in state.main) {
      if (state.main[i].name === payload.name) {
        state.main[i].maxDiff = payload.maxDiff
      }
    }
  }
}

export default {
  state,
  mutations
}
