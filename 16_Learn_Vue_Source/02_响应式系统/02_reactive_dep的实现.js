class Dep {
  constructor() {
    this.subscribers = new Set() //用set是因为 集合不允许出现元素重复 避免一个回调函数注册多次
  }

  //把回调函数添加进 subscribers 集合
  addEffect(effect){
    this.subscribers.add(effect)
  }

  //依次执行集合内的所有回调函数
  notify() {
    this.subscribers.forEach((effect) => {
      effect()
    })
  }
}
const info = {counter: 1};

const dep = new Dep();

const doubleCounter = () => {
  console.log(info.counter * 2);
  return 0
}
const powerCounter = () => {
  console.log(info.counter * info.counter);
  return 0
}

//当数据发生变化 这些函数就要被回调 所以被称为副作用 Effect
dep.addEffect(doubleCounter) //这里要添加的是函数名 不能写成doubleCounter() 这样添加的是这个函数的返回值
dep.addEffect(powerCounter)

//在数据发生改变之后 回调所有与这个数据有关的函数 使得有关的数据都发生变化 这就是响应式的设计思想
info.counter++;
dep.notify()

