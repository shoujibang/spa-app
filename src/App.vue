<template>
  <div id="app" v-cloak>
    <comp-header />
      <router-view />    
    <!-- <comp-fotter />     -->
  </div>
</template>
<script>
import weixin from "@/assets/utils/weixin.js";
import sto from "@/assets/utils/storage.js";
export default {
  components:{
   
  },
  data() {
    return {
      needPageTrans:true
    }
  },
  created() {
    this.getRem();
    window.addEventListener("resize", this.getRem, false);
  },
  mounted() {
    // weixin();
    console.log("1111111111",this.$setCookie("name","wangxiaoli"))
  },watch: {
    $route: {
      handler: function() {
        // weixin();
        // sto.clearStorage();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getRem() {
      const oWidth = 750;
      const prem = 100;
      var html = document.getElementsByTagName("html")[0];
      var clientWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = (clientWidth / oWidth) * prem + "px";
    }
  },
}
</script>
<style lang="less">
@import "./assets/css/index.less";
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
