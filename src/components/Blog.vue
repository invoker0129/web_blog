<template>
  <div class="blog" @click.stop="goto">
    <div class="blogtag">
      <div class="blog_title">{{title}}</div>
    </div>
    <div class="author">作者:{{author}}({{username}})</div>
    <div class="foot">
      <div class="time">发布时间:{{time}}</div>
      <div class="icons">
        <div class="icon" @click.stop="collect">
          <div class="i" :class="{red:iscollect}">&#xe687;</div>
          <div>收藏</div>
        </div>
        <div class="icon" @click.stop="like">
          <div v-bind:class="{i:true,red:islike}">&#xe620;</div>
          <div class="tttt">点赞</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
import axios from "axios";
import URL from "@/service.config.js";
import * as moment from "moment";
import "../assets/iconfont/icon.css";
export default {
  props: ["title", "author", "time", "username", "logo"],
  data() {
    return {
      islike: false,
      iscollect: false
    };
  },
  filters: {
    time_format: function(value) {
      return moment(value).format("YYYY-MM-DD HH:MM:SS");
    }
  },
  methods: {
    like() {
      this.islike = !this.islike;
    },
    collect() {
      this.iscollect = !this.iscollect;
    },
    goto() {
      console.log(this.$route.path)
      if(sessionStorage.username){
         this.$router.push({
        path: "/home/blogpreview",
        query: {
          username: this.username,
          logo: this.logo,
          is:this.$route.path=='/home'?false:true
        }
      });
      }else{
        this.$toast('当前未登录，请先登录执行此操作')
      }
     
      /* axios({
        url: URL.getblog,
        method: "get",
        params: {
          author: this.username,
          createtime: this.time
        }
      }).then(response => {
        console.log(response);
        this.$router.push({
          name: "Blogpreview",
          params: {
            title: this.title,
            value: response.data.data,
            time: this.time,
            author:this.author,
            name:this.username
          }
        });
      }); */
    }
  }
};
</script>

<style lang="less" scoped>
.author {
  margin-top: 10px;
  font-size: 11px;
}
.blog {
  margin-bottom: 10px;
  border-radius: 0px;
  background-color: rgb(253, 229, 244);
  .blog_title {
    font-size: 20px;
  }
  .blog_title:hover {
    cursor: pointer;
  }
  .passage {
    color: #b5b3b3;
    margin-top: 5px;
  }
  .passage:hover {
    cursor: pointer;
  }
  .foot {
    height: 20px;
    padding-bottom: 6px;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    .time {
      flex: 6;
      font-size: 10px;
    }
    .icons {
      font-size: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      flex: 4;
      position: relative;
      margin-right: 0;
      .icon {
        display: flex;
        flex-direction: row;
        flex: 1;
        transition: all 0.5s;
      }
      .icon:hover {
        cursor: pointer;
      }
      .red {
        animation: red 0.6s;
        animation-fill-mode: forwards;
      }
      @keyframes red {
        0% {
        }
        50% {
          color: red;
          font-size: 15px;
        }
        100% {
          color: red;
          font-size: 14px;
        }
      }
    }
  }
}
.blog:hover {
  cursor: pointer;
}
@media screen and (max-width: 400px) {
  .icon {
    font-size: 10px !important;
  }
}
</style>