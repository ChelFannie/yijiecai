import axios from 'axios'
import qs from 'qs'
import store from '../store/store'
import router from '../router'
// axios.defaults.baseURL = 'http://192.168.28.30:9731/'
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const BASE_URL = '/api/' // 配置api因为使用了代理，每个接口都需要加/api，在此加/api就不要加到每个接口了,生产环境需设置真实服务器地址
const TIMEOUT_MILLISECONDS = 5000 // 超时链接

const instance = axios.create({
  withCredentials: true, // 允许携带cookie
  baseURL: BASE_URL, // 基本url
  timeout: TIMEOUT_MILLISECONDS,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// axios请求拦截器
instance.interceptors.request.use((config) => {
  config.headers.token = `${store.state.token}`
  if (config.method === 'post' && config.headers['Content-Type'] !== 'application/json') {
    config.data = qs.stringify(config.data) // stringify POST方式提交的数据
  }
  return config
},
(err) => {
  return Promise.reject(err)
})
// axios响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.code && response.data.code === '10003') {
    // 用户没登录
    store.commit('token', '')
    localStorage.removeItem('token')
    router.push({name: '登陆', query: {redirect: router.currentRoute.fullPath}})
  }
  return response
})
export default instance
