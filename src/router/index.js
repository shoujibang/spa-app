import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./home"
import News from "./news"

Vue.use(VueRouter)


let routes = [...Home,...News]
/**
 * 重写路由的push方法
 * 主要是为了解决同一个路由路径重复点击报错
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
const router = new VueRouter({
  mode: 'history',
  // mode: process.env.NODE_ENV == "development" ? "history" : "hash",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})


router.beforeEach((to,from,next) =>{
  /**修改title */
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})


export default router
