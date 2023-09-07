import { ref } from 'vue'
import { getGoodDetailAPI } from '@/apis/detail'
const goodDetailData = ref([])
const getGoodDetail = async (id) => {
  goodDetailData.value = (await getGoodDetailAPI(id)).result
}

export const useGoodDetail = (id) => {
  getGoodDetail(id).then()
  return goodDetailData

}
