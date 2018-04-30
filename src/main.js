// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import axios from './utils/fetch.js'
import Es6Promise from 'es6-promise'
import './init'

Es6Promise.polyfill() // 解决低版本安卓内核和ie浏览器显示空白页面
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
