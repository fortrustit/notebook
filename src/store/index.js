import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import notebooks from './modules/notebooks'
import note from './modules/note'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    notebooks,
    note
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
