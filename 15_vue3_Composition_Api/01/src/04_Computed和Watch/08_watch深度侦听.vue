<template>
  <div>
    <input type="text" v-model="info.friend.name">
    <h2 ref="title">{{ info.friend.name }}</h2>

  </div>
</template>

<script>
import {reactive, ref, toRef, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup(){
    const info = reactive({
      input1:'aaa',
      input2:'bbbb',
      friend: {
        name: 'kobe'
      }
    })

    //如果传入进去的是一个reactive 源码中默认 开启了深度侦听 deep = true
    watch(info, (newValue, oldValue) => {
      console.log('new:',newValue ,'old', oldValue)
    })

    //但是如果这样 把reactive对象 中的数据 解构再赋值到一个普通的state对象中 通过getter函数传递进去 默认不会进行深度侦听
    watch(() => ({...info}), (newValue, oldValue) => {
      console.log('new:',newValue ,'old', oldValue)
    }, {
      deep: true,
      immediate: true
    })

    return{
      info
    }
  }
}
</script>

<style scoped>

</style>
