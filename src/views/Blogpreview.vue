<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-17 22:47:50
 * @LastEditTime: 2020-05-25 22:01:47
 * @FilePath: \blog\src\views\Blogpreview.vue
--> 
<template>
  <div class="blogpreview">
    <div class="title">
      <div class="title1">{{title}}</div>
      <div class="author">{{name}}({{author}})</div>
      <div class="time">{{time}}</div>
    </div>
    <div class="blog">
      <mavon-editor
        class="mv"
        :toolbarsFlag="false"
        :subfield="false"
        defaultOpen="preview"
        v-model="value"
      ></mavon-editor>
    </div>
    <Comment/>
  </div>
</template>

<script>
import Comment from '../components/comment'
import axios from "axios";
import URL from "@/service.config.js";
export default {
  beforeRouteLeave(to, from, next) {
    if (
      !localStorage.username &&
      (to.path == "/home/write" || to.path == "/home/personal")
    ) {
      next({ path: "/home/login" });
      this.$toast("当前未登录，请先登录执行此操作");
    } else {
      next();
    }
  },
  components: {
    Comment,
  },
  created() {
    console.log('111')
    this.logo = this.$route.query.logo;
    this.author = this.$route.query.username;
    axios({
      url: URL.getblog,
      method: "get",
      params: {
        author: this.author,
        logo: this.logo
      }
    }).then(response => {
      console.log(response)
      this.value=response.data.data.blog;
      this.time=response.data.data.createtime
      this.name=response.data.data.name
      this.title=response.data.data.title
      });
  },
  data() {
    return {
      logo: "",
      value: "",
      title: "",
      time: "",
      author: "",
      name: ""
    };
  }
};
</script>

<style lang="less" scoped>
.blogpreview {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 4rem auto;
  .title {
    font-size: 1.5rem;
    width: 100%;
    background-color: white;
    border-bottom: 1px rgba(66, 64, 64, 0.5) solid;
    .time {
      font-weight: 800;
      font-size: 10px;
      text-align: center;
    }
  }
  .author {
    text-align: center;
    font-size: 12px;
    font-weight: 800;
  }
  .blog {
    width: 100%;
    position: relative;
  }
  .mv {
    position: relative;
    min-width: 100px;
    z-index: 3;
  }
  .title1 {
    text-align: center;
    color: black;
  }
}
</style>