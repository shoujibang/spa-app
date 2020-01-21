export default [
    {
        path: '/person',
        name: 'person',
        component: () => import(/* webpackChunkName: "about" */ '@views/Person.vue'),
        meta:{
          title:"个人中心",
          keepAlive: true
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '@views/Login.vue'),
        meta:{
          title:"登录",
          isShow:false,
          keepAlive: true
        }
      }





]