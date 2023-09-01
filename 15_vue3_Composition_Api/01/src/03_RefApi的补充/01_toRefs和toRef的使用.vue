
<template>
  <div>
    <h2>{{name}}---{{age}}</h2>
    <h2>{{name1}}</h2>
    <button @click="increment">++</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
  name: "App",

  setup(){
    //经过结构之后 代码相当于
    //let name = info.name
    //这是直接把数值拿出来使用 脱离了reactive对象 所以失去了响应式
    //但是开发的时候有时候需要结构 所以可以对reactive对象使用toRefs函数 这个函数会帮我们解包 并全部转换为ref对象
    //那么 之后使用name,age对象的时候要以 ref对象的使用方式来使用
    let { name, age } = toRefs(reactive({
      name:'aaa',
      age: 1
    }))
    //也可使用toRef 指定reactive对象中的属性 转换为 ref对象
    let name1 = toRef(reactive({
      name:'aaaa',
      age:12
    }), 'name')

    function increment(){
      age.value++
    }
    return{
      age,
      name,
      name1,
      increment
    }
  }
}
</script>

<style scoped>

</style>
