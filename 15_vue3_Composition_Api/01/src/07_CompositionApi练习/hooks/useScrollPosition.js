import {ref} from "vue";

export default () => {
  //滚动位置
  const scrollX = ref(0)
  const scrollY = ref(0)
  //监听浏览器的位置
  document.addEventListener('scroll', () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  })

  return{
    scrollX, scrollY
  }
}
