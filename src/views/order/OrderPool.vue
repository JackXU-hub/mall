<template>
    <div>
<!--        <el-tabs  type="card" closable tab-position="bottom">-->
<!--            <el-tab-pane-->
<!--                    key="1"-->
<!--                    label="订单池"-->
<!--                    name=""-->
<!--            >-->
<!--            </el-tab-pane>-->

<!--            <el-tab-pane-->
<!--                    key="1"-->
<!--                    label="订单池1"-->
<!--                    name=""-->
<!--            >-->
<!--            </el-tab-pane>-->
<!--        </el-tabs>-->

        <div class="panel-heading">
            <h3 class="panel-title">订单池列表</h3>
            <div class="panel-operation">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">重置</el-button>
            </div>
        </div>

<!--        <div class="top-bar">-->
<!--            <el-row>-->
<!--                <el-col :span="20"><div style="margin-left: 30px; font-size: 18px; margin-bottom: 10px;color: black">订单池列表</div></el-col>-->
<!--                <el-col :span="1"><el-button>查询</el-button></el-col>-->
<!--                <el-col :span="1"><el-button>重置</el-button></el-col>-->
<!--            </el-row>-->
<!--        </div>-->
        <!--订单编号box-->
        <div class="transtion-box">
            <el-row :gutter="30">
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">订单编号:</div>
                        <el-input placeholder="请输入内容" class="input-group-con"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">客户名称:</div>
                        <el-input placeholder="请输入客户名称" class="input-group-con"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">付款方式:</div>
                        <el-select v-model="value" placeholder="请选择" class="input-group-con">
                            <el-option
                                    v-for="item in payMethods"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">支付状态:</div>
                        <el-select v-model="state" placeholder="请选择" class="input-group-con">
                            <el-option
                                    v-for="item in payState"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!--订单状态box-->
        <div class="transtion-box">
            <el-row :gutter="30">
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">订单状态:</div>
                        <el-select v-model="value" placeholder="请选择" class="input-group-con">
                            <el-option
                                    v-for="item in payMethods"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="input-group">
                        <div class="input-group-label">机构区域:</div>
                        <el-select v-model="state" placeholder="请选择" class="input-group-con">
                            <el-option
                                    v-for="item in payState"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>

                <el-col :span="12">
                    <div class="input-group">
                        <div class="input-group-label">创建日期:</div>
                        <el-date-picker
                                v-model="createDate"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                class="input-group-con"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                        ></el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-button  disabled="false">结果列表</el-button>
        <div class="pool-table">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        label="序号"
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="订单编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="机构区域"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="客户名称"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="收货人"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="收货地址"
                        width="240">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="联系电话"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="订单备注"
                        width="240">
                </el-table-column>
            </el-table>
        </div>

         <div class="page-container">
             <el-pagination
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
             </el-pagination>
         </div>
    </div>
</template>

<script>
    export default {
        name: "OrderPool",
        data() {
            return {
                payMethods: [{
                    value: '支付宝',
                    label: '支付宝'
                }, {
                    value: '微信',
                    label: '微信'
                }, {
                    value: '银联',
                    label: '银联'
                }, {
                    value: '线下转账',
                    label: '线下转账'
                }, {
                    value: '货到付款',
                    label: '货到付款'
                },{
                    value: '白条',
                    label: '白条'
                },{
                    value: '银行授权支付',
                    label: '银行授权支付'
                },
                ],

                payState: [{
                    value: '已支付',
                    label: '已支付'
                }, {
                    value: '未支付',
                    label: '未支付'
                }
                ],
                value: '',
                state: '',
                createDate: [], // 创建时间
                tableData: [{
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
                }],

                currentPage: 4
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/elementUI_cover.scss';
    .top-bar {
        display: flex;
        width: 100%;
        .el-button {
            background-color: red;
        }
    }

    .el-tabs {
        .el-tab-pane {
          background-color: red;
            color: orange;


        }



    }

    /deep/ .el-tabs__item:hover{
        background-color: #fff;
    }

    .orderpoolContainer {
        background-color: #fff;
        width: 100%;
        height: 100%;

        span {
            padding-top: 0;
            margin-top: 0;
        }
    }

    .el-button {
        color: cornflowerblue;
        margin-left: 30px;
    }

    .pool-table {
        margin-left: 30px;
    }

    .el-table {
        width: 100%;
    }

    .page-container {
        margin-left: 30px;
        margin-top: 10px;
        float: right;
    }


</style>
