import { defineStore } from "pinia";
import { ref } from 'vue'
import {loginAPI} from "@/apis/user";


export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = (reqData) => {
    return new Promise((resolve, reject) => {
      loginAPI(reqData)
        .then((res) => {
          userInfo.value = res
          resolve(res)
        })
        .catch((errInfo) => {
          console.log(errInfo);
          userInfo.value = errInfo.response.data
          reject(errInfo.response.data)
        })
    })
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  return{
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
  {
  persist: true
}
)
