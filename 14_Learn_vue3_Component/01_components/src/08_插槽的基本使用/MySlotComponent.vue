<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>default i element</i>
    </slot>
    <!--如果设置了多个slot。替换的时候会全部插入-->
    <slot>
      <i>default i element</i>
    </slot>
    <slot>
      <i>default i element</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
export default {
  name: "MySlotComponent"
}
</script>

<style scoped>

</style>
