<template>
  <div>
    <button @click="isshow = !isshow"> IsShow</button>

    <transition name="h2animation">
      <h2 v-if="isshow">hello world</h2>
    </transition>


  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      isshow:true
    }
  }
}
</script>

<style scoped>
  .h2animation-enter-from, .h2animation-leave-to{
    /*进入从透明度0开始 离开到透明度为0结束*/
    opacity: 0;
  }
  /*.h2animation-enter-to, .h2animation-leave-from{*/
  /*  !*进入到透明度为1结束  离开从透明度为1开始*!*/
  /*  !*默认离开透明度就是1，所以不写其实也行*!*/
  /*  opacity: 1;*/
  /*}*/
  .h2animation-enter-active, .h2animation-leave-active{
    transition: opacity 1s ease;
  }
  /*设置对哪个属性执行动画，对透明度执行动画，动画时间2s*/
</style>
