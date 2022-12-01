import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus:false
  },
  mutations: {
    SET_LOGIN_STATUS(state,payload){
      state.loginStatus=payload
    }
  },
  getters:{
    getLoginStatus(state){
      return state.loginStatus
    }
  },
  actions: {
  },
  modules: {
  }
})
