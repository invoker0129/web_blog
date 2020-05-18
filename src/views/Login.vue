<template>
  <div class="login" >
    <div class="photo">
      <el-avatar :size="large">
        <img   src="http://ww1.sinaimg.cn/large/005ZSj0Gly1gemfi4el5mj304c04cjr9.jpg" alt />
      </el-avatar>
    </div>
    <div style="color:skyblue">
      <span :class="{font_light_color:!$store.state.DarkAndLight}"  style="width:50px;display:inline-block;text-align: center;">用户名:</span>
      <input v-model="username" style="color:black" class="username input" type="text" name id />
    </div>
    <div style="margin-top:10px;color:skyblue">
      <span :class="{font_light_color:!$store.state.DarkAndLight}" style="width:50px;display:inline-block;text-align: center;">密码:</span>
      <input v-model="password" type="password" class="input" />
    </div>
    <div>
      <button class="button" @click="login">登录</button>
    </div>
    <div class="img">
      <img
      class="img_head"
        width="170rem"
        height="130rem"
        src="http://ww1.sinaimg.cn/large/005ZSj0Gly1geqs6queb3j308004vjra.jpg"
        alt
      />
    </div>
    <div class="new">
      <router-link :class="{font_light_color:!$store.state.DarkAndLight}" :to="'/home/register'">萌新,快到碗里来！</router-link>
    </div>
  </div>
</template>

<script>
import URL from '@/service.config.js'
import axios from 'axios'
import "../assets/css/LoginAndRegister.less";
export default {
  data() {
    return {
      username: "",
      password: "",
      large: 80
    };
  },
  methods: {
    login() {
      if(this.username.length==0||this.password.length==0){
        this.$toast('请输入用户名或密码')
      }else{
        axios({
          url:URL.login,
          method:'post',
          data:{
            username:this.username,
            password:this.password
          }
        }).then(response=>{
          if(response.data.code==200){
            this.$toast(response.data.message)
            this.$router.push('/home')
          }else{
            this.$toast(response.data.message)
          }
        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
</style>