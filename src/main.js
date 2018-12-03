// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/scss/index.scss'
import App from './views/App'
import router from './router'
import 'iview/dist/styles/iview.css'
import 'ionicons'
import store from './vuex/store.js'
import IView from 'iview'
import './assets/theme/index.less'
import axios from 'axios'
Vue.use(IView)
Vue.config.productionTip = false

let root = process.env.API

let instance = axios.create({
  baseURL: root,
  withCredentials: true
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          if (router.currentRoute.fullPath !== '/login') {
            error.message = '登录超时请重新登录'
            router.replace({
              name: 'error401',
              query: {redirect: router.currentRoute.fullPath}
            })
          }
          break
        case 404:
          // 返回 404 清除token信息并跳转到登录页面
          router.replace({
            name: 'error404',
            query: {redirect: router.currentRoute.fullPath}
          })
          break
      }
    }
    return Promise.reject(error.response.data)
  }
)
Vue.prototype.$axios = instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
