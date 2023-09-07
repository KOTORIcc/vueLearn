<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${ CategoryFilterData.parentId }` }">{{ CategoryFilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>居家生活用品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" >
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="loadMoreItem">
        <!-- 商品列表-->
        <GoodsItem v-for="good in GoodsList.items" :good="good" :key="good"></GoodsItem>
      </div>
    </div>
  </div>

</template>

<script>
import GoodsItem from "@/views/Layout/Home/components/GoodsItem.vue";
import {useCategoryFilter} from "@/views/Layout/SubCategory/composable/useCategoryFilter";
import {useSubCategory} from "@/views/Layout/SubCategory/composable/useSubCategory";
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  name: "index",
  components: {GoodsItem},
  setup(){
    const route = useRoute()
    const CategoryFilterData = useCategoryFilter(route)
    const reqData = ref({
      categoryId: route.params.id,
      page: 1,
      pageSize: 20,
      sortField: 'publishTime'
    })
    const GoodsList = useSubCategory(reqData.value)

    const loadMoreItem = () => {
      if (reqData.value.page <= GoodsList.value.pages){
        reqData.value.page++
      }

    }

    return{
      reqData,
      CategoryFilterData,
      GoodsList,
      loadMoreItem
    }
  }
}
</script>

<style scoped lang="scss">
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
