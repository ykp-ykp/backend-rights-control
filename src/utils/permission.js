import Vue from 'vue'
import store from '../store';
import router from '../router';

const permission = {
  inserted(el, binding) {
    //传过来的参数中，action表示被绑定的按钮是什么操作；effect表示当用户没有这个操作权限的时候，应该如何如理这个按钮
    const action = binding.value.action
    const effect = binding.value.effect
    //获取用户在当前路由中所具有的权限列表
    let currentPathPermissions = router.currentRoute.meta   
    if(currentPathPermissions.indexOf(action) == -1){
      if(effect === 'disabled'){
        el.disabled = true
        el.classList.add('is-disabled') //element-ui需要的处理
      }
      else
        el.parentNode.removeChild(el)
        //el.style.display = 'none'
    }
  }
}

Vue.directive('permission', permission)
