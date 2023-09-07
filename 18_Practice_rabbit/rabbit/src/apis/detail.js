import httpInstance from "@/utils/http";

export const getGoodDetailAPI = (id) => httpInstance({url: '/goods', params:{ id }})
