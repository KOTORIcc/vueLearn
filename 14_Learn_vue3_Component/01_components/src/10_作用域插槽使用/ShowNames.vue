<template>
  <div>
    <!--遍历names中的所有元素，设置一个插槽-->
    <template v-for="item in names" :key="item">
      <!--可以给插槽定义一些属性，如item 这样父组件就可以通过插槽，获取item数据-->
      <slot :item="item">{{item}}</slot> <!--slot插槽设置attrs参数就是作用域插槽，至此数据已经广播出去，等待调用组件的接受-->
    </template>

  </div>
</template>

<script>
export default {
  name: "ShowNames",
  props:{
    names:{
      type:Array,
      default:() => []
    }
  }
}
</script>

<style scoped>

</style>
