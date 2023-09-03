// axios 基础封装
import axios from 'axios'

//创建了一个网络请求实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

//拦截器

// axios 请求拦截器
httpInstance.interceptors.request.use(
  (config) => config,
  (e) => Promise.reject(e))

// axios 响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => Promise.reject(e))

export default httpInstance
