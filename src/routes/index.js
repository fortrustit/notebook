import Vue from 'vue'
import VueRouter from 'vue-router'
import routerList from './routerList'
import isEmpty from 'lodash/isEmpty'

Vue.use(VueRouter)

const router = new VueRouter({
  // root: null,
  // hashbang: false,
  // history: true,
  // saveScrollPosition: true,
  // transitionOnLoad: true,
  // linkActiveClass: '',
  suppressTransitionError: __PROD__, // 生产环境下不抛出异常
  routes: routerList
})

router.beforeEach((to, from, next) => {
  const notLogin = isEmpty(JSON.parse(localStorage.accountInfo || '{}'))
  if (to.path !== '/login' && notLogin) {
    router.push('/login')
    return
  } else if (!notLogin && to.path === '/login') {
    router.push(from.path)
    return
  }
  next()
})

// router.map(Object.values(routesMap))

// hooks(router)

/**
 * 调用 router.start(App, '#app') 后，根组件实例就会暴露到 router.app
 * 组件内部可通过 this.$root 访问，外部则可通过 router.app 进行访问
 */
export default router
