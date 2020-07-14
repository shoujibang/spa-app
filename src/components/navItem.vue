<template>
    <div class="nav-item">
<!-- :class="{'active':index === isActive}" -->
        <li>
		 <i :class="datanav.icon"></i>
        <span  @click="toggle(datanav,index,$event)" :class="{'active':index === isActive}">
            {{ datanav.text }}
        </span>
        <ul class="two-ul" v-if="isFolder" v-show="open">
            <nav-item  v-for="(item, index) in datanav.children" :index="index" :datanav="item" :key="index"></nav-item>
        </ul>
    </li> 
    </div>
</template>
<script>
export default {
    name:'navItem',
    mixins:[

    ],
    components:{
        
    },
    props:[
        'datanav',
        "index"
        ],
    data() {
        return {
           open: false,
           isActive:0
        }
    },
    computed: {
        // 是否还有子列表需要渲染，作为v-if的判断条件
        isFolder() {
            return this.datanav.children && this.datanav.children.length
        }
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
        console.log("pppppppppppp",this.datanav)
    },
    destroyed() {
        
    },
    methods: {
       toggle(val,index,e){
        //    this.isActive = index;
        let that = this;
            if(this.isFolder) {
                this.open = !this.open
            }
            
            let span = e.target;
            let allDom =  that.$(span).parents().find(".nav-item");
            console.log("000000000000005555555555",allDom)
            let current = that.$(span).text().replace(/\s+/g,"")
            console.log("currentcurrentcurrentcurrent",current)
            that.$(allDom).each((index, dom) =>{
                   let dosm = that.$(dom).find("span")[0];
                   let texts = that.$(dosm).text().replace(/\s+/g,"");
                   that.$(dom).find("span").removeClass("active");
                   if(texts == current){
                       that.$(dom).find("span").addClass("active");
                   }
                   console.log("domdomdomdom",that.$(dom).text())
               })
               this.$router.push({path:val.url})
       } 
    }

}
</script>
<style lang="less" scoped>
    .nav-item{
        font-size: 20px;
        text-align: left;
        overflow: hidden;
       
        li{
            line-height: 50px;
            padding-left: 20px;
            cursor: pointer;
            .two-ul{
                padding-left: 20px;
            }
        }
        .active{
            color: rgb(255, 208, 75);

            // display: inline-block;
            // width: 100%;
            // border-bottom: 1px solid #ffd04b;
             
        }
    }
</style>