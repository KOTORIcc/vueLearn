<template>
  <div>
<!--    <Layout></Layout>
    这里不能直接写Layout 必须使用router-view 不然在自动解析路径对应组件的时候会出bug 导致重复渲染
    有几级路由 就应该有对应的几层 router-view-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components:{
  },
  setup(){
  }
}
</script>

<style scoped lang="scss">

</style>
