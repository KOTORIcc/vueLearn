import { ref } from 'vue'
import {getBannerAPI} from "@/apis/home";
import { defineStore } from "pinia";

export const useBannerStore = defineStore('banner', () => {
  const PictureList = ref([])
  const getBanner = async () => {
    PictureList.value = (await getBannerAPI()).result
  }
  return{
    getBanner,
    PictureList
  }
})
