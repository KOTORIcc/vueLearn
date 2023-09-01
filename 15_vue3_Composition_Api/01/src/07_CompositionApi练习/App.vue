<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>双倍counter: {{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{data}}</h2>
    <input type="text" v-model="data">
    <p class="content"></p>

    <div class="Scroll">
      <div class="Scroll-x">ScrollX:{{scrollX}}</div>
      <div class="Scroll-y">ScrollY:{{scrollY}}</div>
    </div>

    <div class="Mouse">
      <div class="Mouse-x">mouseX:{{mouseX}}</div>
      <div class="Mouse-y">mouseY:{{mouseY}}</div>
    </div>


  </div>

</template>

<script>
import {computed, ref} from "vue";

import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage
} from './hooks';

export default {
  name: "App",
  setup(){
    //进行了逻辑的抽取
    //counter
    const { counter, doubleCounter, decrement, increment } = useCounter()

    //title
    const titleRef = useTitle('default title')
    setTimeout(() => {
      titleRef.value = 'aaa'
    },1000)

    //滚动位置
    const { scrollX, scrollY } = useScrollPosition()

    //鼠标位置
    const { mouseX, mouseY } = useMousePosition()

    // LocalStorage
    //这相当于 新建了一个对象 key值为info 并且data是一个响应式对象 对data的数据操作都会实时更新到 key为info的本地存储中
    const data = useLocalStorage("info", {name:'abc', age: 12})

    return{
      counter, doubleCounter, decrement, increment,
      scrollX, scrollY,
      mouseX, mouseY,
      data,

    }
  }
}
</script>

<style scoped>
  .content{
    width: 3000px;
    height: 5000px;
  }
  .Scroll{
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  .Mouse{
    position: fixed;
    right: 30px;
    bottom: 80px;
  }
</style>
