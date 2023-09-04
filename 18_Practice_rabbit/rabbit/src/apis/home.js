import httpInstance from '@/utils/http'
export const getBannerAPI = () => httpInstance({url: '/home/banner'})
export const getNewAPI = () => httpInstance({url: '/home/new'})
export const getHotAPI = () => httpInstance({url: '/home/hot'})
export const getGoodsAPI = () => httpInstance({url: '/home/goods'})
