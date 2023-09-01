<template>
  <div>
    Home Page
    <h2>{{message}}</h2>
    <h3>{{state.counter}}</h3>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "Home",
  props:{
    message:{
      type: String,
      require: true
    }
  },

  setup(){
    //为了实现响应式 需要把数据对象用reactive包裹起来 并且接收其返回值
    //再把返回值 return出去 这样就可以通过这个值来访问 响应式的数据
    //原理在于 通过一个proxy对象的get和set 方法来访问这些数据 使得vue可以监控到数据的变化 实现响应式 （不确定）
    //reactive要求必须传入一个对象或者数组
    const state = reactive({
      counter: 100,
    })


    //可以定义一个局部函数
    const increment = () => {
      state.counter++
      console.log(state.counter);
    }

      return{
        title:'Hello Home',
        state,
        increment

      }
  }
}
</script>

<style scoped>

</style>
