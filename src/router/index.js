import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('@/views/index.vue'),
      redirect: '/view/HelloWorld',
      children: [
        {
          path: '/view/HelloWorld',
          name: 'HelloWorld',
          component: () => import('@/views/HelloWorld.vue')
        }
      ]
    }
  ]
})
