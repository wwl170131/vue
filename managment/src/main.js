// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入插件
import ElementUI from 'element-ui'
import MyHttpServer from '@/plugins/http.js'

import '@/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false //项目生产环境
// 注册ElementUI
Vue.use(ElementUI)
Vue.use(MyHttpServer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
