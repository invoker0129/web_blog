<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-11 20:46:28
 * @LastEditTime: 2020-05-25 22:42:28
 * @FilePath: \blog\src\components\personalcomponents\personalBlog.vue
--> 
<template>
  <div>
    <Blog
      v-for="(item,index) in per_blog_list"
      :key="index"
      :author="item.name"
      :username="item.author"
      :time="item.createtime"
      :title="item.title"
      :logo="item.logo" 
    ></Blog>

    <div class="pagination">
      <el-pagination
        class="pa"
        background
        :page-size="10"
        layout="prev, pager, next"
        :total="allpage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import URL from "@/service.config.js";
import Blog from "../Blog";
export default {
  data() {
    return {
      allpage: 210,
      per_blog_list: []
    };
  },
  components: {
    Blog
  },
  created() {
    axios({
      url: URL.getpersonalblog,
      method: "get",
      params: {
        author: sessionStorage.username
      }
    }).then(response => {
      
      this.per_blog_list = response.data.data;
      this.allpage=parseInt(response.data.message)
    });
  }
};
</script>

<style lang="less" scoped>
.pagination {
  width: 100%;
  margin-top: 20px;
  margin-left: -40px;
  margin-bottom: 30px;
}
</style>