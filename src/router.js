import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Users from '@/components/user/Users.vue'
import Roles from '@/components/role/Roles.vue'
import GoodsCate from '@/components/goods/GoodsCate.vue'
import GoodsList from '@/components/goods/GoodsList.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

const router = new Router({
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
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/roles', component: Roles },
        { path: '/goods', component: GoodsList },
        { path: '/categories', component: GoodsCate },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})

export default router
