<template>
  <div>
  </div>
</template>

<script>
import emitter from "@/07_事件总线的使用/utils/eventBus";

export default {

  name: "HomeContent",
  //在组件创建后即开始on监听data的信号
  created(){
    //后面的箭头函数是用来接受处理广播信号携带的数据的
    emitter.on('data',dataHandler)
    //监听所有的事件
    emitter.on('*',(type,info)=>{
      console.log('* listener',type,info);
    })
  },
  //把处理函数提取出去，即可实现监听信号的启动和结束
  beforeUnmount() {
    emitter.off('data',dataHandler)
    //销毁所有的总线信号
    emitter.all.clear()
  },
  methods:{
    dataHandler(info){
      console.log(info);
      return {}
    }
  },

}
function dataHandler(info){
  console.log(info);
}
</script>

<style scoped>

</style>
