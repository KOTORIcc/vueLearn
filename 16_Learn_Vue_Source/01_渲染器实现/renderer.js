const h = (tag, props, children) => {
  //需要返回vnode 而vnode就是一个js对象 就是一个大括号
  return {
    // tag: tag,
    // props: props,
    // children: children,
    //可以简写成
    tag,
    props,
    children,
  }
}

//h函数生成了虚拟dom 但是想要显示出来 还需要把虚拟dom 映射、挂载到dom上
const mount = (vnode, container) => {
  //首先需要把vnode转化成真实的dom
  //并且需要把生成的真是dom赋值给 vnode一份 以后回调函数的时候有用
  //1、创建出真实的元素 并且在vnode上保留el
  const el = vnode.el =  document.createElement(vnode.tag) //只是先注册跟组件 后面的一步步注册
  //createElement函数就是h函数的别名 是同一个东西 但是跟这个document.createElement不是同一个东西， 这玩意只负责创建一个标签 （真实dom节点）

  //2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      //但是props中可能会传递进来一些函数
      //如果key值以on开头 判定为 监听函数
      if (key.startsWith('on')) {
        //把key剪去前两个字母 并且转换为小写 , 传递进来的函数作为handler  作为参数 添加事件监听
        el.addEventListener(key.slice(2).toLowerCase(), value)
      }else {
        el.setAttribute(key, value)
      }
    }
  }

  //3、处理children
  if (vnode.children) {
    //对vnode中children的类型作判断 如果是字符串 直接赋值给el
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {//这里作了简化 默认只有字符串和 子组件两种类型
      //如果是 子组件 遍历children中的所有 子组件 item
      vnode.children.forEach((item) => {
        //调用mount 把这些子组件 挂载到 它的 父组件el 中
        mount(item, el)
      } )
    }
  }

  //4、将el挂载到container中
  //再把父组件el 挂载到跟组件中
  container.appendChild(el)
}

const patch = (vdom, vdom1) => {
  //如果连根标签的类别都不一样了 那么直接整个dom被替换 就不需要作判断了
  if (vdom.tag !== vdom1.tag) {
    //先拿到 vdom中根vnode的父节点   之前createElement的时候把生成的dom节点赋值给vnode了 此时取出这个dom 调用方法获取其父dom元素
    const vDomElParent = vdom.el.parentElement;
    //获取了根标签的父dom元素 就可以把这个根标签 从dom移除
    vDomElParent.removeChild(vdom.el)

    //在把这个新的vdom挂载到原父dom下
    mount(vdom1, vDomElParent)
  } else {
    //取出oldVDom的el 并且赋值给新的VDom 新的vdom没有被挂载过 不存在el
    const el = vdom1.el = vdom.el;


    //处理props
    const oldProps = vdom.props || {};
    const newProps = vdom1.props || {};
    //获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];

      //为什么要转换为字符串 因为直接比较的话 例如onClick函数 函数体引用的数据变化了 如this.data.counter++ 都会导致箭头函数的地址发生改变 直接比较就会出现误判
      //仅仅能解决问题 逻辑是不严谨的 正式的vue源码应该严谨很多
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        if (key.startsWith('on')) {
          //把key剪去前两个字母 并且转换为小写 , 传递进来的函数作为handler  作为参数 添加事件监听
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        }else {
          el.setAttribute(key, newValue)
        }
      }
    }

    //删除旧的props
    for (const key in oldProps) {
      //如果旧dom中的props属性在新的中不存在
      if (!(key in newProps)) {
        if (key.startsWith('on')) {
          const value = oldProps[key]
          //把key剪去前两个字母 并且转换为小写 , 传递进来的函数作为handler  作为参数 添加事件监听
          el.removeEventListener(key.slice(2).toLowerCase(), value)
        }else {
          el.removeAttribute(key)
        }
      }
    }

    //处理children
    const oldChild = vdom.children || []
    const newChild = vdom1.children || []


    if (typeof newChild === 'string') {

      if (typeof oldChild === 'string') {
        if (newChild !== oldChild) {//都是字 字不一样
          el.textContent = newChild //textContent 是元素内的文字
        }
      } else { //新的是字 老的不是字
        el.innerHTML = newChild //innerHTML是带标签的整行元素 把虚拟节点放进去 会自动生成一个真实dom 但是不推荐这样用
      }
    } else {//newChild本身是一个数组 就是 子虚拟节点

      //有相同key值的节点进行patch比较
      const commonLength = Math.min(oldChild.length, newChild.length)
      for (let i = 0; i < commonLength; i++) {
        patch(oldChild[i], newChild[i])
      }

      if (newChild.length > oldChild.length) {
        //对于多出来的几个子节点需要进行挂载
        for (let i = commonLength; i < newChild.length; i++){
          mount(newChild[i],el)
        }
      } else {
        for (let i = commonLength; i < oldChild.length; i++){
          //移除dom
          el.removeChild(oldChild[i].el)

        }
      }
    }
  }
}



