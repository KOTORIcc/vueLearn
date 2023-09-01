<!--Options Api的缺点在于 实现一个逻辑 产生的代码过于分散 极其不利于代码可读性-->
<template>
  <div>
    <Home message="1234" attrA="123"></Home>
  </div>
</template>

<script>
import Home from "@/02_CompositionApi的基本使用/pages/Home.vue";
export default {
  name: "App",
  components:{
    Home
  }
}
</script>

<style scoped>

</style>
