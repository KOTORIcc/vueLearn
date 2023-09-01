<template>
  <div class="TabControl">
    <div v-for="(item,index) in titles"
         :key="item"
         class="TabControl-item"
         :class="{active:CurrentIndex===index}"
         @click="chosen(item,index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  emits:{
    itemClick:null
  },
  props:{
    titles:{
      type: Array,
      default() {
        return ['a','b','c']
      }
    }
  },
  data(){
    return{
      CurrentIndex:0
    }
  },
  methods:{
    chosen(item,index){
      if(this.CurrentIndex===index){
        return 0
      }else{
        this.CurrentIndex=index;
        this.$emit('itemClick',index)
      }
      // console.log(item);

    }
  }
}
</script>

<style scoped>
  .TabControl{
    display: flex;
  }
  .TabControl-item{
    flex:1;
    text-align: center;
  }
  .TabControl-item.active{
    color:red;
  }
  .TabControl-item.active span{
    border-bottom: 5px solid red;
    padding: 3px 10px;
  }

</style>
