<template>
  <div>
    <h2>{{name}}--{{age}}</h2>
    <button @click="changeName">修改Name</button>
    <button @click="changeAge">修改Age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  name: "App",
  setup(){
    //watchEffect :自动收集响应式的依赖
    const name = ref('aaa')
    const age = ref(12)

    function changeName(){
      name.value = 'yuanshen'
    }
    function changeAge(){
      age.value++
      if (age.value >25 ){
        stop()//当age大于25时调用stop 停止监听
      }
    }

    //并不需要指定watch要监听哪个数据 只要使用到了 就会自动把这个get函数划入 相应响应式对象的 副作用中(依赖) 发生数据变化就会依次调用
    const stop = watchEffect((onInvalidate) => {//调用watchEffect函数的返回值 就可以停止监听
      //模拟网络请求
      const timer = setTimeout(() => {
        console.log('网络请求成功');
      },2000)

      console.log('name:', name.value, age.value)
      //监听到数据的变化后 可能会发出网络请求 但是为了防止改一点就请求一次 这里应当作一些处理 连续触发时取消多余网络请求
      //onInvalidate的作用是 在下一次执行watchEffect之前 回调这个函数 对上一次watchEffect作操作
      onInvalidate(() => {
        //如取消上一次未完成的网络请求 降低网络请求的频率
        //这里的代码是一定会执行的 并不会作一些判断 判断逻辑需要自己在这里实现
        // request.cancel()
        clearTimeout(timer)
        console.log('上一次网络请求已取消');
      })
    })


    return{
      name,
      age,
      stop,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped>

</style>
