<template>
  <div class="s-message-wrap">
    <transition name="s-message-fade">
      <div v-show="visible" class="s-message-content">
        <div class="s-message-header">
          {{ title }}
          <el-button
            v-if="closeBtn"
            icon="el-icon-close"
            plain
            class="s-message-close"
            @click="close"
          />
        </div>
        <div class="s-message-body" v-html="content" />
        <div v-if="footer" class="s-message-footer">
          <el-button
            v-for="(item , index) in button"
            :key="index"
            size="mini"
            @click="btnClick(index)"
          >{{ item.value }}</el-button>
          <div :class="closeBtnClass" style="display:inline-block">
            <el-button v-if="closeBtn" size="mini" @click="close">{{ cancelValue }}</el-button>
          </div>

          <el-button size="mini" type="primary" @click="okClick">{{ okValue }}</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
let timer
export default {
  data() {
    return {
      closeBtn: true, // 取消按钮
      footer: true, // 是否展示底部按钮
      visible: true,
      title: '提示', // title
      content: '提示', // 可插入一段html
      duration: 2000, // 自动关闭的的时间-- 若footer为true  则失效
      onSuccess: '', // 确定按钮的函数回调
      onCancel: '', // 取消按钮的函数回调
      okValue: '确定',
      cancelValue: '取消',
      closed: false,
      closeBtnClass: '',
      button: []
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
        document.removeEventListener('keydown', this.keydown, false)
      }
    }
  },
  beforeMount() {
    // 如果已经存在，则阻止出现第二次
    const node = document.querySelector('.s-message-wrap')
    if (node && node.parentNode) {
      node.parentNode.removeChild(node)
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown, false)
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      clearTimeout(timer)
    },
    // 关闭弹窗
    close() {
      if (typeof this.onCancel === 'function') {
        this.onCancel()
      }
      this.closed = true
    },
    // 确定事件
    okClick() {
      if (typeof this.onSuccess === 'function') {
        this.onSuccess()
        this.close()
      } else {
        this.close()
      }
    },
    // 按钮组回调
    btnClick(index) {
      const res = this.button[index].callback()
      if (typeof res === 'undefined') this.close()
    },
    // 初始值
    startTimer() {
      if (this.footer) {
        return
      }
      if (this.duration < 0) {
        this.duration = 2000
      }

      timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    },
    keydown(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.s-message-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1002;
  .s-message-content {
    width: 400px;
    min-height: 240px;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    transition: 0.3s;
    .s-message-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      height: 50px;
      padding: 15px 15px 10px;
      .s-message-close {
        border: none;
      }
    }
    .s-message-body {
      padding: 15px 15px 10px;
      min-height: 130px;
      color: #333;
    }
    .s-message-footer {
      padding: 15px 15px 10px;
      text-align: right;
      .left {
        float: left;
      }
    }
  }
}

.s-message-fade-enter-active,
.s-message-fade-leave-active {
  transition: opacity 0.5s;
  transform: translateY(0);
}

.s-message-fade-enter,
.s-message-fade-leave-to,
.s-message-fade-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
