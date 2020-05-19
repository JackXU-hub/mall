<template>
    <div class="labelContainer">
        <el-col :span="6">
            <span class="title">{{this.title + ":"}}</span>
            <span class="content">{{this.content}}</span>
        </el-col>
    </div>

</template>

<script>
    export default {
        name: "labelItem",
        props: {
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

    .labelContainer {
        background-color: red;
        /*margin-bottom: 10px;*/
        span {
            font-size: 14px;
            font-weight: bold;
            color: black;
        }

        .el-col {
            margin-bottom: 10px;
        }

        .title {
            margin-left: 20px;
        }

        .content {
            margin-left: 20px;
        }
    }

</style>
