import { useIntersectionObserver } from "@vueuse/core";

export const registerImgLazy = (app) => {
  app.directive('img-lazy', {
    //el指 自定义指令绑定的元素img bindings 指令的后缀修饰符 及传递进来的值
    // bindings.value bindings.modifiers
    mounted(el, bindings){
    const { stop } = useIntersectionObserver(
        el,
        //当被监听的el进入显示范围时 isIntersecting 变为true
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = bindings.value
            stop()
          }
        }
      )

    }
  })
}
