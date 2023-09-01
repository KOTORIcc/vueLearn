<template>
  <div>
    Home Page
    <h2>{{message}}</h2>
    <!--在template中使用ref方式定义的响应式数据时 也应该通过counter.value方式获取数据
        但是vue为了开发方便 主动把value解包出来了，所以不能再写counter.value 直接写ref对象名即可
        其原理本质就是vue帮助调用了.value 所以如果再写counter.value vue就会处理为counter.value.value 这显然是有问题的-->
    <!--我对于响应式的一些理解 js中的数值是不可变化的 所以每次修改数值 都是一个新的地址 所以直接传递数字时 vue会根据属性名把该数字写入dom
        当数字发生变化时 并不会在原地址作修改 而是产生了另一个地址 这时执行代码的浏览器并不知道这个新的地址应该传递给谁
        所以当数据被一个对象包裹时 浏览器可以追溯到这个数值的变化 而实现响应式-->
    <h3>{{counter}}</h3>
    <!--ref的解包是浅层解包 当ref对象位于一个js的普通对象内部的时候就不能实现解包了 得手动写.value-->
    <h4>{{info.counter.value}}</h4>
    <!--如果ref对象在reactive对象中 也可以自动解包-->
    <h5>{{reactiveInfo.counter}}</h5>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import {reactive, ref} from 'vue';
export default {
  name: "Home",
  props:{
    message:{
      type: String,
      require: true
    }
  },

  setup(){
    //也可以使用ref API来实现响应式
    //这样写 显而易见 counter内存储的是ref的一个对象 所以在写逻辑代码时 需要counter.value方式 从对象中取出数据
    //开发中更推荐ref api 相较于 reactive api 这种方式的代码耦合度更低 使用更灵活 即使ref的性能可能比 reactive 略低
    const counter = ref(100)
    const info = {
      counter,
    }
    const reactiveInfo = reactive({
      counter,
    })
    //可以定义一个局部函数
    const increment = () => {
      counter.value++
      console.log(counter.value);
    }

      return{
        title:'Hello Home',
        counter,
        info,
        reactiveInfo,
        increment

      }
  }
}
</script>

<style scoped>

</style>
