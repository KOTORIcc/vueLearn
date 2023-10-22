// axios 基础封装
import axios from 'axios'
import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css'
import { useUserStore } from "@/stores/user";
// import router from '@/router/index'

//创建了一个网络请求实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

//拦截器

// axios 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const UserStore = useUserStore()
    //如果没有存用户信息 或者 第一次访问
    if (JSON.stringify(UserStore.userInfo) === '{}' || !UserStore.userInfo.result) {
      return config // 无账户状态 直接请求 不带token验证
    } else {
      if (UserStore.userInfo.result.token) {
        const token = UserStore.userInfo.result.token
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  },
  (e) => Promise.reject(e))

// axios 响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    console.log(e);
    ElMessage({
      type: 'warning',
      message: e.response.data.msg
    })
    return Promise.reject(e) //回应被标记为失败 并把e传递给下一层 异步函数
  })

export default httpInstance
