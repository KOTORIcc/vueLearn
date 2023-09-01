<template>
  <div>
    <h1>this is a User page</h1>
    <h3>{{getuserID}}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    getuserID(){
      // $route指向routes中多个路由项中活跃的route项
      // $router指向创建的router对象
      // params方式获取url变量
      // this.$route.param.userid 获取当前活跃路由项的参数，取其中名为userid的数据，所以=与路由表设置的名字有关
      return this.$route.params.userid
    }
  }
}
</script>

<style scoped>

</style>
