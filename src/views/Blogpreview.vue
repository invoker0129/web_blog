<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-17 22:47:50
 * @LastEditTime: 2020-06-12 20:22:59
 * @FilePath: \blog\src\views\Blogpreview.vue
--> 
<template>
  <div class="blogpreview" >
    <div class="title" v-show="!is">
      <div class="title1">{{title}}</div>
      <div class="author">{{name}}({{author}})</div>
      <div class="time">{{time}}</div>
    </div>
    <div class="titlesss" v-show="is">
      <el-input v-model="title" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="changeblog">修改</el-button>
    </div>
    <div class="blog">
      <mavon-editor
        class="mv"
        :toolbarsFlag="false"
        :subfield="is"
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
  mounted() {
    this.logo = this.$route.query.logo;
    this.author = this.$route.query.username;
    console.log(this.$route.query.is)
   if(this.$route.query.is=='true'||this.$route.query.is==true){
    
     this.is=true
   }else{
 
     this.is=false
   }
  
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
      text:'',
      is:false,
      logo: "",
      value: "",
      title: "",
      time: "",
      author: "",
      name: ""
    };
  },
  methods: {
    changeblog() {
      console.log(this.logo)
      axios({
        url:URL.updateblog,
        method:'post',
        data:{
          logo:this.logo,
          title:this.title,
          blog:this.value
        }
      }).then(response=>{
        if(response.data.code==200){
          this.$router.push("/home")
          this.$toast("修改成功")
        }else{
          this.$toast("修改失败")
        }
      })
    }
  },
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
.titlesss {
    width: 100%;
    display: flex;
    flex-direction: row;
    .title_box {
      box-shadow: -2px -2px 2px #000;
      height: 30px;
      width: 90%;
      font-size: 24px;
      border-top-left-radius: 5px;
      border: none;
    }
    .btn {
      background-color: #98d1ef;
      border-top-right-radius: 5px;
      width: 10%;
      height: 30px;
      border: none;
      font-size: 1.5rem;
    }
    .btn:hover {
      cursor: pointer;
    }
  }
</style>