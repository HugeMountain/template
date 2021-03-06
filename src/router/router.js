
import MainIndex from '@/views/index.vue'
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'view',
    component: MainIndex,
    meta: {
      title: '首页',
      icon: 'md-at',
      single: true
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          icon: 'md-at',
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
      title: '组件1'
    },
    redirect: '/hello/index',
    children: [
      {
        path: '/hello/index',
        name: 'hello_index',
        meta: {
          icon: 'md-at',
          title: '欢迎1'
        },
        component: () => import('@/views/hello/HelloWorld.vue')
      },
      {
        path: '/hello/index2',
        name: 'hello_index2',
        meta: {
          hideTop: true,
          icon: 'md-at',
          title: '欢迎2'
        },
        redirect: '/hello/index2/index',
        children: [
          {
            path: '/hello/index2/index',
            name: 'hello_index2_index',
            meta: {
              icon: 'md-at',
              title: '欢迎3'
            },
            component: () => import('@/views/hello/HelloWorld.vue')
          },
          {
            path: '/hello/index2/index2',
            name: 'hello_index2_index2',
            meta: {
              hideTop: true,
              icon: 'md-at',
              title: '欢迎4'
            },
            component: () => import('@/views/hello/HelloWorld2.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/two',
    name: 'two',
    component: MainIndex,
    meta: {
      icon: 'md-at',
      title: '组件2'
    },
    redirect: '/two/two1',
    children: [
      {
        path: '/two/two1',
        name: 'two_two1',
        meta: {
          icon: 'md-at',
          title: 'two1'
        },
        component: () => import('@/views/two/two1.vue')
      },
      {
        path: '/two/two2',
        name: 'two_two2',
        meta: {
          hideTop: true,
          icon: 'md-at',
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
      icon: 'md-at',
      title: '组件3'
    },
    redirect: '/one/one',
    children: [
      {
        path: '/one/one',
        name: 'one_one',
        meta: {
          icon: 'md-at',
          title: 'one'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/one/three',
        name: 'one_three',
        meta: {
          icon: 'md-at',
          title: 'three'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/one/four',
        name: 'one_four',
        meta: {
          icon: 'md-at',
          title: 'four'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/one/five',
        name: 'one_five',
        meta: {
          icon: 'md-at',
          title: 'five'
        },
        component: () => import('@/views/one/one.vue')
      }
    ]
  },
  {
    path: '/flex',
    name: 'flex',
    component: MainIndex,
    meta: {
      icon: 'md-at',
      title: '组件5'
    },
    redirect: '/flex/one',
    children: [
      {
        path: '/flex/one',
        name: 'flex_one',
        meta: {
          icon: 'md-at',
          title: 'one'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/flex/three',
        name: 'flex_three',
        meta: {
          icon: 'md-at',
          title: 'three'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/flex/four',
        name: 'flex_four',
        meta: {
          icon: 'md-at',
          title: 'four'
        },
        component: () => import('@/views/one/one.vue')
      },
      {
        path: '/flex/five',
        name: 'flex_five',
        meta: {
          icon: 'md-at',
          title: 'five'
        },
        component: () => import('@/views/one/one.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error401',
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '*',
    name: 'error404',
    component: () => import('@/views/error-page/404.vue')
  }
]
