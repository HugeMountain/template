import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'view',
      component: MainIndex,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/home/index.vue')
        }
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      component: MainIndex,
      redirect: '/hello/index',
      children: [
        {
          path: '/hello/index',
          name: 'hello_index',
          meta: {
            icon: '_qq',
            title: '欢迎'
          },
          component: () => import('@/views/HelloWorld.vue')
        }
      ]
    },
    {
      path: '/401',
      name: 'error401',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/error-page/401.vue')
    },
    {
      path: '*',
      name: 'error404',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/error-page/404.vue')
    }
  ]
})
