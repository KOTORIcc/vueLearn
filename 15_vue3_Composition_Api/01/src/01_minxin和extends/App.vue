<template>
  <div>
    <h2>{{title}}</h2>
    <button @click="bar"></button>
  </div>
</template>

<script>
import BasePage from "@/01_minxin和extends/pages/BasePage.vue";
export default {
  name: "App",
  //通过 extends 方式 可以实现 子组件的 js部分共享 template部分是不会共享的
  //很少用
  extends: BasePage,
  data(){
    return{
      content: 'hello App'
    }
  }


}
</script>

<style scoped>

</style>
