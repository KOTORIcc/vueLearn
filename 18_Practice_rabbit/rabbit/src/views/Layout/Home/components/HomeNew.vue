<template>
  <HomePanel Title="新鲜好物" SubTitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in New" :key="item.id">
        <RouterLink :to="`/detail/${ item.id }`">
          <img v-img-lazy="item.picture" src="" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/Layout/Home/components/HomePanel.vue";
import { getNewAPI } from "@/apis/home";
import { ref } from "vue";

export default {
  name: "HomeNew",
  components:{
    HomePanel
  },
  setup(){
    const New = ref([])
    const getNewList = async () => {
      New.value = (await getNewAPI()).result
    }

    getNewList()

    return{
      New
    }
  }
}
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
