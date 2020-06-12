<template>
  <div class="nav_bar">
    <el-drawer custom-class="demo_custom" title="我是标题" size="40%" :visible.sync="$store.state.mobile_bar_show" :with-header="false" :direction="'ltr'">
      <mobile-nav></mobile-nav>
    </el-drawer>
    <div class="mobile">
      <img
        @click="open"
        class="img"
        width="100%"
        height="100%"
        src="https://s1.ax1x.com/2020/05/06/YEvN0H.png"
        alt
      />
    </div>
    <div class="symbol">M-blog~</div>
    <div class="navbar">
      <router-link :to="'/home'">
        <i class="el-icon-s-home"></i>首页
      </router-link>
      <router-link :to="'/home/photo'">
        <i class="el-icon-picture"></i>个人相册
      </router-link>
      <router-link :to="'/home/write'">
        <i class="el-icon-edit"></i>写博客
      </router-link>
      <router-link :to="'/home/personal'">
        <i class="el-icon-s-order"></i>个人主页
      </router-link>
      <router-link :to="'/home/login'">
        <i class="el-icon-user-solid"></i>登录\注册
      </router-link>
    </div>
  </div>
</template>

<script>
import mobileNav from "./mobile_nav";
export default {
  data() {
    return {
      mobile_show: false
    };
  },
  components: {
    mobileNav
  },
  methods: {
    open() {
      this.$store.commit('updatemobilebar',true)
    }
  },
};
</script>

<style lang="less" scope >
.demo_custom{
 background-color:#0F4166;
 border-top-right-radius: 50px;
 border-bottom-right-radius: 50px;
}

.mobile_tab{
  width:100%;
  height:100%;
  
}
.nav_bar {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #333e42;
  width: 100%;
  height: 2rem;
  line-height: 1.8rem;
  .mobile {
    display: none;
    position: relative;
    left: 0;
    width: 2rem;
    height: 2rem;
  }
  .symbol {
    position: absolute;
    left: 20%;
    color: rgb(253, 144, 1);
  }
  .navbar {
    position: absolute;
    right: 5rem;
    .router-link-active {
      text-decoration: none;
    }
    a {
      text-decoration: none;
      margin: 0 1rem;
      font-size: 12px;
      color: white;
      transition: all 0.4s;
    }
    a:hover {
      color: rgb(80, 180, 80);
    }
  }
}
@media screen and (max-width: 762px) {
  .mobile {
    display: block !important;
  }
  .navbar {
    display: none !important;
  }
  .symbol {
    left: 48% !important;
  }
}
</style>