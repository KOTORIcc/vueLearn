import { customRef } from "vue";

export default function(value, delay){

  let timer = null;
  return customRef((track, trigger) => {
    return {
      get(){
        //track 展示数据式调用get方法获取数据 并且通过track 记录下哪些地方使用了这个元素 即收集依赖
        track()
        return value
      },
      set(newValue){
        //防抖的实现
        //每次数据被修改时 计时器归零
        clearTimeout(timer)
        //当数据停止更改500ms后才触发同步
        timer = setTimeout(() => {
          //数据发生变化时 使用set方法 更新ref对象中的数据
          value = newValue
          //并且调用trigger方法 将track方法记录的 使用了这个数据的地方 更改这些地方的数据
          //如果不调用trigger ref对象的数据会变 但是dom上显示的数据不会跟着改变
          trigger()
        },delay)

      }
    }
  })
}
