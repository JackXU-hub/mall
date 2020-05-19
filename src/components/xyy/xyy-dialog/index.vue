<template>
  <el-dialog
    v-el-drag-dialog
    :title="title"
    :visible="dialogVisible"
    :width="width"
    :before-close="handleClose"
    append-to-body
    @close="dialogVisible=false"
  >
    <slot />
    <span slot="footer" class="dialog-footer">
      <slot name="footer" />
    </span>
  </el-dialog>
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog' // 拖拽指令

export default {
  name: 'XyyDialog',
  directives: { elDragDialog },
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '648px'
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  mounted() {},
  methods: {
    close() {
      this.dialogVisible = false
    },
    open() {
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss">
</style>
