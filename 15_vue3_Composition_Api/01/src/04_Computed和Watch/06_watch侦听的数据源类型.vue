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

    //第一种用法 传入一个get函数

    watch(() => info.input1, (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

      //把reactive对象拆解成普通的值 通过getter方式传递进watch
      //...是一个运算符 意思是把info中的键值对 复制进一个新的对象中
      //这里这样写 等于把info中的数据抽取出来再传入getter函数
    watch(() => {return {...info}}, (newValue, oldValue) => {
      console.log('new:',newValue ,'old', oldValue)
    })

    
    //第二种用法 传入一个可响应对象

      //reactive对象 返回的newValue 和 oldValue 也是reactive对象
    watch(info, (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

      //ref对象 返回的newValue 和 oldValue是value值本身
    watch(toRef(info, 'input1'), (newValue, oldValue) => {
      // console.log('new:',newValue ,'old', oldValue)
    })

    return{
      info
    }
  }
}
</script>

<style scoped>

</style>
