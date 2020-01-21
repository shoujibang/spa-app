import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'


Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@views/Home.vue'),
    meta:{
      title:"官网",
      keepAlive: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@views/404.vue'),
    meta:{
      title:"404",
      keepAlive: true
    }
  },
  {
    path: '*',
    name: '404',
    redirect: '/404'
  }
 
]

/**
 * 自动注入
 */
const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach((route) =>{

  const routerModule = routerContext(route);
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = routes.concat(routerModule.default || routerModule);  
});

/**const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});*/


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});


const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to,from,next) =>{
  /**修改title */
  if(to.meta.title){
    document.title = to.meta.title;
  }
  /**
   * 过度方式
  */
 if (to.params.direction) {
  store.commit('updateDirection', to.params.direction)
  } else {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('updateDirection', 'forward')
      } else {
        store.commit('updateDirection', 'back')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      store.commit('updateDirection', 'forward')
    }
  }
 console.log("过度方式to：",to)
 console.log("过度方式from：",from)
  next();
})
export function resetRouter () {
  router.replace('/login')
}

export default router
