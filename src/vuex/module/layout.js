import routers from '@/router/index'
import { getBreadCrumbList, getMenuByRouter, getHomeRoute } from '@/libs/utils'
import _findIndex from 'lodash/findIndex'
export default {
  // 创建一个对象来保存应用启动时的初始状态
  state: {
    breadcrumbList: [],
    leftNavList: [],
    tagNavList: [],
    activeContent: {},
    openFlag: {
      activeOpen: '', isOpen: false
    }
  },
  getters: {// 箭头函数后面竟然不能加大括号，要命不
    getLeftNavList: (state, getters, rootState) => getMenuByRouter(routers.options.routes, rootState.account.access),
    getActiveContent: (state, getters, rootState) => {
      let res = {activeFirst: '', activeSecond: ''}
      let active = state.activeContent
      let activeArray = active ? active.split('_') : []
      if (activeArray.length === 1) {
        res = {activeFirst: activeArray[0], activeSecond: ''}
      }
      if (activeArray.length === 2) {
        res = {activeFirst: activeArray[0], activeSecond: active}
      }
      if (res.activeSecond) {
        state.openFlag = {activeOpen: res.activeFirst, isOpen: true}
      }
      return res
    },
    getOpenFlag: (state, getters, rootState) => {
      return state.openFlag
    }
  },
  mutations: {
    setBreadCrumb (state, routeMatched) {
      state.breadcrumbList = getBreadCrumbList(routeMatched)
    },
    setActiveContent (state, activeContent) {
      state.activeContent = activeContent
    },
    setOpenFlag (state, openFlag) {
      state.openFlag = openFlag
    },
    addTagNav (state, nav) {
      console.log('tag', nav)
      let storage = localStorage.tagNaveList
      let tagNavs = storage ? JSON.parse(storage) : []
      let index = _findIndex(tagNavs, { name: nav.name })
      state.tagNavList = index === -1 ? [...tagNavs, nav] : tagNavs
      localStorage.tagNaveList = JSON.stringify(state.tagNavList)
    },
    removeTagNavList (state, list) {
      let tagNavs = state.tagNavList
      let filterList = tagNavs.filter((nav) => {
        return list.indexOf(nav) === -1
      })
      state.tagNavList = filterList;
      localStorage.tagNaveList = JSON.stringify(filterList)
    }
  },
  actions: {}
}
