<template>
  <div>
    <input type="text" v-model="info.input1">
    <h2 ref="title">{{ info.input1 }}</h2>

  </div>
</template>

<script>
import {reactive, ref, toRef, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup(){
    const info = reactive({input1:'aaa', input2:'bbbb'})
    const name = ref('name')


    //总结一下watch的传入的参数
    // 传入ref对象
    // 要么通过getter函数传入 响应式对象 中的一个数值

    watch([toRef(info, 'input1'), name], (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

    watch([() => info.input1, name], (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

    //从ref中扣出数据 通过getter函数传入
    watch([info, () => name.value], (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

    //从reactive对象中把数据复制一份 通过getter函数传递进去
    //实现对两周响应式对象的 全部数据的监听
    watch([() => ({...info}), () => name.value], (newValue, oldValue) => {
      console.log('new:',newValue ,'old', oldValue)
    })



    return{
      info
    }
  }
}
</script>

<style scoped>

</style>
