import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopUp: false,
    companyId: '',
    companyName: '',
    user: {}
  },
  getters: {
    getShowPopUp (state) {
      return state.showPopUp
    },
    getUser (state) {
      return state.user
    },
    getCompanyName (state) {
      return state.companyName
    }
  },
  mutations: {
    changeShowPopUp (state) {
      state.showPopUp = !state.showPopUp
      state.user = {}
    },
    changeCompanyDetails (state, value) {
      state.showPopUp = !state.showPopUp
      state.companyId = value.id
      state.companyName = value.name
    },
    addUser (state, value) {
      Vue.set(state.user, value.name, value.val)
    }
  },
  actions: {
  },
  modules: {
  }
})
