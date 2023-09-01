<template>
  <div>
    <!--组件中设置了slot标签，这里就可以直接替换slot标签中的内容-->
    <MySlotComponent>
      <button>一个按钮</button>
    </MySlotComponent>
    <br>

    <MySlotComponent>
      普通的文本
    </MySlotComponent>
    <br>
    <!--同样的也可以使用组件来替换slot标签-->
    <MySlotComponent>
      <MyButton></MyButton>
    </MySlotComponent>
    <br>

    <!--传入多个标签会全部插入插槽中-->
    <MySlotComponent>
      <h2>1111</h2>
      <h2>2222</h2>
      <h3>3333</h3>
    </MySlotComponent>
  </div>
</template>

<script>
import MySlotComponent from "@/08_插槽的基本使用/MySlotComponent.vue";
import MyButton from "@/08_插槽的基本使用/MyButton.vue";
export default {
  name: "App",
  components:{
    MySlotComponent,
    MyButton
  }
}
</script>

<style scoped>

</style>
