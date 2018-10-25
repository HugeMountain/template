import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'
import store from '@/vuex/store.js'

Vue.use(Router)

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  store.commit('setActiveContent', to.name)
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
