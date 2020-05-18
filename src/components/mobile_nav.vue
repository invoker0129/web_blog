<template>
  <div class="mobile_nav">
    <div class="photo">
      <el-avatar :size="large" >
          <img src="http://ww1.sinaimg.cn/large/005ZSj0Gly1gemfi4el5mj304c04cjr9.jpg" alt="">
      </el-avatar>
    </div>
    <div class="contain">
      <div @click="gopath(item.path)" v-for="(item,index) in tabs" :key="index" class="body" >
        <i class="item.type"></i>{{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      large: 60,
      tabs: [{type:'el-icon-s-home',name:'首页',path:'/home'},{type:'el-icon-edit',name:'写博客',path:'/home/write'},{type:"el-icon-picture",name:'个人相册',path:'/home/write'},{type:'el-icon-s-order',name:'个人空间',path:'/home/write'},{type:'el-icon-user-solid',name:'登录\\注册',path:'/home/write'}]
    };
  },
  methods: {
    gopath(path) {
      this.$store.commit('updatemobilebar',false)
      this.$router.push(path)
    }
  },
};
</script>

<style lang="less" scoped>
.mobile_nav {
  width: 100%;
  height: 100%;
  .photo {
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    top: 30px;
  }
  .photo:hover {
    cursor: pointer;
  }
  .contain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    margin-top: 130px;
    .body {
        width: 100%;
      margin-bottom:40px;
      text-align: center;
      font-size: 20px;
    }
    .body:hover{
      cursor: pointer;
    }

  }
}
</style>