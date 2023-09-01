<template>
  <div>
    <h5>
      this is Profile page
    </h5>
    <h5>name:{{name}}    id:{{id}}</h5>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data(){
    return{
      //query方式从url中获取数据
      id:this.$route.query.id,
      name:this.$route.query.name
    }
  }
}
</script>

<style scoped>

</style>
