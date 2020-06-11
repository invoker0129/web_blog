<template>
<div>
  <div class="main">
    <div class="text">M-Blog</div>
    <div class="go " @click="go">Go!</div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      IsShow: true
    };
  },
  methods: {
    go() {
      this.$router.push('/home')
    }
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'webfont2';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_ra6cmfr8igk.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_ra6cmfr8igk.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_ra6cmfr8igk.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_ra6cmfr8igk.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_ra6cmfr8igk.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_ra6cmfr8igk.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
}
@font-face {
  font-family: "webfont";
  src: url("//at.alicdn.com/t/webfont_gl1uq816hqe.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/webfont_gl1uq816hqe.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_gl1uq816hqe.woff2")
      format("woff2"),
    url("//at.alicdn.com/t/webfont_gl1uq816hqe.woff") format("woff"),
    /* chrome、firefox */ url("//at.alicdn.com/t/webfont_gl1uq816hqe.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/webfont_gl1uq816hqe.svg#杨任东竹石体-Bold")
      format("svg"); /* iOS 4.1- */
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://s1.ax1x.com/2020/05/06/YElRgK.png) center;
  z-index: -1;
  .text {
    height: 4.5rem;
    line-height: 4.5rem;
    width: 10rem;
    text-align: center;
    color: white;
    font-family: "webfont";
    font-size: 3.5rem;
    border: 2px white solid;
  }
  .go {
    color: white;
    margin-top: 2rem;
    font-size: 12px;
    line-height: 2.5rem;
    text-align: center;
    font-family: "webfont2";
    font-size: 14px;
    width: 6rem;
    height: 2.5rem;
    border: 1px rgb(102, 102, 102) solid;
    transition: all 0.8s;
    border-radius: 30px;
  }
  .go:hover {
    cursor: pointer;
    background-color: rgb(129, 224, 176)
  }
}
</style>