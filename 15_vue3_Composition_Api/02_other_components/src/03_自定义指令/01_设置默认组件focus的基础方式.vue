<template>
  <div>
    <input type="text" ref="input">
  </div>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "App",
  setup(){
    const input = ref(null);

    onMounted(() => {
      //绑定的input ref属性 input.value 存放的是 被绑定的标签本身
      console.log(input.value);
      //对input.value中指向的 标签 执行focus
      input.value.focus()
    })

    return{
      input
    }
  }
}
</script>

<style scoped>

</style>
