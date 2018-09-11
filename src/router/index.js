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
      meta: {
        icon: 'logo-buffer',
        title: '组件'
      },
      redirect: '/hello/index',
      children: [
        {
          path: '/hello/index',
          name: 'hello_index',
          meta: {
            icon: '_qq',
            title: '欢迎1'
          },
          component: () => import('@/views/hello/HelloWorld.vue')
        },
        {
          path: '/hello/index2',
          name: 'hello_index2',
          meta: {
            hideTop: true,
            icon: '_22',
            title: '欢迎2'
          },
          component: () => import('@/views/hello/HelloWorld2.vue')
        }
      ]
    },
    {
      path: '/two',
      name: 'two',
      component: MainIndex,
      meta: {
        icon: 'logo-buffer',
        title: '组件2'
      },
      redirect: '/two/two1',
      children: [
        {
          path: '/two/two1',
          name: 'two_two1',
          meta: {
            icon: '_qq',
            title: 'two1'
          },
          component: () => import('@/views/two/two1.vue')
        },
        {
          path: '/two/two2',
          name: 'two_two2',
          meta: {
            hideTop: true,
            icon: '_22',
            title: 'two2'
          },
          component: () => import('@/views/two/two2.vue')
        }
      ]
    },
    {
      path: '/one',
      name: 'one',
      component: MainIndex,
      meta: {
        icon: 'logo-buffer',
        title: '组件'
      },
      redirect: '/one/one',
      children: [
        {
          path: '/one/one',
          name: 'one_one',
          meta: {
            icon: '_qq',
            title: 'one'
          },
          component: () => import('@/views/one/one.vue')
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
