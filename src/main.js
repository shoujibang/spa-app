import Vue from 'vue'
import App from './App.vue'
import CompHeader from '@/components/CompHeader.vue';
import CompFotter from '@/components/CompFotter.vue';
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'amfe-flexible/index.js'//移动端适配
Vue.component('CompHeader',CompHeader)
Vue.component('CompFotter',CompFotter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
