
<script>
import {h, ref} from 'vue'
export default {
  name: "App",
  setup(){
    const counter = ref(0)

    //setup函数 取代render函数 return箭头函数替代render
    return () => {
      return h('div', {class: 'app'}, [
        h('h2', null, `当前计数: ${counter.value}`),
        h('button', {onClick: () => counter.value++}, '+1'),
        h('button', {onClick: () => counter.value--}, '-1')
      ])
    }
  },
}
</script>

<style scoped>

</style>
