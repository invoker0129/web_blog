<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-11 15:52:47
 * @LastEditTime: 2020-06-12 23:50:39
 * @FilePath: \blog\src\views\personal.vue
--> 
<template>
  <div class="personal" :class="{font_dark_color:$store.state.DarkAndLight,font_light_color:!$store.state.DarkAndLight}">
    <div class="left">
      <div class="photo">
        <el-avatar :size="large">
          <img src="http://ww1.sinaimg.cn/large/005ZSj0Gly1gemfi4el5mj304c04cjr9.jpg" alt />
        </el-avatar>     
      </div>
      <div class="name">{{change}}</div>
      <div class="personal_bar">
        <div class="nav_name" @click = "$router.push(item.path)"  v-for = "(item,index) in nav_name" :key="index">{{item.name}}</div>
      </div>
    </div>
    <div class="right">
      <router-view class="come_into" v-model="change" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    change:localStorage.name,
      large: 60,
      nav_name: [{name:"个人信息",path:'/home/personal'}, {name:"博客管理",path:'/home/personal/Blog'}, {name:"消息通知",path:'/home/personal/Talk'}, {name:"账号管理",path:'/home/personal/Count'}, {name:"我的收藏",path:'/home/personal/Blog'}]
    };
  },
  watch: {
      change(newValue, oldValue) {
          this.change=newValue
      }
  },
};

</script>

<style lang="less" scoped>
.font_light_color{
  color:rgb(31, 29, 29)
}
.font_dark_color{
    color:rgb(64, 140, 255);
}
.come_into{
    animation: show .3s;
}
@keyframes show {
    from{transform: translateY(-50px);opacity: 0;}
    to{transform: translateY(0);opacity: 1;}
}
.personal {
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 300px;
    .personal_bar {
      margin-top: 10px;
      width: 100%;
      .nav_name {
        width: 100%;
        margin-top: 15px;
        text-align: center;
      }
      .nav_name:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
  .right {
    height: 300px;
    width: 50%;
  
  }
}
</style>