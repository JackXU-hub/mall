import BtnGroup from './btn-group' // 按钮组
import FilterTableHead from './filter-table-head' // 筛选列
import XyyMessageBox from './xyy-message-box/main' // 确认弹窗
import XyyDialog from './xyy-dialog' // 确认弹窗
import XyyPanel from './xyy-panel' // panel
import XyyDateFormItem from './xyy-date-form-item'

const components = [BtnGroup, FilterTableHead, XyyDialog, XyyPanel,XyyDateFormItem]
const protoList = [XyyMessageBox]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  protoList.forEach(proto => { // 新加弹框显示
    Vue.prototype['$' + proto.name] = proto
  })
}

export default {
  version: '1.0.0',
  install
}
