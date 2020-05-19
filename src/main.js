import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// import './plugins/element'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/css/elementUI_cover.scss'

import 'xe-utils' // 表格组件工具
import VXETable from 'vxe-table' // 表格组件
import XEUtils from 'xe-utils'

import 'vxe-table/lib/index.css' // 表格样式

import store from "./store";
import xyy from '@/components/xyy' // xyy组件
Vue.use(xyy)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VXETable)
// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$utils = XEUtils

import '@/styles/index.scss' // global css
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
