<script lang="jsx">
export default {
  name: "Home",
  render(){
    return(
      <div>
        <h2>Home Page</h2>
        {this.$slots.aaa ? this.$slots.aaa() : <h2>default</h2>}
      </div>

    )
  }
}
</script>

<style scoped>

</style>
