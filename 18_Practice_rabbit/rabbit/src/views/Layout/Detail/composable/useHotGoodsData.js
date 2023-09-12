import {getHotGoodsAPI} from "@/apis/detail";
import { ref } from  'vue'
const HotGoodsData = ref([])
const getHotGoodsData = async (id, type, limit) => {
  HotGoodsData.value = (await getHotGoodsAPI(id, type, limit)).result
}

export const useHotGoodsData = ({id, type, limit}) => {
  getHotGoodsData(id, type, limit).then()
  return HotGoodsData
}
