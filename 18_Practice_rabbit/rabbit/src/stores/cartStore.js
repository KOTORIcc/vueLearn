import { defineStore } from "pinia";
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/user";
import { insertCartAPI, findNewCartListAPI, delCartAPI, mergeCartAPI } from "@/apis/cart";

export const useCartStore =  defineStore('cart', () => {
  const cartList = ref([])
  const userStore = useUserStore()
  const isLogin = computed(() => {
    return !!userStore.userInfo.token;
  })

  const getCart = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  const clearCart = () => {
    // const ids = []
    cartList.value = []
    // cartList.value.forEach((item) => ids.push(item.id))
    // await delCartAPI(ids)
  }
  const addCart = async (goodInfo) => {
    const { skuId, count } = goodInfo
    //已经添加过 count+1
    //没有添加过 push
    if (isLogin.value) {
      await insertCartAPI({ skuId, count})
      await getCart()
    } else {
      const item = cartList.value.find((item) => goodInfo.skuId === item.skuId)
      if (item) {
        item.count = item.count + goodInfo.count
      } else {
        cartList.value.push(goodInfo)
      }
    }

  }

  const delCart = async (skuId) => {

    if (isLogin.value) {
      await delCartAPI([skuId])
      await getCart()
    } else {
      const target = cartList.value.find((item) => skuId === item.skuId)
      cartList.value = cartList.value.filter((item) => item !== target)
    }
  }

  const mergeCart = async () => {
    const reqData = []
    cartList.value.forEach((item) => reqData.push({skuId: item.skuId, selected: item.selected, count: item.count}))
    await mergeCartAPI(reqData)
  }
  const goodNum = computed(() => {
    let num = 0
    cartList.value.forEach((item) => {
      num = num + item.count
    })
    return num
  })

  const goodTotalPrice = computed(() => {
    let price = 0
    cartList.value.forEach((item) => {
      price = price + ( item.price * item.count )
    })
    return price
  })

  const allSelected = computed(() => {
    let select = true
    cartList.value.forEach((item) => {
      if (!item.selected) {
        select = false
        return null
      }
    })
    return select
  })

  return{
    cartList, addCart, delCart, getCart, clearCart, mergeCart,
    goodNum, goodTotalPrice, allSelected
  }
}, {
    persist: true
  })
