<template>
  <div class="goods-image">
<!--    {{x}}{{elementX}}-->
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imgList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `${x}px`, top: `${y}px` }" v-if="!isOutside"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imgList" :key="i" @mouseenter="mouseHandler(i)" :class="{ active: activeIndex === i}">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imgList[activeIndex]})`,
        backgroundPositionX: `${ - 2 * x }px`,
        backgroundPositionY: `${ - 2 * y }px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
import { useMouseInElement } from "@vueuse/core";
export default {
  name: "imgView",
  props: {
    imageList:{
      type: Array,
      default:() => [],
    }
  },

  setup(props){
    const imgList = props.imageList
    //小图切换大图显示
    const activeIndex = ref(0)
    const mouseHandler = (i) => {
      activeIndex.value = i
    }

    const x = computed(() => {
      if (!isOutside) return
      if (elementX.value < 100){
        return 0
      }else if(elementX.value > 300){
        return 200
      }else {
        return elementX.value-100
      }
    })
    const y = computed(() => {
      if (!isOutside) return
      if (elementY.value < 100){
        return 0
      }else if(elementY.value > 300){
        return 200
      }else {
        return elementY.value-100
      }
    })

    //大图放大镜
    const target = ref(null)//setup中使用ref的方法
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    return{
      imgList,
      mouseHandler,
      activeIndex,
      target,
      elementX, elementY, isOutside,
      x, y
    }
  }

}
</script>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
  // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
  // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
