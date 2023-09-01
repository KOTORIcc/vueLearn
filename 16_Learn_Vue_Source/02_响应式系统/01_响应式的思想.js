const info = {counter: 1};
const doubleCounter = () => {
  return info.counter * 2
}
doubleCounter()

//在数据发生改变之后 回调所有与这个数据有关的函数 使得有关的数据都发生变化 这就是响应式的设计思想
info.counter++;
doubleCounter()

