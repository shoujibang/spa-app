import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//图片放大
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 999999, //层级
    inline: false, //启用inline模式
    button: true, //显示右上角关闭按钮
    navbar: false, //显示缩略图导航
    title: false, //显示当前图片标题
    toolbar: false, //工具栏,
    tooltip: true, //显示缩放百分比,
    movable: true, //图片是否可以移动
    zoomable: true, //图片是否可以缩放
    rotatable: false, //图片是否可旋转
    scalable: false, //图片是否可翻转
    transition: true, //css3过度
    fullscreen: true, //播放时是否全屏
    keyboard: false, //是否支持键盘
    loop: false //图片是否循环播放
  }
});
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
// import Vant from "vant";
// import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';
//集成kindeditor富文本编辑器
import VueKindEditor from 'vue-kindeditor'
import '@/assets/utils/kindeditor-all.js'
import 'kindeditor/themes/default/default.css'
Vue.use(VueKindEditor)
//引入jquery  使用方式：this.$(".fotter")
import $ from 'jquery'
Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
