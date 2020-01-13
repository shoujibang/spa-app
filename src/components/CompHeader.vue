<template>
    <div class="header">
       <van-nav-bar
        :title="$route.meta.title"
        left-text="返回"
        right-text="登录"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>
</template>
<script>
import {
    Button,
    NavBar,
    Toast
    } from 'vant';
export default {
    name:'CompHeader',
    mixins:[

    ],
    components:{
        [NavBar.name]: NavBar,
        [Button.name]: Button,
        [Toast.name]: Toast,
    },
    props:{

    },
    data() {
        return {
            
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
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            this.$router.push("/login")
        }
    }

}
</script>
<style lang="less" scoped>
    .header{
        font-size: 20px;
    }
</style>