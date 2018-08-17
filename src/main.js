// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import '@/common/stylus/index.styl'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from '@/store'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(MintUi)
Vue.use(Elementui)
// router.afterEach((to,from,next) => {
//   console.log(from)
//   console.log(to)
//   if(from.matched[0]){
//     from.matched[0].instances.default.$messagebox.close()
//     console.log(from.matched[0].instances.default.$messagebox)
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.afterEach((to,from) => {
  console.log(from)
  // console.log(to)
  if(from.matched[0]&&from.matched[0].instances.default.$messagebox){
    from.matched[0].instances.default.$messagebox.close()
    //console.log(from.matched[0].instances.default.$messagebox)
  }
})