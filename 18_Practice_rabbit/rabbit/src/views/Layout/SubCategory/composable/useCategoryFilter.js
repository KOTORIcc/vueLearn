import { ref } from 'vue';
import { getCategoryFilterAPI } from "@/apis/category";
const CategoryFilterData = ref([])

const getCategoryFilterData = async (route) => {
  CategoryFilterData.value = (await getCategoryFilterAPI(route.params.id)).result
}

export const useCategoryFilter = (route) => {
  getCategoryFilterData(route).then()
  return CategoryFilterData
}
