import { json } from 'body-parser'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //每次点击页面中的刷新按钮，state中的数据就会根据下面的数据重新初始化
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    username: sessionStorage.getItem('username'),
  },
  mutations: {
    setRightList(state, newData) {
      state.rightList = newData
      sessionStorage.setItem('rightList', JSON.stringify(newData)) //sessionStorage只能存储字符串
    },
    setUsername(state, newData) {
      state.username = newData
      sessionStorage.setItem('username', newData)
    },
  },
  actions: {},
  getters: {},
})
