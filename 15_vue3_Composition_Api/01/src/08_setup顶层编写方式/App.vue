<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>

    <Home></Home>
  </div>
</template>

<script setup>//目前只是实验性阶段 以后可能会发生变化
//舍弃了export default
// setup和return 直接顶格写setup中的逻辑代码
  import {ref} from "vue";
  import Home from "@/08_setup顶层编写方式/Home.vue";

  const counter = ref(0)
  const increment = () => counter.value++
</script>

<style scoped>

</style>
