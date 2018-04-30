const Mine = () => import('@/page/mine/mine')
const Blank = () => import('../components/blank')
const UserInfo = () => import('../page/mine/userInfo')
const Login = () => import('../page/mine/login')
const Register = () => import('../page/mine/register')
export default [{
  path: '/blank',
  component: Blank,
  redirect: '/mine',
  children: [{
    path: '/mine',
    name: '我的',
    component: Mine
  }, {
    path: '/mine/userInfo',
    name: '个人信息',
    meta: {
      requireAuth: true
    },
    component: UserInfo
  }, {
    path: '/mine/login',
    name: '登陆',
    component: Login
  }, {
    path: '/mine/register',
    name: '注册',
    component: Register
  }]
}]
