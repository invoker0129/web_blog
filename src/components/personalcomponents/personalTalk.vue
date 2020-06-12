<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-13 13:06:01
 * @LastEditTime: 2020-06-12 23:35:14
 * @FilePath: \blog\src\components\personalcomponents\personalTalk.vue
--> 
<template>
  <div class="main_block">
    <div class="friends"></div>
    <div class="message">
      <div class="message_block"></div>
      <div class="input_block">
        <textarea class="text2" style="resize:none;"></textarea>
        <Button class="button">发送</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main_block {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .friends {
    background-color: #eeeeee;
    width: 20%;
    height: 30rem;
    overflow: auto;
  }
  .message {
    width: 80%;
    height: 30rem;
    .message_block {
      background-color: #eeeeee;
      overflow: auto;
      width: 100%;
      height: 80%;
    }
    .input_block {
      position: relative;
      width: 100%;
      height: 20%;
      .text2 {
        border: none;
        background-color: #eeeeee;
        height: 100%;
        width: 100%;
        overflow: auto;
      }
      .button {
          border-top-left-radius: 4px;
          border:none;
          background: skyblue;
          height: 2rem;
          width:4rem;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: all .5s;
      }
      .button:hover{
          cursor: pointer;
          background-color: rgb(17, 132, 226);
      }
    }
  }
}
</style>