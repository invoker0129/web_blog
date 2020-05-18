<template>
  <div class="Toast" v-if="isshow">
    <p>{{text}}</p><img width="10px" height="10px" @click="close" src="https://s1.ax1x.com/2020/05/09/YQhX1f.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isshow: false
    };
  },
  methods: {
    close() {
      this.isshow=false;
    }
  },

};
</script>

<style lang="less" scoped>
.Toast {
  border:1px #3497fb solid ;
  position: fixed;
  width: 13rem;
  right: 10px;
  color: green;
  top: 40px;
  background-color: white;
  border-radius: 10px;
  animation: show 4s;
  z-index: 6;
  p {
    font-family:'Times New Roman', Times, serif;
    color: black;
    margin-left: 10px;
    margin-top:3px ;
    font-weight:500;
    margin-bottom: 3px;
    font-size: 14px;
  }
  img{
    position: absolute;
    right:3px;
    top:5px
  }
  img:hover{
    cursor: pointer;
  }
}
@keyframes show {
  0% {
    transform: translateX(20px);
  }
  10% {
    transform: translateX(0px);
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>