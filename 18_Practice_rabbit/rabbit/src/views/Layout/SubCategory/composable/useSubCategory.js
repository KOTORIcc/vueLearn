import {ref, watch} from 'vue';
import {getSubCategoryAPI} from "@/apis/category";
const SubCategoryData = ref([])
const getSubCategoryData = async (data) => {
  SubCategoryData.value = (await getSubCategoryAPI(data)).result
}

export const useSubCategory = (data) => {
  watch(() => data.sortField, () => {
    data.page = 1
    getSubCategoryData(data).then()
  }, { immediate:true })

  watch(() => data.page, async () => {
    const res = await getSubCategoryAPI(data)
    SubCategoryData.value.items.push(...(res).result.items)
  })

  return SubCategoryData
}
