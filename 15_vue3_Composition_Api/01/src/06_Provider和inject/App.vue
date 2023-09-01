<template>
  <div>
    <Home></Home>
    <input type='number' v-model="counter" step="1">
  </div>
</template>

<script>
import {provide, readonly, ref,} from 'vue'
import Home from "@/06_Provider和inject/Home.vue";

export default {
  name: "App",
  components:{
    Home,
  },
  setup(){
    const name = 'genshit'
    let counter = ref(100);

    //把数据传递给子组件的时候往往需要使数据是只读的 不能让子组件拥有自行修改数据的权限 子组件对于数据的修改最好请求父组件 由父组件代理 不然逻辑会很混乱
    provide('name', readonly(name))
    provide('counter', readonly(counter))

    return{
      counter
    }

  }
}
</script>

<style scoped>

</style>
