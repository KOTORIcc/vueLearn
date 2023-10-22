import httpInstance from "@/utils/http";

export const insertCartAPI = ({skuId, count}) => httpInstance({
  url:'/member/cart',
  method:'POST',
  data: {
    skuId,
    count
  }
})

export const findNewCartListAPI = () => httpInstance({
  url:'/member/cart',
  method:'get',
})

export const delCartAPI = (ids) => httpInstance({
  url:'/member/cart',
  method:'delete',
  data:{
    ids
  }
})

export const mergeCartAPI = (data) => httpInstance({
  url:'/member/cart/merge',
  method:'POST',
  data
})
