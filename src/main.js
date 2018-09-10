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
Vue.use(IView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
