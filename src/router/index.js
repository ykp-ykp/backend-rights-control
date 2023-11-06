import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import NotFound from '@/components/NotFound.vue'
import store from '../store'
import { routesMap } from '@/router/routerMap.js'

Vue.use(Router)

const router = new Router({
  //当页面刷新的时候会重新加载router，导致动态路由失效，所以需要在页面刷新的时候调用方法initDynamicRoutes
  routes: [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      name: 'home',
      children: [
        { path: '/welcome', component: Welcome },
        // 根据用户菜单权限进行动态添加路由
        // { path: '/users', component: Users },
        // { path: '/roles', component: Roles },
        // { path: '/goods', component: GoodsList },
        // { path: '/categories', component: GoodsCate },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  //页面跳转之前做拦截动作，判断token是否存在
  if (to.path === '/login') next()
  else {
    const token = sessionStorage.getItem('token')
    if (!token) next('/login')
    else {
      next()
    }
  }
})

export function initDynamicRoutes() {
  //根据二级权限，动态添加路由规则
  console.log(router)
  // const currentRoutes = router.options.routes
  store.state.rightList.forEach((item) => {
    item.children.forEach((item) => {
      // currentRoutes[2].children.push(routesMap[item.path])
      router.addRoute('home', routesMap[item.path])
    })
  })
  // router.addRoutes(currentRoutes)   addRoutes方法已弃用
}

export default router
