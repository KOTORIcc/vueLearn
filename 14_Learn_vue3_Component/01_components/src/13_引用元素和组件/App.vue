<template>
  <div>
    <!--ref是vue指定的属性名-->
    <!--绑定到了元素上-->
    <h2 ref="title">123456</h2>
    <button @click="btnClick">Click</button>
    <!--ref的意义在于，给组件绑定一个名字，父组件即可通过这个名字访问子组件的所有资源-->
    <NavBar ref="tab"></NavBar>
    <!--与props的区别在于，props可以实现双向绑定，但是不能访问函数等子组件资源
    ref可以访问全部资源，但是不能实现双向绑定-->
  </div>
</template>

<script>
import NavBar from "@/13_引用元素和组件/NavBar.vue";
export default {
  name: "App",
  data(){
    return{
      parentdata:'hello'
    }
  },
  methods:{
    btnClick(){
      this.$refs.tab.getmessage()
      console.log(this.$refs.tab.NavBarMessage);
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>
