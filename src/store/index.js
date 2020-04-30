import Vue from 'vue'
import vuex from 'vuex'
import user from "./modules/user";
import {use} from "element-ui/src/locale";

//安装插件
Vue.use(vuex)

const  store = new vuex.Store({
   modules:{
       user:user
   }
})

export default  store
