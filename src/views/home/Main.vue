<template>
    <el-container class="home-container">
<!--        头部-->
        <el-header>
            <div>
                <img src="~assets/img/home/nav_bg.png">
                <el-row :gutter="10" justify="center" type="flex">
                    <el-col :span="18"><span>订单履约中心-武汉小药药医药科技有限公司</span></el-col>
                    <el-col :span="4" :offset="10"><span>{{fullName}}</span></el-col>
                    <el-col :span="2"><el-button type="text" @click="logout">退出</el-button></el-col>
                </el-row>
            </div>


        </el-header>

        <el-container class="aside_container">
            <el-aside width="220px">
<!--                侧边栏-->
                <el-menu
                        background-color="#102442"
                        text-color="#fff"
                        active-text-color="#2698fa"
                        :router="true"
                        :default-active="deafultActive"
                >
<!--                    一级菜单-->
                    <el-submenu index="1">
                        <!--一级菜单模板区-->
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>销售订单管理</span>
                        </template>
                        <el-submenu index="1-1">
                            <template slot="title">订单接收管理</template>
                            <el-menu-item index="orderpool" key="orderpool" @click="itemClick('orderpool')">订单池</el-menu-item>
                        </el-submenu>

                        <el-submenu index="1-2">
                            <template slot="title">订单下发管理</template>
                            <el-menu-item index="distributeList" @click="itemClick('distributeList')">已下发批次列表</el-menu-item>
                        </el-submenu>

                        <el-submenu index="1-3">
                            <template slot="title">订单出库管理</template>
                            <el-menu-item index="1-3-1">出库批次列表</el-menu-item>
                        </el-submenu>

                    </el-submenu>


                    <el-submenu index="2">
                        <!--一级菜单模板区-->
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>销售退回收货单管理</span>
                        </template>
                        <el-submenu index="2-1">
                            <template slot="title">销售退回收货单管理</template>
                            <el-menu-item index="2-1-1">销售退回收货单</el-menu-item>
                        </el-submenu>

                        <el-submenu index="2-2">
                            <template slot="title">销售退回入库管理</template>
                            <el-menu-item index="2-2-1">销售退回入库单</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="3">
                        <!--一级菜单模板区-->
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置中心</span>
                        </template>
                        <el-menu-item index="2-1-1">订单下发参数设置</el-menu-item>
                        <el-menu-item index="2-2-1">机构信息表</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>

        </el-container>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <span>确定要退出登录？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose('1')">取 消</el-button>
    <el-button type="primary" @click="handleClose('2')">确 定</el-button>
  </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import {removeToken, setValue, getValue} from "utils/auth";
    export default {
        name: "Main",
        data() {
            return {
                dialogVisible: false,
                deafultActive: ''
            };
        },
        computed: {

            fullName(){
                return this.$store.state.user.dptName + this.$store.state.user.name;
            }
        },

        created() {
            this.deafultActive = getValue('deafultActive')
            this.$store.dispatch('GetInfo').then(res => {
            }).catch(err => {

            })
        },
        methods: {
            logout(){
               this.dialogVisible =true
            },

            handleClose(index) {

                console.log('点击了')
                this.dialogVisible = false
                if (index==2) {
                    removeToken()
                    this.$router.push('/login')
                }
            },

            itemClick(index){
                setValue('deafultActive',index)
                this.deafultActive = index;
                console.log('deafultActive:' + indexstock)
            }
        }

    }
</script>

<style lang="less" scoped>

    .home-container {
        height: 100%;
    }

    .el-header {
       background-color: #102442;
        display: flex;
        /*justify-content: space-between;*/
        padding-left: 0;
        align-items: center;
        color: white;
        font-size: 16px;

        >div {
            align-items: center;
            }

        .el-row {
            width: 100%;
            height: 60px;
            position: absolute;
            align-items: center;
            top: 0px;
            left: 10px;

        }

        .el-col {
            .username {
                text-align: right;
                background-color: red;
            }

            button {
                align-items: flex-end;
                color: #fff;
                font-size: 14px;
            }
        }


    }

    .el-aside{
        background-color: #102442;
        //background: url('~assets/img/home/nav_bg.png') center center no-repeat;
        /*background-size: 230px 100%;*/
        height: 100%;
       // background: url("assets/img/home/nav_bg.png");
    }

    .el-main {
       background-color: #eaedfa;
    }

    .el-submenu  {
        .template {
            background-color: red;
        }

    }

</style>
