<template>
  <div>
    <button v-for="(item, index) in tabs"
            :key="item"
            @click="ChangeColor(index)"
            :class="{active: CurrentIndex === index}">{{item}}
    </button>

    <!--1、通过v-if实现页面切换-->

<!--    <template v-if="CurrentIndex===0">-->
<!--      <Home></Home>-->
<!--    </template>-->
<!--      <template v-if="CurrentIndex===1">-->
<!--        <About></About>-->
<!--    </template>-->
<!--    <template v-if="CurrentIndex===2">-->
<!--      <Category></Category>-->
<!--    </template>-->

    <!--2、动态组件方式-->
    <!--同样可以通过props方式给子组件传递数据-->

    <!--！！！！！！！！！！！keep-alive中不能写注释！！！！！！！！！！！
    不然会报错 VueCompilerError: <KeepAlive> expects exactly one child component.-->

    <!--include申明哪些组件划入留存，可以不写，默认全部-->
    <keep-alive include="Home,Category,About">
      <component :is="tabs[CurrentIndex]"
                 name="abcde"
                 age="12"
                 @PageClick="PageClick"/>
    </keep-alive><!--is传入已经注册过的组件的名字-->


  </div>
</template>

<script>
import Category from "@/11_动态组件的使用/Pages/Category.vue";
import Home from "@/11_动态组件的使用/Pages/Home.vue";
import About from "@/11_动态组件的使用/Pages/About.vue";
export default {
  name: "App",
  data(){
    return{
      tabs:['Home','About','Category'],
      CurrentIndex:0,
    }
  },
  methods:{
    ChangeColor(index){
      this.CurrentIndex = index;
    },
    PageClick(){
      this.CurrentIndex = 1
    }
  },

  components:{
    Category,
    Home,
    About
  }
}
</script>

<style scoped>
.active{
  color:red;
}
</style>
