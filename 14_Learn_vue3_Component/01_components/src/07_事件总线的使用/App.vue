<template>
  <div>
    <Home></Home>
    <About></About>

  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "@/07_事件总线的使用/About.vue";

export default {
  name: "App",
  components:{
    Home,
    About
  },
}
</script>

<style scoped>

</style>
