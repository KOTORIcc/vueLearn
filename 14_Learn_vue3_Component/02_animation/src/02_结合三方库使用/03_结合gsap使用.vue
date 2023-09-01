<template>
  <div>
    <div>
      <button @click="isShow = !isShow">IsShow</button>
    </div>

    <!--动画的生命周期钩子函数-->
    <!--gsap是js动画 animate是css动画 css=false使vue跳过css的检查，忽略css动画，可以略微提高性能-->
    <transition @enter="enter" @leave="leave" :css="false">
      <h2 v-if="isShow" class="title">aaaa</h2>
    </transition>

  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    enter(element, done){
      gsap.from(element, {
        scale: 0,
        x: 200,
        //标记动画已经完成，主动回调done，不主动回调gsap会自动同步回调，可能导致动画出现问题
        onComplete:done,
      })
    },
    leave(element, done){
      gsap.to(element, {
        scale: 0,
        x: 200,
        onComplete:done
      })
    },
  }
}
</script>

<style scoped>
  .title{
    display: inline-block;
  }

</style>
