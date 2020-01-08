<template>
  <div class="home">
    <van-swipe :height="200" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.src" />
      </van-swipe-item>      
    </van-swipe>
    <van-notice-bar
      :text="tip"
      scrollable
      left-icon="volume-o"
    />
    join us
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
import {
    NoticeBar,
    Swipe,
    SwipeItem,
    Cell,
    List ,
    Toast
    } from 'vant';
export default {
  name: 'home',
  components: {
    [NoticeBar.name]:NoticeBar,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [List.name]:List,
    [Cell.name]:Cell,
    [Toast.name]:Toast

  },
  data() {
    return {
      tip:'app即将上线敬请期待,有很多稀奇的功能等待大家去探索...',
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
  methods: {
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
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
