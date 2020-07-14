<template>
    <div class="index-page">
        <div v-show="isshow" @click="isshow = false" class="fix-bg max-box">
            <div class="img-maxbox img-box">
                <!-- ddd
                {{arrdatas.licenseImageId}} -->
                <img :src="imgmassrc" />
            </div>

        </div>
        
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/newsList' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{$route.meta.title}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="top12">
            <div class="table-box">

                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="序号"
                    min-width="50"
                    align="center"
                    label-class-name="column-margin">

                <template slot-scope="scope">
                    <span>{{scope.$index+(currentPage - 1) * pageSize + 1}}</span>
                </template>
                </el-table-column>
                    <el-table-column
                        prop="title"
                        label="标题"
                        align="center"
                        max-width="100">
                    </el-table-column>
                    <el-table-column
                        prop="passtime"
                        label="发布时间"
                        align="center"

                        max-width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        align="center"
                        label="封面图片"
                        max-width="100"
                        show-overflow-tooltip
                        class="center">
                        <template slot-scope="scope" >
                            <!-- <div class="img-box" @click="imgmax(scope.row)">

                                <img :src="scope.row.image" />
                            </div> -->
                             <div class="img-box" v-viewer>

                                
                            
                                <img :src="scope.row.image" />
                           
                            </div> 
                                        
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center">
                        <template slot-scope="scope">
                            <el-button @click="findfn(scope.$index,scope.row)" type="primary">详情</el-button>
                             <el-button @click="deletefn(scope.$index,scope.row)" type="primary">删除</el-button>
                                        
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :current-page.sync="currentPage"
                    :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import asyncRequest from "@/api/model/index";
import Sortable from 'sortablejs'
export default {
    name:'PeopleOne',
    mixins:[

    ],
    components:{
        
    },
    props:{

    },
    data() {
        return {
           isshow: false,
           isActive:0,
           imgmassrc:"",
           pageSize:3, //一页显示几条
           currentPage:1, //当前页
           total:10,//总页数
           tableData:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
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
        this.initData()
        this.rowDrop();
        console.log("-------",Sortable)
    },
    destroyed() {
        
    },
    methods: {
        rowDrop() {
            const tbody = document.querySelector('.el-table__body-wrapper tbody')
            const _this = this
            Sortable.create(tbody, {
            onEnd({ newIndex, oldIndex }) {
                console.log("newIndex",newIndex)
                console.log("oldIndex",oldIndex)
                const currRow = _this.tableData.splice(oldIndex, 1)[0]
                 console.log("currRow",currRow)
                _this.tableData.splice(newIndex, 0, currRow)
            }
            })
        },
        imgmax(row){
            this.imgmassrc = row.image;
            this.isshow = true;
        },
        findfn(index,row){
            console.log(row)
        },
        deletefn(index,row){
            console.log(row)
        },
         async initData(){
            let obj = {
                        page:this.currentPage,
                        count:this.pageSize
                    }
               
            var res = await asyncRequest.wangyi("",obj);
            
            this.tableData = res.result;
            //总页数
            // this.total = restotal.result.length;
            console.log("1111111111res.result11111111",res.result)


         },
        //分页val：当前点击页数
        handleCurrentChange(val){
            let _params ={
                page:val ,
                count:this.pageSize
            }
          
            //表格初始化方法调用接口
            this.initData();
        }
    }

}
</script>
<style lang="less" scoped>
    .index-page{
        
        .fix-bg{
            background: rgba(0, 0, 0, .5);
            position: fixed;
            left: 0;
            right: 0;
            top:0;
            bottom: 0;
            z-index: 9999999;
            display: flex;
            align-items: center;
            justify-content: center;
           .img-box{
                width: 500px;
                height: 500px;
            } 
            img{
                width: 100%;
                height: 100%;
            }
        }
        /deep/ .el-table--enable-row-transition .el-table__body td{
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // text-align: center;
        }
        img{
            // width: 100%;
            // height: 100%;
        }
        .img-box{
            // width: 80px;
            // height: 80px;
        }
        font-size: 20px;
        font-weight: bold;
        .table-box{
            margin-top: 30px;
        }
    }
</style>