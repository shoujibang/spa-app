<template>
    <div class="person">
        <comp-header />        
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    {{item.name}}-----{{index}}
                </li>
            </ul>
        <comp-fotter />
    </div>
</template>
<script>
import {
    Tabbar,
    TabbarItem,
    Toast,
    Circle 
    } from 'vant';
export default {
    name:'NewsDetile',
    mixins:[

    ],
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem,
        [Toast.name]:Toast,
        [Circle.name]:Circle
    },
    props:{

    },
    data() {
        return {
           active:0,
           currentRate: 0,
           list:[{
               name:"劲爆新闻"
           },
           {
               name:"劲爆新闻"
           },{
               name:"劲爆新闻"
           }]
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    destroyed() {
        
    },
    methods: {
        
    }

}
</script>
<style lang="less" scoped>
    .person{
        font-size: 10px;
    }
</style>