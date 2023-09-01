<template>
  <div>
    <input type="text" v-model="keyWord" @input="updateCounter">
    <br>

    <!--用css方式很难实现交替动画，放弃css动画
        使用gsap的js动画来实现-->
    <transition-group tag="ul" name="list" class="item" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <!--  在li元素中绑定一个data-index属性，这样就能在动画周期函数的element对象中通过element.dataset.index获取到该属性绑定的数值
            通过元素对象传递数据-->
      <li v-for="item in showNames" :key="item" :data-item="item">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: "02_列表的交替动画",
  data(){
    return{
      keyWord:'',
      names:['asfa','sgf','fadsvg','adfa','adfads','efsv','sdafge','😀'],
      changeCounter:0,
      delEl:[]
    }
  },
  computed:{
    showNames(){
      //通过filter函数筛选出符合条件的元素，返回一个新的数组
      //条件是 根据内容判断 如果包含keyWord中的元素，就通过判断
      return this.names.filter(item => item.indexOf(this.keyWord) !== -1)
    }
  },
  methods:{
    //传递进来的element就是要执行动画的元素
    beforeEnter(element){
      // 在元素出现前设置一个初始状态
      element.style.opacity = 0;
      element.style.height = 0;
    },
    enter(element, done){
      // this.delEl.splice(this.delEl.indexOf(element.dataset.item),1)
      this.changeCounter++
      gsap.to(element, {
        opacity: 1,
        height: '1.5em',
        //但是 元素批量进入消失的时候 是同时进行的 很不美观 需要让这些元素有个顺序依次更改
        // delay: this.delEl.length * 0.2,
        delay: this.changeCounter * 0.2,
        onComplete: done
      })
    },
    leave(element, done){
      // this.delEl.push(element.dataset.item)
      this.changeCounter++
      gsap.to(element, {
        opacity: 0,
        height: '0em',
        // delay: this.delEl.length * 0.2,
        delay: this.changeCounter * 0.2,
        onComplete: done
      })
    },
    updateCounter(){
      this.changeCounter = 0
    }
  }
}
</script>

<style scoped>
.item{
  display: inline-block;
}
  .list-enter-from,
  .list-leave-to{
    opacity: 0;
  }
  .list-enter-active,
  .list-leave-active{
    transition: opacity 1s ease;
  }
</style>
