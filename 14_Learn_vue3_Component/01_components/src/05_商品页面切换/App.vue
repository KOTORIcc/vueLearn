<template>
  <div>
    <TabControl :titles="goodsname" @itemClick="PageChange"></TabControl>
    <h3>{{content[CurrentIndex]}}</h3>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  name: "App",
  components:{
    TabControl,
  },
  data(){
    return{
      goodsname:['衣服','鞋子','裤子'],
      content:['衣服页面','鞋子页面','裤子页面'],
      CurrentIndex: 0,
    }
  },
  methods:{
    PageChange(index){
      this.CurrentIndex = index
    }
  }
}
</script>

<style scoped>

</style>
