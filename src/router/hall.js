const Hall = () => import('@/page/hall/hall')
const Blank = () => import('../components/blank')
const HallItem = () => import('../page/hall/hall-item')
export default [{
  path: '/blank',
  component: Blank,
  redirect: '/hall',
  children: [{
    path: '/hall',
    name: '大厅',
    component: Hall
  }, {
    path: '/hall/hall_item',
    name: '大厅子路由',
    component: HallItem
  }]
}]
