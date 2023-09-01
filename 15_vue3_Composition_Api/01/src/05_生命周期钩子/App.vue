<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
import {onMounted, onUpdated, onUnmounted, ref} from "vue";

export default {
  name: "App",
  //在composition Api中没有created和beforeCreated 但是setup本身的 执行时间比这两个api更早 所以要做什么可以直接在setup中做
  setup(){
    const counter = ref(0)
    function increment(){
      counter.value++
    }
    //传递进一个回调函数
    onMounted(() => {
      console.log('App Mounted');
    })

    //当组件更新时 就会回调这个传进去的函数
    onUpdated(() => {
      console.log('App Updated');
    })

    return{
      counter,
      increment
    }
  }
}
</script>

<style scoped>

</style>
