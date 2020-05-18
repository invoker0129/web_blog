<template>
  <div id="app">
    <div class="nav">
      <Nav class="show" v-if="this.$route.path!='/'"></Nav>
    </div>
    <div class="dark" v-show="$store.state.DarkAndLight"></div>
    <div class="light" v-show="!$store.state.DarkAndLight"></div>
    <div class="changenight">
      <div class="col"></div>
      <div class="circle" :class="{changelight:!$store.state.DarkAndLight}" @click="change"></div>
    </div>
    <router-view :class="{come_into:this.$route.name!='Index'}" />
  </div>
</template>
<script>
import * as moment from "moment/moment";
import axios from 'axios'
import Nav from "./components/nav";
export default {
  created () {
    localStorage.id="孟家炜"
    console.log(moment(new Date()).format("YYYY-MM-DD HH:MM"));
  },
  methods: {
    change() {
      this.$store.commit('updatedark')
    },
  },
  data() {
    return {};
  },
  components: {
    Nav
  },
  beforeDestroy(){
    localStorage.clear
  }
};
</script>
<style lang="less" >
.changenight {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 2rem;
  right: 2.4rem;
  z-index: 1;
}
.col {
  background-color: rgb(61, 37, 0);
  width: 1px;
  height: 80px;
  
}
.changelight{
  animation: back 2s;
  animation-fill-mode: forwards;
}
@keyframes back {
    from{}
    to{box-shadow:0px 0px 20px  white;background-color: rgb(243, 243, 21);}
}
.circle{
  background-color: rgb(43, 41, 41);
  width: 20px;
  height: 25px;
  border-radius:60px 60px 100px 100px ;
  box-shadow:0px 0px 12px  rgb(141, 139, 139);
}
.circle:hover{
  cursor: pointer;
}
.come_into {
  animation: come 1s ease;
}
@keyframes come {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.dark {
  position: fixed;
  background: url(https://s1.ax1x.com/2020/05/13/YadVrF.png) center;
  background-size: 100% 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
.light {
  position: fixed;
  background: url(http://ww1.sinaimg.cn/large/005ZSj0Gly1gevqm2vag1j31hc0u0x5r.jpg) center;
  background-size: 100% 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.show {
  animation: show 1s ease;
}

@keyframes show {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@font-face {
  font-family: "./assets/HongLeiBanShuJianTi-2.ttf";
  src: url("./assets/FZZJ-HaiTZKJW.TTF");
}
* {
  font-family: "./assets/HongLeiBanShuJianTi-2.ttf";
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1200px) {
  body,
  html {
    font-size: 15px;
  }
}
@media screen and (max-width: 992px) {
  body,
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 768px) {
  body,
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 576px) {
  body,
  html {
    font-size: 12px;
  }
}
@media screen and (max-width: 400px) {
  body,
  html {
    font-size: 11px;
  }
}
</style>
