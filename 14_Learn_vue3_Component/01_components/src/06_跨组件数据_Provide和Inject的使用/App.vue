<template>
  <div>
    <Home></Home>
    <button @click="addName">+Name</button>
  </div>
</template>

<script>
import Home from "@/06_跨组件数据_Provide和Inject的使用/Home.vue";
import { computed } from 'vue'
export default {
  name: "App",
  components:{
    Home
  },
  //父组件提供一些参数，子孙组件可以跨组件获取，不需要层层组件传递
  //用的比较少
  // provide:{
  //   name:'aaa',
  //   age:12,
  //   arr:this.arr
  // },
  //但是如果需要从data中获取数据放入provide中提供给子孙组件使用，就会出现this的指向问题
  data(){
    return{
      arr:[1,2,3,4,5]
    }
  },
  //this依旧是作用域的问题，如果用上面的方式，this没有被函数的作用域包裹，直接暴露在script标签下，this是指向一个undefined对象，不能正常工作
  //使用provide函数包裹后，this就被该函数作用域包裹，this即可正常工作
  provide(){
    console.log(this);
    console.log(computed(() => this.arr.length));
    return{
        name:'aaa',
        age:12,
      //这里是一次性赋值的，所以不具备响应式，数据发生改变时，传递的数据并不会发生改变
      //所以需要要让this.arr.length变成响应式的，让length实时改变其数值
      //   length:this.arr.length
      length:computed(()=>this.arr.length)//注意 箭头函数是无this的，this会穿透其作用域寻找上一级作用域，所以这里写箭头函数才可以正常工作
      //这样就可以实现响应式了，具体原理之后再学
    }
  },
  methods:{
    addName(){
      console.log(this.arr);
      this.arr.push(0)
    }
  }
}
</script>

<style scoped>

</style>
