<template>
  <div class="login">
    <div class="photo">
      <el-avatar :size="large">
        <img src="http://ww1.sinaimg.cn/large/005ZSj0Gly1gemfi4el5mj304c04cjr9.jpg" alt />
      </el-avatar>
    </div>
    <div style="color:skyblue">
      <span
        :class="{font_light_color:!$store.state.DarkAndLight}"
        style="width:80px;display:inline-block;text-align: center;"
      >用户名:</span>
      <input v-model="username" style="color:black" class="username input" type="text" name id />
    </div>
     <div style="margin-top:10px;color:skyblue">
      <span
        :class="{font_light_color:!$store.state.DarkAndLight}"
        style="width:80px;display:inline-block;text-align: center;"
      >昵称:</span>
      <input v-model="name" type="text" class="input" />
    </div>
    <div style="margin-top:10px;color:skyblue">
      <span
        :class="{font_light_color:!$store.state.DarkAndLight}"
        style="width:80px;display:inline-block;text-align: center;"
      >密码:</span>
      <input v-model="password" type="text" class="input" />
    </div>
    <div style="margin-top:10px;color:skyblue">
      <span
        :class="{font_light_color:!$store.state.DarkAndLight}"
        style="width:80px;display:inline-block;text-align: center;"
      >重复密码:</span>
      <input v-model="re_password" type="text" class="input" />
    </div>
    
    <div>
      <button class="button" @click="register">注册</button>
    </div>
    <div class="img_head">
      <img
        width="170rem"
        height="130rem"
        src="http://ww1.sinaimg.cn/large/005ZSj0Gly1geqt1f62t4j305i03n744.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import URL from '@/service.config.js'
import "../assets/css/LoginAndRegister.less";
export default {
  data() {
    return {
      large: 80,
      username: "",
      password: "",
      re_password: "",
      name:''
    };
  },
  methods: {
    register() {
      if (this.username.length == 0) {
        this.$toast("请输入用户名");
        return;
      } else if (this.password.length == 0) {
        this.$toast('请输入密码')
        return;
      } else if (this.password != this.re_password) {
        this.$toast("两次密码输入不一致");
        return;
      }else{
          axios({
            url:URL.register,
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
  }
};
</script>
