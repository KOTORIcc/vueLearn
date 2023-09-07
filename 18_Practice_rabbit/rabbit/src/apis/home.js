import httpInstance from '@/utils/http'
export const getBannerAPI = (distributionSite = 'HomePageBanner') => {
  if (distributionSite === 'HomePageBanner') {
    distributionSite = 1
  } else if (distributionSite === 'CategoryPageBanner') {
    distributionSite = 2
  } else {
    distributionSite = 1
  }
  return httpInstance({url: '/home/banner', params:{ distributionSite }})
}
export const getNewAPI = () => httpInstance({url: '/home/new'})
export const getHotAPI = () => httpInstance({url: '/home/hot'})
export const getGoodsAPI = () => httpInstance({url: '/home/goods'})
