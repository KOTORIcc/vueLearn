<!--Options Api的缺点在于 实现一个逻辑 产生的代码过于分散 极其不利于代码可读性-->
<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  //Composition Api的主要改进
  setup(){

  }
}
</script>

<style scoped>

</style>
