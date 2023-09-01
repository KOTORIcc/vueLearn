const createApp = (rootComponent) => {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false;

      let oldVNode = null
      //传进去之后 vNode里对于一些数据的引用 就会触发相应的depend 添加进依赖集合
      watchEffect(function (){
        if (!isMounted) {//只要挂载过一次后app实例就
          oldVNode = rootComponent.render()
          mount(oldVNode, container);
          isMounted = true
        } else { //只要vNode中涉及到的数据 都会在调用render函数的时候被访问一次 即触发getter函数中的depend 为其注册本函数 当数据发生改变 就会进行patch
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    }
  }
}
