import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//注册全局方法Vue.prototype
import base from "./assets/utils/base";
Vue.use(base);
// 注册全局组件components
import globalComponents from "./components";
Vue.use(globalComponents);
//注册过滤器filters
import filters from "@/assets/filters";
import "@/assets/filters/filter.js";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
//添加axios拦截器
import "./assets/utils/interceptors.js";
//引入图表
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
console.log("echarts",echarts)
//引入ui组件库Vant;
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
