import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建Store实例
const store = new Vuex.Store({
  // 创建一个对象来保存应用启动时的初始状态
  state: {
    count: 0,
    adminName: 'vue-webpack-iview管理系统',
    dialogBool: false
  },
  mutations: {
    inc: state => state.count++,
    dec: state => state.count--,
    dialogBoolTrue (state) {
      state.dialogBool = true
    },
    dialogBoolFalse (state) {
      state.dialogBool = false
    }
  }
})
export default {store}
