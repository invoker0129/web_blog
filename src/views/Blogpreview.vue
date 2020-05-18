<template>
  <div class="blogpreview">
    <div class="title"><div>{{title}}</div><div class="time" >{{time}}</div></div>
    <div class="blog">
      <mavon-editor class="mv" :toolbarsFlag="false" :subfield="false" defaultOpen="preview" v-model="value"></mavon-editor>
    </div>
  </div>
</template>

<script>
export default {
  created() {
   /*  this.value = this.$route.params.value?'':this.$route.params.value;
    console.log(this.value); */
  },
  data() {
    return {
      value: "111111111",
      title:'第一次发博客的哈哈阿发发发发发',
      time:'2019-2-2 19:00:44'
    };
  }
};
</script>

<style lang="less" scoped>
.blogpreview {
    border: 1px blue solid;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  width: 60%;
  margin: 4rem auto;
  .title{
      font-size: 1.5rem;
      width:100%;
      height: 55px;
      background-color: white;
      border-bottom: 1px rgba(66, 64, 64,0.5) solid;
      .time{
         font-size:12px;
         position:absolute;
         bottom: 0;
      }
  }
  .blog{
      width:100%;
      position: relative;
      
  }
  .mv{
      position: relative;
      min-width: 100px;
      z-index: 3;
  }
}

</style>