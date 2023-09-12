<template>
  <div class="goods-hot">
    <h3>{{ type }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotGoodsData" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script>
import {useHotGoodsData} from "@/views/Layout/Detail/composable/useHotGoodsData";
import {ref} from "vue";
import {useRoute} from "vue-router";
export default {
  name: "detailHot",
  props:{
    type: String,
    default(){
      return '24小时热销榜'
    },
    require
  },
  setup(props){
    const Type =  props.type === '24小时热销榜'? 1 : 2

    const route = useRoute()
    const reqData = ref({ id:route.params.id, type:Type, limit:3})
    const HotGoodsData = useHotGoodsData(reqData.value)
    console.log(HotGoodsData);
    return{
      HotGoodsData
    }
  }
}
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
