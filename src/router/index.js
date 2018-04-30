import Vue from 'vue'
import Router from 'vue-router'

import home from './home' // 首页
import hall from './hall' // 大厅
import mine from './mine' // 大厅

// import HelloWorld from '@/components/HelloWorld'
// const WinFlatLoss = () => import('../page/home/competitive/football/winFlatLoss')
// const YY = () => import('../page/home/competitive/basketball/yy')
// const Home = () => import('@/page/home/home')
const Blank = () => import('../components/blank')
// const Hall = () => import('../page/hall/hall')
const Orders = () => import('../page/orders/orders')
// const Mine = () => import('../page/mine/mine')
const Error = () => import('../components/404.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Blank,
      redirect: '/blank',
      children: [
        ...home
      // {
      //   path: '/blank',
      //   name: '首页',
      //   component: Blank,
      //   redirect: '/home',
      //   children: [{
      //     path: '/home',
      //     name: '竞彩',
      //     component: Home
      //   }, {
      //     path: '/home/WinFlatLoss',
      //     name: '竞彩',
      //     component: WinFlatLoss
      //   }, {
      //     path: '/home/yy',
      //     name: '篮球',
      //     component: YY
      //   }]
      // }
      ]
    },
    {
      path: '/hall',
      component: Blank,
      redirect: '/blank',
      children: [
        ...hall
      ]
    },
    {
      path: '/orders',
      name: '跟单',
      component: Orders
    },
    {
      path: '/mine',
      component: Blank,
      redirect: '/blank',
      children: [
        ...mine
      ]
    }, {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
