<template>
  <div class="NavBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <!--动态插槽名-->
      <slot :name="[name]"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    name:'right',
    require:true,
  },
}
</script>

<style scoped>
  .NavBar{
    display:flex;

  }
  .left,.right{
    width:80px;
    background-color: red;
  }
  .left,.right,.center{
    height:44px;

  }
  .center{
    flex:1;
    background-color: blue;
  }
</style>
