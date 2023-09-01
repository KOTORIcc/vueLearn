<template>
  <div>
    <h2>
      NavBar
    </h2>
    <button @click="getparentdata">get parent data</button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      NavBarMessage:'hello navbar data',
      parentdata:this.$parent.parentdata
    }
  },
  methods:{
    getmessage(){
      console.log('hello navbar methods');
    },
    getparentdata(){
      //可以通过￥parent方式获取父组件，以及$root方式获取根组件的数据-
      console.log(this.$parent.parentdata);
    }
  }
}
</script>

<style scoped>

</style>
