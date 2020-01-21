import Vue from 'vue'
import Vuex from 'vuex'
import createLoadingPlugin from '@/util/vuex-plugin'
Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(value => {
  modules[value.replace(/(\.\/|\.js)/g, '')] = files(value).default
  console.log('vuexFiles',files(value).default)
  console.log('vuexFiles',value)
  console.log('vuexFiles',value.replace(/(\.\/|\.js)/g, ''))
  
});



export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  state: {
    direction: 'forward' // 页面切换方向
  },
  mutations: {
    // 更新页面切换方向
    updateDirection (state, direction) {
      state.direction = direction
    }
  },
  actions: {
  },
  modules
  // modules: {
  // }
})
