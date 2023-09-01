<template>
  <div>
    <div>
      <button @click="isShow = !isShow">IsShow</button>
    </div>

    <!--动画的生命周期钩子函数-->
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
      <h2 v-if="isShow" class="title">aaaa</h2>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    beforeEnter(){
      console.log('beforeEnter');
    },
    enter(){
      console.log('enter');
    },
    afterEnter(){
      console.log('afterEnter');
    },
    afterLeave(){
      console.log('afterLeave');
    },
    beforeLeave(){
      console.log('beforeLeave');
    },
    leave(){
      console.log('leave');
    },
  }
}
</script>

<style scoped>
  .title{
    display: inline-block;
  }

</style>
