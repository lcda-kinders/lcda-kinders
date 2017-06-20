import * as types from '../mutation-types'

const state = {
  main: {
    navTab: {
      general: true,
      progression: false,
      kinderPlan: false
    }
  }
}

const mutations = {
  [types.ACT_NAV_TAB] (state, payload) {
    if (state.main.navTab.hasOwnProperty(payload)) {
      for (var i in state.main.navTab) {
        state.main.navTab[i] = false
      }
      state.main.navTab[payload] = true
    }
  }
}

export default {
  state,
  mutations
}
