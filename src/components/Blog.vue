<template>
  <div class="blog">
    <div class="blogtag">
      <div class="blog_title">1、两数之和</div>
    </div>
    <div class="author">
      作者:{{author}}
    </div>

    <div class="foot">
      <div class="time">发布时间:{{time|time_format}}</div>
      <div class="icons">
       <!--  <div class="icon">
          <div class="i">
             &#xe647;
          </div>
         评论
        </div> -->
        <div class="icon" @click="collect">
          <div class="i" :class="{red:iscollect}">      
            &#xe687;
          </div>
          <div>收藏</div>
        </div>
        <div class="icon" @click="like">
          <div v-bind:class="{i:true,red:islike}">
            &#xe620;
          </div>
          <div class="tttt">点赞</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
import * as moment from "moment/moment";
import '../assets/iconfont/icon.css'
export default {
  data() {
    return {
      time: new Date(),
      islike:false,
      iscollect:false,
      author:'孟家炜'
    };
  },
  filters: {
    time_format: function(value) {
      return moment(value).format("YYYY-MM-DD HH:MM");
    }
  },
  methods: {
      like() {
          this.islike=!this.islike
      },
      collect(){
          this.iscollect=!this.iscollect
      }
  },
};
</script>

<style lang="less" scoped>
.author{
  margin-top:10px ;
  font-size: 11px;
}
.blog {
  margin-bottom: 10px;
  border-radius: 5px;
  background-color:whitesmoke;
  .blog_title {
    font-size: 20px;
  }
  .blog_title:hover{
    cursor: pointer;
  }
  .passage {
      color:#B5B3B3;
    margin-top: 5px;
  }
  .passage:hover{
    cursor: pointer;
  }
  .foot {
    height: 20px;
    padding-bottom:6px ;
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
        transition: all .5s;
      }
      .icon:hover{   
          cursor: pointer;
      }
      .red{
          animation: red .6s;
          animation-fill-mode: forwards;
      }
      @keyframes red {
          0%{}
          50%{color:red;font-size: 15px;}
          100%{color:red;font-size: 14px;}
      }
    }
  }
}
.blog:hover{
  cursor: pointer;
}
@media screen and (max-width:400px)  {
    .icon{
        font-size: 10px !important;
    }
}
</style>