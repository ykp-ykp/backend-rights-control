import Users from '@/components/user/Users.vue'
import Roles from '@/components/role/Roles.vue'
import GoodsCate from '@/components/goods/GoodsCate.vue'
import GoodsList from '@/components/goods/GoodsList.vue'

const userRule = { path: '/users', component: Users }
const roleRule = { path: '/roles', component: Roles }
const goodRule = { path: '/goods', component: GoodsList }
const categoryRule = { path: '/categories', component: GoodsCate }

const routesMap = {
  users: userRule,
  roles: roleRule,
  goods: goodRule,
  categories: categoryRule,
}

export { routesMap }
