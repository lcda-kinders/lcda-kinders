import * as types from '../mutation-types'

const state = {
  main: 0
}

const mutations = {
  [types.SET_SCROLLBAR_WIDTH] (state, payload) {
    state.main = payload
  }
}

export default {
  state,
  mutations
}
