<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>


export default {
  name: "App",
  //这样写是局部指令
  // directives: {
  //   //这里对自定义指令进行设置 使用的时候要加v- 但是设置的时候不需要
  //   focus: {
  //     //当使用了该指令的元素被挂载的时候 就会执行mounted函数
  //     //因为是dom在渲染时会回调这个函数 回调的时候会传递回来4个参数
  //     //这里的mounted不是生命周期函数 只是这个参数的名字叫做mounted 可以当作指令的生命周期函数
  //     mounted(el, bindings, vnode, preVnode) {
  //       console.log('focus mounted');
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>
