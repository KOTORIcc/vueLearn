import {ref} from "vue";

export default () => {
  //滚动位置
  const mouseX = ref(0)
  const mouseY = ref(0)
  //监听浏览器的位置
  document.addEventListener('mousemove', () => {
    mouseX.value = event.pageX;
    mouseY.value = event.pageY;
  })

  return{
    mouseX, mouseY
  }
}
