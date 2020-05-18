<template>
  <div class="home">
    <div class="main">
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <blog></blog>
      <div class="pagination">
        <el-pagination class="pa" background :page-size="10"  layout="prev, pager, next" :total="allpage"></el-pagination>
      </div>
    </div>
    <div class="main2">
      <div class="tag_contain">
        <div style="color:#3497fb;">已选标签</div>
        <div class="tag">
          <el-tag
            class="el_tag"
            size="medium"
            v-for="(tag,index) in tags"
            :key="index"
            @close="close(index)"
            closable
            :disable-transitions="false"
          >{{tag}}</el-tag>
        </div>
        <div style="color:#3497fb; border-top: 1px #3497fb solid;">全部标签</div>
        <div class="all_tags">
          <el-tag
            class="el_tag"
            size="medium"
            v-for="(tag,index) in all_tags"
            :key="index"
            @click="insert_tag(index)"
            :disable-transitions="false"
          >{{tag}}</el-tag>
        </div>
      </div>

      <div class="music">
        <!--  <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="100%"
          height="340px"
          src="//music.163.com/outchain/player?type=0&id=5008882761&auto=0&height=430"
        ></iframe>-->
      </div>
    </div>
  </div>
</template>

<script>
import blog from "../components/Blog";
export default {
  components: {
    blog
  },
  data() {
    return {
      allpage: 210,
      tags: ["JavaScript", "Java", "C++", "Go"],
      all_tags: ["JavaScript", "Java", "C++", "python"]
    };
  },
  methods: {
    close(index) {
      this.tags.length == 1
        ? this.$toast({ title: "提示", text: "已选标签不能为空" })
        : this.tags.splice(index, 1);
    },
    insert_tag(index) {
      if (!this.tags.includes(this.all_tags[index])) {
        this.tags.push(this.all_tags[index]);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2.8rem;
  justify-content: center;
  .main {
    width: 55%;
    height: 40rem;
   
    .pagination {
      width: 100%;
     
      margin-top: 20px;
      margin-bottom: 30px;
      
    }
  }
  .main2 {
    width: 25%;
    height: 40rem;
    margin-left: 1rem;
    .tag_contain {
      border: 1px #3497fb solid;
      border-radius: 5px;
    }
    .tag,
    .all_tags {
      border-top: 1px #3497fb solid;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .el_tag {
        margin: 0.5rem 0.3rem;
      }
      .el_tag:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and(max-width: 720px) {
    .main2 {
      display: none !important;
    }
    .main {
      width: 75% !important;
    }
  }
}
</style>