import routers from '@/router/index'
import { getBreadCrumbList, getMenuByRouter } from '@/libs/utils'
export default {
  // 创建一个对象来保存应用启动时的初始状态
  state: {
    breadcrumbList: [],
    leftNavList: []

  },
  getters: {
    getLeftNavList: (state, getters, rootState) => {
      getMenuByRouter(routers, rootState.user.access)
    }
  },
  mutations: {
    setBreadCrumb (state, routeMatched) {
      state.breadcrumbList = getBreadCrumbList(routeMatched)
    }
  },
  actions: {}
}
