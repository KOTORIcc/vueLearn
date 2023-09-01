import {ref, watch} from "vue";

export default (title = 'default title') => {
  //调用这个函数时生成一个ref对象并返回
  //以后在主调函数中使用时 当ref对象发生改变 就会被watch监听 并且执行callback函数 修改title
  const titleRef = ref(title)
  watch(titleRef, (newValue) =>{
    document.title = newValue
  })

  return titleRef
}
