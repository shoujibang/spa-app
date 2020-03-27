<template>
  <div class="home">
    <van-swipe :height="200" :autoplay="3000" indicator-color="white">
      <van-swipe-item @click="itemFn(item.path)" v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" />
        <div class="title">{{item.title | ellipsis(10)}}</div>
      </van-swipe-item>      
    </van-swipe>
    <div class="hello">查看有趣段子</div>
    <div class="hello">{{300000000 | NumberFormat}}</div>
     <div class="hello">{{tip | ellipsis(10)}}</div>
     <div class="hello">vue-router-meta:{{$route.meta}}</div>
     <echarts-line :list="linedata"></echarts-line>
   
   <div class="hello">this.$store.homeVuex:{{home}}</div>
    <div class="hello">vuex:{{name}}</div>

    <div class="vuex">
      <p>{{count}}</p>
      <p>
        <van-button @click="add" plain type="primary">增加</van-button>
        <van-button @click="remove" plain type="primary">减少</van-button>
      </p>
    </div>
   
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import asyncRequest from "@/api/model/index";

// import {
//     NoticeBar,
//     Swipe,
//     SwipeItem,
//     Cell,
//     List ,
//     Toast
//     } from 'vant';
export default {
  name: 'home',
  components: {
    // [NoticeBar.name]:NoticeBar,
    // [Swipe.name]:Swipe,
    // [SwipeItem.name]:SwipeItem,
    // [List.name]:List,
    // [Cell.name]:Cell,
    // [Toast.name]:Toast

  },
  data() {
    return {
      linedata:[],
      name:"",
      home:"",
      count:0,
      tip:'app即将上线敬请期待,有很多稀奇的功能等待大家去探索',
      list: [],
      loading: false,
      finished: false,
      imgs:[
        {
          src:require('@/assets/image/1.jpg')
        },
        {
          src:require('@/assets/image/3.jpg')
        },
        {
          src:require('@/assets/image/6.jpg')
        }
      ]
    }
  },
  computed: {
    //将vuex的state 映射到vue的实例上，可以通过this.counte访问
    ...mapState(['counte']),
    ...mapGetters([
      'allName'
    ]),
    ...mapState({
    homeVuex: state => state.homeVuex
  })
  },
  mounted() {
    // let res = asyncRequest.wxShare(" ", params);
      this.wangyi();
    console.log("this",this)
    console.log("this.$store",this.$store)
    console.log("this.$store.homeVuex",this.homeVuex)
    this.home = this.homeVuex.name
    this.count = this.$store.state.counte;
    this.name = this.allName
    this.increment({
      name:"kkkkk",
      age:30
    });
  },
  methods: {
    itemFn(url){
      window.open(url)
    },
   async wangyi(){
      let obj = {
        page:2,
        count:4
      }
      var res = await asyncRequest.wangyi("",obj);
      this.imgs = res.result;
      console.log("wangyi-------",res.result)
    },
    // ...mapMutations({
    //     abc:'addCounte'
    // }),
    ...mapActions([
      'increment'
    ]),
    ...mapMutations([
      'addCounte'
    ]),
    remove(){
      this.$store.commit("removeCounte",2);
      this.count = this.$store.state.counte;
    },
    add(){
      this.addCounte(2);
      this.count = this.$store.state.counte;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push('热点新闻'+this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },
}
</script>
<style lang="less" scoped>
  .home{
    padding-bottom: 300px;
    .title{
      font-size: 50px;
      position: absolute;
      bottom: 30px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }
    .vuex{
      button{
        width: 150px;
        height: 50px;
        font-size: 32px;
        margin-right: 30px;
      }
    }
    .hello{
      font-size:32px;
      border-bottom: 1px solid #ddd;
      padding-bottom:20px;
      margin-bottom: 20px;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
