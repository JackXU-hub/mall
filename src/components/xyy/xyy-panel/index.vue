<template>
  <el-card :style="{margin: 0+ ' 0 '+ bottom + 'px ' + 0 }" class="panel">
    <div class="clearfix">
      <span class="panel-title">{{ title }}</span>
      <span v-if="fold" v-show="view" class="fold" @click="eventHide">收起</span>
      <span v-if="fold" v-show="!view" class="fold" @click="eventShow">展开</span>
      <slot name="tools" />
    </div>

    <div ref="domview" :style="viewstyle" class="panel-body">
      <slot />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'XyyPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    fold: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      view: true,
      viewstyle: ''
    }
  },
  methods: {
    eventHide() {
      this.viewstyle = 'height:' + this.$refs.domview.scrollHeight + 'px'
      const _t = this
      setTimeout(() => {
        _t.viewstyle = 'height:0px;'
      }, 50)
      this.view = false
    },
    eventShow() {
      this.viewstyle = 'height:' + this.$refs.domview.scrollHeight + 'px;'
      this.view = true
      const _t = this
      setTimeout(() => {
        _t.viewstyle = 'height:auto;'
        _t.view = true
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  & /deep/ .el-card__header {
    padding: 10px 15px;
    border: none;
  }
  & /deep/ .el-card__body {
    padding: 10px 15px;
  }
  .panel-title {
    line-height: 34px;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    &::before {
      content: '';
      display: block;
      width: 3px;
      height: 13px;
      float: left;
      background: linear-gradient(#cfd2dd, #7d8689, black);
      margin-right: 10px;
      margin-top: 10px;
      background-size: 100% 100%;
      background-position: center center;
    }
  }
  .panel-body {
    padding-top: 10px;
    overflow: hidden;
    transition: height 0.3s;
    -webkit-transition: height 0.3s; /* Safari */
  }
  .fold {
    font-size: 12px;
    color: #2db7f5;
    line-height: 34px;
    margin-left: 10px;
    cursor: pointer;
    font-family: PingFangSC-Regular, PingFang SC;
  }
}
</style>
