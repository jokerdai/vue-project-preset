import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/views/list')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/details')
    },
    {
      path: '/chart',
      name: 'Chart',
      component: () => import('@/views/chart/Chart.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/form')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断是否登录
  const sso = Cookies.get('sso.jd.com')
  if (sso) {
    next()
  } else {
    window.location.href = process.env.VUE_APP_SSO_URL + window.location.href
  }
})

export default router
