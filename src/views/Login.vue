<template>
    <div class="login">
        <form>
            <van-cell-group>
                
                <van-field 
                    left-icon="smile-o"
                    label="手机号" 
                    v-model="tel" 
                    placeholder="请输入手机号" />
                
                    <van-row type="flex">
                        <van-col span="14">
                            <van-field 
                                left-icon="smile-o"
                                label="验证码" 
                                v-model="code" 
                                placeholder="请输入验证码" />
                        </van-col>
                        
                        <van-col span="10">
                            <van-button @click="sendCode" native-type="button" type="primary">{{content}}</van-button>
                        </van-col>
                    </van-row>
                
            </van-cell-group>
            <van-row type="flex" class="submit">
                <van-col span="24">
                <van-button native-type="button" size="large" type="primary">提交</van-button>
                </van-col>
            </van-row>
        </form>
        <div class="pa">dfasdfasdfasdfadsfasdfasdfsdf</div>
    </div>
</template>
<script>
import {
    CellGroup,
    Cell,
    Field,
    Button,
    Row,
    Col,
    Toast,
    Notify
    } from 'vant';
export default {
    name:'News',
    mixins:[

    ],
    components:{
        [CellGroup.name]:CellGroup,
        [Cell.name]:Cell,        
        [Field.name]:Field,
        [Row.name]:Row,
        [Col.name]:Col,
        [Button.name]:Button,        
        [Toast.name]:Toast,
        [Notify.name]:Notify
    },
    props:{

    },
    data() {
        return {
           code:"",
           tel:"",
           flag:false,
           content: '发送验证码', // 按钮里显示的内容
           totalTime: 5 ,     //记录具体倒计时时间
           timer: 'cloak',  // 定时器名称
           canClick: true //添加canClick  判断按钮能否点击 
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
        sendCode(){
            let reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            let that = this;
            if(this.tel == ''){
                that.flag=true;
                that.$notify('手机号不能为空');
                return false;
            }else if(!reg.test(that.tel)){
                this.flag = true;
                this.$notify("手机号格式不正确");
                return false;
            }else{
                this.flag = false;
                if(!that.canClick) return;
                //执行发送验证码接口
                //这里解决60秒不见了的问题
                that.content = that.totalTime + 's后重新发送';
                that.cloak = setInterval(function () {
                  that.totalTime--;
                  if (that.totalTime > 0) {
                    that.content = that.totalTime + 's后重新发送'
                  }
                  if (that.totalTime <= 0) {     //当倒计时小于等于0时清除定时器
                    window.clearInterval(that.cloak);
                    that.content = '重新发送验证码';
                    that.totalTime = 5;
                    that.canClick = true  //这里重新开启
                  }
                }, 1000);

            }
 
        }
    }

}
</script>
<style lang="less" scoped>
   @mainColor:#e92323;
    .login{
        font-size: 10px;
        padding:30px 10px 0 10px;
        .submit{
            margin-top:20px;
        }
        .pa{
           
            color:@text-color;
            font-size: 30px;
        }
    }
</style>