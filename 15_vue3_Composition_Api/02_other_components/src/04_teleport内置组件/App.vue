<template>
  <div class="app">
    <!--把这个模板挂载到 dom 中 id为why的标签中-->
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      <HelloWorld></HelloWorld>
    </teleport>

    <!--分开来写也没关系 最终会整合挂载进同一个  标签中-->
    <teleport to="#why">
      <span>1212</span>
    </teleport>


  </div>
</template>

<script>
import HelloWorld from "@/04_teleport内置组件/HelloWorld.vue";
import {getCurrentInstance} from "vue";
export default {
  name: "App",
  components:{
    HelloWorld
  },
  mounted() {
    //通过插件 在全局注册了一个 name属性 因此这里可以取到这个值
    //但是普通的命名方式容易与组件中定义的名字冲突 所以添加的全局属性一般以$开头
    console.log(this.$name);
  },
  //但是 setup 没有绑定 this 如何获取到这个值
  setup(){
    //所以需要getCurrentInstance来获取 组件
    const instance = getCurrentInstance()
    console.log(instance);
    console.log(instance.appContext.app.config.globalProperties.$name);
  }
}
</script>

<style scoped>

</style>
