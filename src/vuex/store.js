import Vue from 'vue'
import Vuex from 'vuex'
import layout from './module/layout'
import account from './module/account'
Vue.use(Vuex)
// 创建Store实例//如果以赋值方式定义，再输出，则$store后面要加一个变量名,mapMutations引入的方式就会报错
export default new Vuex.Store({
  modules: {
    layout,
    account
  }
})
