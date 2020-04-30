<template>
    <div>
        <el-tabs  type="card" closable tab-position="bottom">
            <el-tab-pane
                    key="1"
                    label="订单池"
                    name=""
            >
            </el-tab-pane>

            <el-tab-pane
                    key="1"
                    label="订单池1"
                    name=""
            >
            </el-tab-pane>
        </el-tabs>

        <div class="orderpoolContainer">
            <span>订单池列表</span>
            <span>订单池列表</span>
            <span>订单池列表</span>
            <span>订单池列表</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderPool"
    }
</script>

<style type="scss" scoped>

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
</style>
