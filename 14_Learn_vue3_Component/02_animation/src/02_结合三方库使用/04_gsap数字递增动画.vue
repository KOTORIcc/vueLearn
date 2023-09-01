<!--如何实现数字变换 哗啦啦跳动数字的效果-->
<template>

  <div>
    <input type="number" step="100" v-model="counter">
    <h2>{{showNumber.toFixed(0)}}</h2>
    <!--返回showNumber 并只取整数部分-->
  </div>

</template>

<script>
import gsap from "gsap";
export default {
  name: "App",
  data(){
    return{
      isShow:true,
      counter:0,
      showNumber: 0,
    }
  },
  //watchDog 监听器
  watch:{
    //对counter这个变量进行监听，当发生改变时，会把这个新的值传递给这个函数
    counter(newValue){
      gsap.to(this, {
        //动画时长 1s
        duration:1,
        // 动画效果 把showNumber的值逐渐转换为 newValue
        //h2标签展示showNumber就会出现动画效果
        showNumber: newValue
      })
      // console.log(this);
    }
  }
}
</script>

<style scoped>
  .title{
    display: inline-block;
  }

</style>
