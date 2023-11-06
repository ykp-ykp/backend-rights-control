<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { initDynamicRoutes } from '@/router/index.js'
export default {
  name: 'app',
  mounted() {
    //当页面刷新的时候会重新执行App.vue中的mounted方法，来执行动态添加路由方法
    initDynamicRoutes()
  },
}
</script>

<style>
</style>
