/**
 * 首页路由，包括竞技彩
 */
const Home = () => import('@/page/home/home') // 首页
const Blank = () => import('../components/blank') // 首页路由空白
// 竞技彩
const Competitive = () => import('../components/home/competitive/competitive')

// 竞彩足球
const FootBall = () => import('../components/home/competitive/football')
const WinFlatLoss = () => import('../page/home/competitive/football/winFlatLoss')
const LetWinFlatLoss = () => import('../page/home/competitive/football/letWinFlatLoss')
const Mix = () => import('../page/home/competitive/football/mix')
const Goals = () => import('../page/home/competitive/football/goals')
const Score = () => import('../page/home/competitive/football/score')
const HalfFull = () => import('../page/home/competitive/football/halfFull')
const BuyFootBall = () => import('../components/home/competitive/buyFootBall.vue')
// 竞彩篮球
const YY = () => import('../page/home/competitive/basketball/yy')

export default [{
  path: '/blank',
  component: Blank,
  redirect: '/home',
  children: [{
    path: '/home',
    name: '首页',
    component: Home
  }, {
    path: '/home/competitive',
    name: '竞技彩',
    component: Competitive,
    children: [{
      path: 'football',
      name: '竞彩足球',
      component: FootBall,
      children: [{
        path: 'winFlatLoss',
        name: '胜平负',
        component: WinFlatLoss
      }, {
        path: 'letWinFlatLoss',
        name: '让球胜平负',
        component: LetWinFlatLoss
      }, {
        path: 'mix',
        name: '混合过关',
        component: Mix
      }, {
        path: 'goals',
        name: '总进球',
        component: Goals
      }, {
        path: 'score',
        name: '比分',
        component: Score
      }, {
        path: 'halfFull',
        name: '半全场',
        component: HalfFull
      }]
    }, {
      path: '/home/competitive/',
      name: '竞彩篮球',
      component: Score
    }]
  }, {
    path: '/home/yy',
    name: '篮球',
    component: YY
  }, {
    path: 'buyFootBall',
    name: '足球购买',
    component: BuyFootBall
  }]
}]
