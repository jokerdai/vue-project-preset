import Vue from 'vue'
import Vuex from 'vuex'
import common from './module/common'
import demo from './module/demo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    demo
  }
})
