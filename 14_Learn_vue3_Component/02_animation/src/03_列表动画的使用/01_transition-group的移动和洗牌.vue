<template>
  <div>
    <button @click="addNum">addNum</button>
    <button @click="delNum">delNum</button>
    <button @click="shuffleNum">shuffleNum</button>

    <transition-group tag="p" name="aaa">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>

  </div>

</template>

<script>
import lodash from 'lodash'
export default {
  name: "App",
  data(){
    return{
      numbers:[1,2,3,4,5,6,7,8,9],
      numCounter:10,
    }
  },
  methods:{
    addNum(){
      // this.numbers.push(this.numCounter++)
      // 参数: 作用位置 删除数个数 插入数字
      this.numbers.splice(this.randIndex(), 0,this.numCounter++)
    },
    delNum(){
      this.numbers.splice(this.randIndex(), 1)
    },
    randIndex(){
      return Math.floor(Math.random() * this.numbers.length)
    },
    shuffleNum(){
      return this.numbers = lodash.shuffle(this.numbers)
    }
  }
}
</script>

<style scoped>
  .item{
    margin-right: 10px;
    display: inline-block;
  }
  .aaa-enter-from{
    opacity: 0;
    transform: translateY(-30px);
  }
  .aaa-leave-to{
    /*作用于 transition-group 中的每一个元素*/
    opacity: 0;
    /*位移效果*/
    transform: translateY(30px);
  }
  .aaa-enter-active,
  .aaa-leave-active{
    /*所有效果1s内变换完毕*/
    transition: all 0.2s ease;
    /*元素插入的时候不能添加这个position，如果添加了,元素在动画完成之前不会插入列级位置，导致横向元素动画延迟触发*/
    /*position: absolute;*/
  }
  .aaa-leave-active{
    /*在移除元素的时候，在元素动画未结束的时候，其实该元素依然占据了一块line内空间，这会导致列表横向位移动画出现问题，
    执行移除动画时使用绝对定位，就会使得该元素脱离行内定位，更换定位方式，这样剩余在行内的元素就可以正常的执行动画了*/
    position: absolute;
  }

  /*列表插入删除元素的时候 列表会添加横向移动的动画 不需要规定transform的移动距离，vue会帮你处理*/
  .aaa-move{
    transition: transform 0.2s ease;
  }
</style>
