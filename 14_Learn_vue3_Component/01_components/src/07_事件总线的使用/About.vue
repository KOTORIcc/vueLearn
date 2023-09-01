<template>
  <div>
    <button @click="btnClick">Click</button>
  </div>
</template>

<script>
import emitter from './utils/eventBus'
export default {
  name: "About",
  methods:{
    btnClick(){
      console.log('Click');
      //按钮被点击后通过emitter总线广播data信号，并传递一个 对象，等待其他组件的捕获
      emitter.emit('data',{name:'aaa',age:12})
    }
  }
}
</script>

<style scoped>

</style>
