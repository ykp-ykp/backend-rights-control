import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//当前模块中具备的权限关系映射
const actionMapping = {
  get: 'view', //查看-->get请求
  post: 'add', //添加-->post请求
  put: 'edit', //编辑-->put请求
  delete: 'delete', //删除-->delete请求
}

//请求拦截控制
axios.interceptors.request.use((request) => {
  // console.log(request.url);
  // console.log(request.method);
  if (request.url !== 'login') {
    //除了登录请求以外，在请求头中全部添加上token
    request.headers.Authorization = sessionStorage.getItem('token')
    //将请求方式映射成为操作类型的权限
    const action = actionMapping[request.method]
    //获取用户在当前路由下所具有的权限
    const currentRight = router.currentRoute.meta
    if (currentRight && currentRight.indexOf(action) === -1) {
      //没有权限发送请求，通过报错拦截
      alert('没有权限！')
      return Promise.reject(new Error('没有权限'))
    }
  }
  return request
})

//响应拦截控制
axios.interceptors.response.use((response) => {
  if (response.data.meta.status === 401) {
    //返回401表示token失效，返回登陆界面
    router.push('/login')
    sessionStorage.clear()
    window.location.reload()
  }
  return response
})

Vue.prototype.$http = axios
