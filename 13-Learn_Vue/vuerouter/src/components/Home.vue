<template>
  <div>
    <h1>this is home page</h1>
    <!--  子路径映射的组件在 父组件 内部展示 -->
    <h4>二级子组件展示</h4>
    <h4>-------------------</h4>
    <router-view></router-view>
    <router-link to="/Home/news">news</router-link>
    <router-link to="/Home/message">message</router-link>
    <h4>-------------------</h4>
  </div>
</template>

<script>
export default {
  name: "Home",

}
</script>

<style scoped>

</style>
