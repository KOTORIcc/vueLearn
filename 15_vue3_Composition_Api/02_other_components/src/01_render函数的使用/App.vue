<script>
import { h } from 'vue'
import Home from './Home.vue'
export default {
  name: "App",
  render() {
    const name = 'app中的name'
    return(
      h('div', null, [
      h(Home, null, {
        aaa: () => h('span', null, `app传入Home中的内容:${name}`),
        bbb(){ return  h('h3',null, `Home的bbb插槽`)}
        })
      ])
    )

  }
}
</script>

<style scoped>

</style>
