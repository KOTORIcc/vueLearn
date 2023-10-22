import { ref } from 'vue'
import { getGoodDetailAPI } from '@/apis/detail'
const goodDetailData = ref([])
export const useGoodDetail = async (id) => {
  return new Promise((resolve, reject) => {
    getGoodDetailAPI(id)
      .then((res) => {
        goodDetailData.value = res.result
        // console.log(goodDetailData);
        resolve(goodDetailData.value)

    })
      .catch((err) => {
        goodDetailData.value = err.result
        // console.log(goodDetailData);
        reject(goodDetailData.value)
    })
  })
  // goodDetailData.value = (await getGoodDetailAPI(id)).result
  // return goodDetailData
}

// export const useGoodDetail = (id) => {
//   getGoodDetail(id).then()
//   return goodDetailData
//
// }
