<!--子组件通过props组件来实现从父组件中接收数据，相当于子组件对外提供的数据接口，方便调用子组件时作出个性化的修改-->
<template>
  <div id="app">
    <ChildComponent title="ChildComponent1" content="bbbbb"></ChildComponent>
    <ChildComponent title="ChildComponent2" content="ddd"></ChildComponent>

    <!--传递的属性的名字是可以随便取的，只要子组件中给这个名字定义了props即可-->
    <CommonComponent :a="message.a" :b="message.b"></CommonComponent>
    <!--通过集合一次性传递所有对象的值，对集合中属性的名字有要求，必须一致才能生效-->
    <CommonComponent :="message"></CommonComponent>
    <CommonComponent :="mes"></CommonComponent> <!--这个是无效的-->
    <!--class不在子组件定义的props属性中，称为非props的Attribute属性-->
    <!--这种属性会传递给子组件的根标签，作为根的属性-->
    <CommonComponent CommonComponentClass1="ChildClass" a="CommonComponent2" ></CommonComponent><!--如果inheritAttrs为true 这里会把class属性传递给子组件的div标签-->
    <CommonComponent CommonComponentClass2="ChildClass" a="CommonComponent3"></CommonComponent>
    <!--除了子组件中定义过的props属性，其余的都是attribute属性，都可以在子组件中以$attrs的方式手动获取-->

    <MultiRootElement Myattrs="ChildClass"></MultiRootElement>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";
  import CommonComponent from "./CommonComponent.vue";
  import MultiRootElement from "./MultiRootElement.vue";
export default {
  //是否允许子组件根标签继承 非props的Attribute属性，false就不会继承
  inheritAttrs: false,
  //使用场景是我不希望所有的属性都被继承，我希望部分组件可以继承
  //设置false后vue不会主动为子组件继承，这时可以在子组件中
  name: "App",
  components: {
    ChildComponent,
    CommonComponent,
    MultiRootElement
  },
  data(){
    return{
      message:{
        a:'CommonComponent',
        b:'zxzcv',
      },
      mes:{
        c:'adad',
        d:'adada'
      }

    }
  }
}
</script>

<style scoped>
.ChildClass{
  color:red;

}
.Myattrs{
  color:yellow;
}
</style>
