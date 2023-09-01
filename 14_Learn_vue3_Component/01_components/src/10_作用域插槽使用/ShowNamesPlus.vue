<!--编译域插槽和具名插槽混用-->
<template>
  <div>
    <template v-for="item in names" :key="item">
      <slot name="ShowNamesPlus" :item="item"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "ShowNamesPlus",
  props:{
    names:{
      type:Array,
      default:()=>[],
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
