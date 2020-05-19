<template>
  <div class="filter-dialog" style="float:right">
    <el-button type="primary" @click="visible = true">设置筛选列</el-button>
    <el-dialog
      v-el-drag-dialog
      :visible="visible"
      :title="title"
      :width="width"
      @dragDialog="handleDrag"
    >
      <!-- checkbox start -->
      <el-checkbox-group v-model="checkList">
        <el-row>
          <el-col v-for="(item, i) in fieldList" :key="i" :span="6">
            <el-checkbox :label="item.name" checked="checked">{{ item.name }}</el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>
      <!-- checkbox end -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submitFilter">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog' // 拖拽指令
export default {
  name: 'FilterTableHead',
  directives: { elDragDialog },
  props: {
    fieldList: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: '设置显示列'
    },
    width: {
      type: String,
      default: '660px'
    }
  },
  data() {
    return {
      visible: false,
      checkList: [] // 选中集合
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 确定按钮
    submitFilter() {
      const newArry = this.fieldList.concat([])
      newArry.forEach(item => {
        item.hidden = !this.checkList.includes(item.name)
      })
      this.visible = false
      this.$emit('submitBtn', newArry)
    },
    // drag 回调
    handleDrag() {
      this.$refs.select.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
