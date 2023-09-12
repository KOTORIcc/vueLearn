import httpInstance from "@/utils/http";

export const getGoodDetailAPI = (id) => httpInstance({url: '/goods', params:{ id }})
export const getHotGoodsAPI = (id, type, limit = 3) =>
  httpInstance({url: '/goods/hot', params:{ id, type, limit }})
