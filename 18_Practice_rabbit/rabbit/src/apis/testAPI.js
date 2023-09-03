import httpInstance from "@/utils/http";

// 封装了一个网络请求api 用来访问这个url并返回Promise对象
export const getCategory = () => httpInstance({ url: 'home/category/head' })

