import * as types from './mutation-types'

// scrollbar width
export const setScrollbarWidth = ({ commit }, payload) => {
  commit(types.SET_SCROLLBAR_WIDTH, payload)
}

// characters list
export const addCharListItem = ({ commit }, payload) => {
  commit(types.ADD_CHAR_LIST_ITEM, payload)
}

export const remCharListItem = ({ commit }, payload) => {
  commit(types.REM_CHAR_LIST_ITEM, payload)
}

export const actCharListItem = ({ commit }, payload) => {
  commit(types.ACT_CHAR_LIST_ITEM, payload)
}

export const desCharListItem = ({ commit }) => {
  commit(types.DES_CHAR_LIST_ITEM)
}

// alert box
export const showAlertBox = ({ commit }, payload) => {
  commit(types.SHOW_ALERT_BOX, payload)
}

export const dismAlertBox = ({ commit }) => {
  commit(types.DISM_ALERT_BOX)
}

// central panel
export const actNavTab = ({ commit }, payload) => {
  commit(types.ACT_NAV_TAB, payload)
}

// donjons
export const addDung = ({ commit }, payload) => {
  commit(types.ADD_DUNG, payload)
}

export const remDung = ({ commit }, payload) => {
  commit(types.REM_DUNG, payload)
}

export const modDungDiff = ({ commit }, payload) => {
  commit(types.MOD_DUNG_DIFF, payload)
}

// progression
export const modProgress = ({ commit }, payload) => {
  commit(types.MOD_PROGRESS, payload)
}

export const addCharProgress = ({ commit, getters }, payload) => {
  var p = {
    name: payload,
    dungeons: getters.dungeons
  }
  commit(types.ADD_CHAR_PROGRESS, p)
}

export const orderProgressByDiff = ({ commit }, payload) => {
  commit(types.ORDER_PROGRESS_BY_DIFF, payload)
}
