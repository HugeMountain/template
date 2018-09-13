import routers from '@/router/index'
import { getBreadCrumbList, getMenuByRouter } from '@/libs/utils'
export default {
  // 创建一个对象来保存应用启动时的初始状态
  state: {
    breadcrumbList: [],
    leftNavList: []
  },
  getters: {// 箭头函数后面竟然不能加大括号，要命不
    getLeftNavList: (state, getters, rootState) => getMenuByRouter(routers.options.routes, rootState.account.access)
  },
  mutations: {
    setBreadCrumb (state, routeMatched) {
      state.breadcrumbList = getBreadCrumbList(routeMatched)
    }
  },
  actions: {}
}
