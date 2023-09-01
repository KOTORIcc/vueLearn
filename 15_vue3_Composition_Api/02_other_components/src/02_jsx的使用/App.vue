<script lang="jsx">
import {h, ref} from 'vue'
import Home from './Home.vue'
export default {
  name: "App",
  data(){
    return{
      counter: 0
    }
  },
  render() {
    const increment = () => this.counter++;
    const decrement = () => this.counter--;
    return (
      <div>
        <h2>当前计数:{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <Home>
          {{aaa: () => <button>一个按钮</button>}}
        </Home>
      </div>
    )
  }
}
</script>

<style scoped>

</style>
