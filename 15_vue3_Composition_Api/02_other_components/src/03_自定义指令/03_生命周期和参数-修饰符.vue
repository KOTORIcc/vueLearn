<template>
  <div>
    <!--v-why 自定义指令 后面还可以.abc 追加修饰词 并且还可以 赋值 这些参数都会经过bindings 传递给生命周期函数-->
    <button @click="increment" v-why.aaa.bbb="message">{{counter}}</button>
  </div>
</template>

<script>


import {ref} from "vue";

export default {
  name: "App",
  setup(){
    const counter = ref(0)
    const message = '自定义指令传进来的值'

    const increment = () => counter.value++

    return{
      counter, increment,
      message
    }


  },
  // 这样写是局部指令
  directives: {
    why: {
      //生命周期函数 在dom回调时 传递进来的bindings就包括了 指令的修饰符和赋值
      created(el, bindings) {
        console.log('created');
        console.log(bindings);
        console.log(bindings.value);
        console.log(bindings.modifiers);
      },
      beforeMount() {
        console.log('beforeMount');
      },
      mounted() {
        console.log('mounted');
      },
      beforeUpdate() {
        console.log('beforeUpdate');
      },
      update() {
        console.log('update');
      },
      beforeUnmount() {
        console.log('beforeUnmount');
      },
      unmounted() {
        console.log('unmounted');
      }
    }
  }
}
</script>

<style scoped>

</style>
