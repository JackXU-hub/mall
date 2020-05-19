<template>
  <div class="clearfix">
    <el-row>
      <template v-for="item in btnList">
        <button v-if="item.shortkey" :key="item.label" :disabled="item.disabled" type="button" class="btn" @click="item.clickEvent">
          <span class="sMag">{{ item.label }}</span>
          <span class="sMag">{{ item.shortkey }}</span>
        </button>

        <el-button
          v-else
          :key="item.label"
          :type="item.type"
          class="el-btn"
          @click="item.clickEvent"
        >{{ item.label }}</el-button>
      </template>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  props: {
    btnList: { // 按钮列表配置
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix{
  float: right;
  .btn {
    height: 34px;
    color: #fff;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: top;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    background-color: #2DB7F5;
    border-color: #2DB7F5;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.42857143;
    border-radius: 4px;
    font-size: 14px;
    min-width: 54px;
    padding: 0 12px;
    margin-right: 10px;
    &:disabled{
      cursor: not-allowed;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
    &:last-child{
      margin-right: 0px;
    }
    .sMag{
      margin-top: -1px;
      margin-bottom: -5px;
      &:focus{
        border: none;
        outline: none;
      }
    }
  }
  .el-button{
    margin-right: 10px;
  }
}
</style>>
