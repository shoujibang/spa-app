<template>
  <div id="app">
    <comp-header />
      <router-view/>    
    <comp-fotter v-if="!(!$route.meta.isShow && $route.meta.isShow == false)" />    
  </div>
</template>
<script>
import CompHeader from '@/components/CompHeader.vue';
import CompFotter from '@/components/CompFotter.vue';
// import remjs from "@util/rem"; //响应式
export default {
  name:'',
  components:{
    CompHeader,
    CompFotter
  },
  data() {
    return {
      
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
