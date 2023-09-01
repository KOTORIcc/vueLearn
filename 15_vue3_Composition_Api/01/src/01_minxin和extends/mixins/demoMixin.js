export default {
  data(){
    return{
      message:'Hello demoMixin',
      title:'demoMixIn here'
    }
  },
  methods:{
    foo(){
      console.log('demo foo mixin');
    }
  },
  created(){
    console.log('执行了demo mixin的 created生命周期');
  }
}

