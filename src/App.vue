<template>
  <div id="app">
    
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
      
    </transition>
        
  </div>
</template>
<script>

// import remjs from "@util/rem"; //响应式
export default {
  name:'',
  components:{
    
  },
  computed: {
    transitionName () {
      if (this.needPageTrans) {
        return this.$store.state.direction
      }
      return ''
    }
  },
  data() {
    return {
      needPageTrans:true
    }
  },
  methods: {
    
  },
}
</script>
<style lang="less">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  width: 100%;
  height: 100%;
  position: relative;
}
.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}
</style>
