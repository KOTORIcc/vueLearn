import httpInstance from "@/utils/http";
export const getCategoryAPI = (id) => httpInstance({url:'/category', params:{ id }})
export const getCategoryFilterAPI = (id) => httpInstance({url:'/category/sub/filter', params:{ id }})
export const getSubCategoryAPI = (data) => httpInstance({url:'/category/goods/temporary', method:'POST', data})
