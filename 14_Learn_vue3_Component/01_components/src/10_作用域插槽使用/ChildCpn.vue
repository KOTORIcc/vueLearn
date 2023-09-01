<template>
  <div>
      <slot></slot>

  </div>
</template>

<script>
export default {
  name: "ChildCpn",
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
