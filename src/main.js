import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import './utils/http.js'
import './utils/dateformat.js'
import './utils/permission.js' //这样导入，相当于把代码导入到了main.js中

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
