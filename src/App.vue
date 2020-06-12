<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-02 18:40:17
 * @LastEditTime: 2020-06-12 23:15:31
 * @FilePath: \blog\src\App.vue
--> 
<template>
  <div id="app">
    <div class="nav">
      <Nav class="show" v-if="this.$route.path!='/'"></Nav>
    </div>
    <div class="dark" v-show="$store.state.DarkAndLight">
      <div class="box2">
         <div class="star" ref="stars" v-for="(item,index) in starcount" :key="index"></div>
      </div>
     
    </div>
    <div class="light" v-show="!$store.state.DarkAndLight"><div class="text"></div></div>
    <div class="changenight" v-show="this.$route.path!='/'">
      <div class="col"></div>
      <div class="circle " :class="{changelight:!$store.state.DarkAndLight||$store.state.DarkAndLight}" @click="change"></div>
    </div>
    <router-view :class="{come_into:this.$route.name!='Index'}" />
  </div>
</template>
<script>
import * as moment from "moment/moment";
import axios from 'axios'
import Nav from "./components/nav";
export default {
  mounted () {
    let a=document.getElementsByClassName('circle')[0]
    a.addEventListener('animationend',()=>{
    
      console.log(a.classList.length)
     a.classList.remove('changelight')
     console.log(a.classList)
    
    })
    let _this=this;
    let starArr=_this.$refs.stars
    starArr.forEach(item=>{
      let speed=0.7+(Math.random()*1);
      let thisDistance=_this.distance+(Math.random()*300)
      item.style.transformOrigin=`0 0 ${thisDistance}px`
      item.style.transform=`translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random()*360)}deg) rotateX(${Math.random()*-50}deg) scale(${speed},${speed})`
    })
  },

  methods: {
    change() {
      let a=document.getElementsByClassName('circle')[0]
      a.classList.add('changelight')
      this.$store.commit('updatedark')
      
    },
  },
  data() {
    return {
      starcount:800,
      distance:800,
      index:-1
    };
  },
  components: {
    Nav
  },
  destroyed(){

  },
};
</script>
<style lang="less" > 
.star{
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top:0;
  left: 0;
  backface-visibility: hidden;
}
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
  background-color: rgb(26, 25, 25);
  width: 2px;
  height: 80px;
  
}
.text{
  margin: 350px auto;
  color: white;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
}
.changelight{
  animation: back .8s ease-in-out;
  
}
@keyframes back {
    0%{transform: translateY(0px);}
   50%{transform: translateY(-15px);}
    100%{transform: translateY(0);}
}
.circle{
  background-color: rgb(194, 117, 69);
  width: 20px;
  height: 25px;
  border-radius:60px 60px 100px 100px ;
 
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
  height:100%;
  width: 100%;
  z-index: -3;
  background:radial-gradient(150% 70% at bottom center,#f7f7b6,#e96f92,#1b2947);
  top:0;
 
  /* position: fixed;
  background: url(https://s1.ax1x.com/2020/05/13/YadVrF.png) center;
  background-size: 100% 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3; */
}
.box2{
  transform:perspective(500px);
  position:absolute;
  transform-style: preserve-3d;
  perspective-origin: 50% 100%;
  animation: starr 90s infinite linear;
  left: 50%;
  bottom:0;
}
.light {
  position: fixed;
 /*  background: url(http://ww1.sinaimg.cn/large/005ZSj0Gly1gevqm2vag1j31hc0u0x5r.jpg) center;*/
  background-size: 400% ;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background-image: linear-gradient(125deg,#2c3e50,#27ae60,#2980b6 ,#e74c3c,#8e44ad);
  z-index: -1;
  animation: bg 15s infinite;
}
@keyframes bg {
  0%{
    background-position: 0% 50%;
  }
   5%{
    background-position: 100% 50%;
  }
   100%{
    background-position: 0% 50%;
  }
}
.show {
  animation: show 1s ease;
}
@keyframes starr{
  0%{
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100%{
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
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
