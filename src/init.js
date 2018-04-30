import Vue from 'vue'
import './style/index.less'
import router from './router'
import store from './store/store'
import 'lib-flexible'
import { XHeader, ButtonTab, ButtonTabItem, Scroller, Cell, Group, CellBox, Flexbox, FlexboxItem, XButton, Checker, CheckerItem, XInput, ToastPlugin } from 'vux'
import iDialog from './components/common/i-dialog'
// require('./utils/vconsole.js')
Vue.use(ToastPlugin)

Vue.component('x-header', XHeader)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.component('scroller', Scroller)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('cell-box', CellBox)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-button', XButton)
Vue.component('i-dialog', iDialog)
Vue.component('checker', Checker)
Vue.component('checker-item', CheckerItem)
Vue.component('x-input', XInput)

// 路由全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({name: '登陆', query: {redirect: to.fullPath}})
    }
  } else {
    next()
  }
})
