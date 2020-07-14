import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import getters from './getter';
import mutations from './mutations';
import actions from './actions';

//modules
import homeVuex from './model/homeVuex';

import asyncRequest from "@/api/model/index";
Vue.use(Vuex)
console.log("000000000000",homeVuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    homeVuex
  }
})
