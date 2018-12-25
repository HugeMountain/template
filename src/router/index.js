import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'
import store from '@/vuex/store.js'
import { getTagsTitle } from '@/libs/utils'

Vue.use(Router)

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // let token = sessionStorage.getItem('access_token')
  // if (!token && to.name !== 'login') {
  //   next({
  //     path: '/login'
  //   })
  // }
  store.commit('addTagNav', {meta: to.meta, name: to.name, params: to.params, path: to.params, query: to.query, showTitle: getTagsTitle(to.matched)})
  store.commit('setActiveContent', to.name)
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
