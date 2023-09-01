<script>
import { h } from 'vue'
export default {
  name: "Home",
  render(){
    return h('div', null, [
      h('h2', null, 'Home Page'),
      //this.$slot可以获取所有绑定到这个组件插槽上的元素
      //default是否存在 存在则调用default绑定的render函数  如果不存在 则使用 h2标签填充
      this.$slots.aaa ? this.$slots.aaa() : h('h2', null, 'default slot title'),
      this.$slots.bbb ? this.$slots.bbb() : h('h2', null, 'default slot title')
    ])
  }
}
</script>

<style scoped>

</style>
