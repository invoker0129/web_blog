<!--
 * @Author: Meng Jiawei
 * @Date: 2020-04-07 19:32:22
 * @LastEditTime: 2020-06-13 00:12:26
 * @FilePath: \blog\src\views\Home.vue
--> 
<template>
  <div class="home"  v-loading.fullscreen.lock="fullscreenLoading">
    <div class="main">
      <blog
        v-for="(item,index) in listblog"
        :key="index"
        :username="item.author"
        :author="item.name"
        :title="item.title"
        :time="item.createtime"
        :logo="item.logo"
      ></blog>
      <div class="pagination">
        <el-pagination
          @pre-click="prepage"
          @next-click="nextpage"
          @current-change="changepages"
          :current-page.sync="current"
          class="pa"
          background
          :page-size="10"
          layout="prev, pager, next"
          :total="allpage"
        ></el-pagination>
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

      <div class="music"></div>
    </div>
  </div>
</template>

<script>
import URL from "@/service.config.js";
import axios from "axios";
import blog from "../components/Blog";
export default {
  beforeRouteLeave(to, from, next) {
    if (
      !sessionStorage.username &&
      (to.path == "/home/write" || to.path == "/home/personal"||to.path=="/home/photo")
    ) {
      next({ path: "/home/login" });
      this.$toast("当前未登录，请先登录执行此操作");
    } else {
      next();
    }
  },
  created() {
    axios({
      url: URL.getpage,
      method: "get",
      params: {
        page: 1
      }
    }).then(response => {
     this.fullscreenLoading=false
      this.listblog = response.data.data;
      this.allpage = parseInt(response.data.message);
    });
  },
  components: {
    blog
  },
  data() {
    return {
      fullscreenLoading:true,
      current: 1,
      listblog: [],
      author: "1",
      time: "1",
      title: "1",
      allpage: 0,
      tags: ["前端", "后端", "人工智能", "java", "Go"],
      all_tags: ["前端", "后端", "人工智能", "java", "Go"]
    };
  },
  methods: {
    prepage(index) {
      this.changepages(index);
    },
    nextpage(index) {
      this.changepages(index);
    },
    close(index) {
      this.tags.length == 1
        ? this.$toast("已选标签不能为空")
        : this.tags.splice(index, 1);
    },
    insert_tag(index) {
      if (!this.tags.includes(this.all_tags[index])) {
        this.tags.push(this.all_tags[index]);
      }
    },
    changepages(index) {
      
      axios({
        url: URL.getpage,
        method: "get",
        params: {
          page: index
        }
      }).then(response => {
       
        console.log(this.fullscreenLoading)
        console.log(response);
        this.listblog = response.data.data;
        this.allpage = parseInt(response.data.message);
      });
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