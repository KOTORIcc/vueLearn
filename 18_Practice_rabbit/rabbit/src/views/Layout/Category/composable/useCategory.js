import {ref} from "vue";
import {getCategoryAPI} from "@/apis/category";
import {onBeforeRouteUpdate} from "vue-router";

const categoryList = ref({})
const getCategory = async (newValue) => {
  categoryList.value = (await getCategoryAPI(newValue)).result
}


export const useCategory = (route) => {
  getCategory(route.params.id).then()

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id).then()
  })
  //不适合使用watch监听
  // watch(() => route.params.id, (newValue) => {
  //   console.log(route);
  //   if (newValue !== undefined) {
  //     getCategory(newValue).then()
  //   }
  // })
  return categoryList
}
