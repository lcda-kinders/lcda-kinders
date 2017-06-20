import * as types from '../mutation-types'

const state = {
  main: {
    type: '', // success, info, warning, danger
    msg: '',
    show: false
  }
}

const mutations = {
  [types.SHOW_ALERT_BOX] (state, payload) {
    if (payload.hasOwnProperty('type')) {
      state.main.type = payload.type
    } else {
      state.main.type = 'info'
    }
    if (payload.hasOwnProperty('msg')) {
      state.main.msg = payload.msg
    } else {
      state.main.msg = 'oops something went wrong'
    }
    state.main.show = true
  },
  [types.DISM_ALERT_BOX] (state) {
    state.main.show = false
  }
}

export default {
  state,
  mutations
}
