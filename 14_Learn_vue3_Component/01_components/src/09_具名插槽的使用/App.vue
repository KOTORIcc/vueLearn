<template>
  <div>
    <!--通过props方式给子组件传递name属性-->
    <NavBar :name="name">
      <!--使用具名插槽需要使用template包裹，且每个插槽只能使用一次，不可重复-->
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template v-slot:center>
        <h2>title</h2>
      </template>
      <!--v-slot语法糖-->
      <template #right>
        <i>i element</i>
      </template>

    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/09_具名插槽的使用/NavBar.vue";
export default {
  name: "App",
  components:{
    NavBar
  },
  data(){
    return{
      name:'right'
    }
  }
}
</script>

<style scoped>

</style>
