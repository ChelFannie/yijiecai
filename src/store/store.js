import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  footBallScrollId: 0,
  dataObj: {key: 0, val: 0},
  token: localStorage.getItem('token'),
  betDataObj: {
    lotteryType: '',
    subPlayType: '',
    type: '',
    selectData: []
  }
}

const mutations = {
  editFootBallScrollId (state, param) {
    state.footBallScrollId = param
  },
  editDataObj (state, param) {
    state.dataObj = param
  },
  token (state, param) {
    state.token = param
  },
  setBetDataObj (state, val) {
    state.betDataObj = val
  },
  deleteBetDataObj (state) {
    state.betDataObj = {
      lotteryType: '',
      subPlayType: '',
      type: '',
      selectData: []
    }
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
