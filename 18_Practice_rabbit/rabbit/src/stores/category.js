import {ref} from "vue";
import {getCategoryAPI} from "@/apis/layouts";
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  // getCategoryAPI返回的是Promise对象 因为其根源是axios创建的实例进行网络访问 是一个async函数
  // async函数的特点就是不会阻塞程序运行 使用async函数时不会等待 瞬时返回一个Promise对象
  // 当使用async函数前加上 await后 就会获取函数执行完毕后的值 await不能获取值时可以用 .then(res => ) 这种写法来获取res值
  // 所以加上await正常情况下可以直接获取 API返回的值 而不必再通过.then获取
  // console.log(await getCategoryAPI());
  const getCategory = async () => {
    categoryList.value = (await getCategoryAPI()).result
  }
  return{
    categoryList,
    getCategory
  }
})


