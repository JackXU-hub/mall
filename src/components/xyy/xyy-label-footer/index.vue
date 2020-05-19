<template>
    <div class="labelContainer">
        <el-row>
            <slot></slot>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "XyyLabelFooter"
    }
</script>

<style lang="scss" scoped>

    .labelContainer {
        background-color: white;
        margin-top: 80px;
        margin-bottom: 20px;
    }

</style>
