import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow:false,
    mobile_bar_show:false,
    DarkAndLight:true,
  },
  mutations: {
    updateisshow(state,data){
      state.isshow=data;
    },
    updatemobilebar(state,data){
      state.mobile_bar_show=data
    },
    updatedark(state){
      console.log(state)
      state.DarkAndLight=!state.DarkAndLight
    }

  },
  actions: {
  },
  modules: {
  }
})
