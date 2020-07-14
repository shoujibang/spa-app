<template>
    <div class="person">
        <!----新闻列表---->
    <div class="data-list news-list">
          <ul>
              <li v-for="(item,index) in imgs" :key="index">
                  <div class="img-box">
                      <img :src="item.image" />
                  </div>
                  <div @click="newsInfo(item.path)" class="tit">{{item.title}}</div>
              </li>
          </ul>
      </div>
        <div class="data-list">
          <ul>
              <li v-for="(item,index) in data" :key="index">
                  <span :class="item.src"></span>
                  <div class="tit">{{item.text}}</div>
              </li>
          </ul>
      </div>
    <!----echarts---->
    <div class="ec">
        <div>
            <echarts-line :ecopt="ecopt" :list="linedata"></echarts-line>
        </div>
        <!-- <div>
            <echarts-line :list="linedata"></echarts-line>
        </div> -->
    </div>
      
      
    

    </div>
</template>
<script>
import asyncRequest from "@/api/model/index";
export default {
    name:'PcIndex',
    mixins:[

    ],
    components:{
      
    },
    props:{

    },
    data() {
        return {
            ecopt:{
                title: {
                    text: '堆叠区域图',
                },
            },
            imgs:[],
           data:[
               {
                   src:"el-icon-share",
                   text:"分享"
               },{
                   src:"el-icon-star-off",
                   text:"分享"
               },{
                   src:"el-icon-goods",
                   text:"分享"
               },{
                   src:"el-icon-s-platform",
                   text:"分享"
               }
           ]
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
       this.init(); 
    },
    destroyed() {
        
    },
    methods: {
      newsInfo(url){
          window.open(url)
      },
      async init(){
        let obj = {
                page:2,
                count:4
            }
        var res = await asyncRequest.wangyi("",obj);
        this.imgs = res.result;
        console.log("wangyi-------",res.result)
      }
    }

}
</script>
<style lang="less" scoped>
    @keyframes iconRight {
        10% {
        transform: rotate(8deg);
        }
        30% {
        transform: rotate(-8deg);
        }
        60% {
        transform: rotate(4deg);
        }
        80% {
        transform: rotate(-4deg);
        }
    }
    .person{
        font-size: 30px;
        img{
            width: 100%;
            height: 100%;
        }
        .ec{
            width: 1200px;
            margin:0 auto;
            display: flex;
            div{
                flex: 1;
            }
        }
        .news-list{
            li{
                border-radius: 15px;
                border:1px solid #ddd;
                margin: 0 15px;
                overflow: hidden;
                .img-box{
                    overflow: hidden;
                    margin-bottom: 30px;
                    
                }
                .tit{
                        cursor: pointer;
                        margin-bottom: 30px;
                    }
                img{
                    transition:all 2s;/*图片放大过程的时间*/
                    &:hover{
                        transform: scale(1.9);
                    }
                }
            }
        }
        .data-list{
            // border: 1px solid red;
            width: 1200px;
            margin:0 auto;
            // border: 1px solid red;
            margin-top: 50px;
            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                li{
                    flex:1;
                    .tit{
                        font-size: 20px;
                        padding: 0 10px;
                    }
                    span{
                        font-size: 80px;
                        margin-bottom: 50px;
                        &:hover{
                            animation: iconRight 0.4s forwards;
                        }
                    }
                }

            }
        }
    }
</style>