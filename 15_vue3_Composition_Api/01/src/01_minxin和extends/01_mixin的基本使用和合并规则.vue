<template>
  <div>
    <!--message在本组件和 mixin的组件中均有定义 以本组件为准-->
    <h2>{{message}}</h2>
    <!--foo函数在本组件和 mixin的组件中均有定义 以本组件为准-->
    <button @click="foo">Click</button>
    <!--这里调用的是在main js中全局注册的 mixInbar 函数-->
    <button @click="mixinBar">Click</button>
  </div>
</template>

<script>
import demoMixin from "@/01_minxin和extends/mixins/demoMixin";
export default {
  name: "App",
  //可能有多个js文件的配置，在此添加进mixins组件中，作混入
  //混入之后 template 模板中已经可以正常使用外部导入的组件中设置的属性和方法了
  //如果混入的js中的属性和方法有重名的 普通函数,属性以主调组件为准，生命函数融合同步调用
  mixins:[demoMixin],//mixin的意义：如果有多个组件有相同的逻辑 可以把这部分逻辑抽离出单独的文件，在通过mixin混入方式实现代码复用
  data(){
    return{
      title: 'hello World'
    }
  },
  created(){
    // 生命周期函数在本组件和mixIn组件中均有定义，会被依次调用
    console.log('App created! here');
  },
  methods:{
    foo(){
      console.log('hello App');
    }
  }
}
</script>

<style scoped>

</style>
