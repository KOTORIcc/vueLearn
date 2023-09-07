import {ref} from "vue";
import {getBannerAPI} from "@/apis/home";

const PictureList = ref([])
const getBanner = async (distribution) => {
  PictureList.value = (await getBannerAPI(distribution)).result
}

export const useBanner = (distribution) => {
  getBanner(distribution).then()
  return PictureList
}


