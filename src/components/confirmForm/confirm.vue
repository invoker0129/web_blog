<template>
  <div class="main_confirm">
    <div class="confirm">
      <img
        @click="close"
        width="10px"
        height="10px"
        src="https://s1.ax1x.com/2020/05/09/YQhX1f.png"
        alt
      />
      <div class="title_tag">选择标签</div>
      <div class="check">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="前端"></el-checkbox>
          <el-checkbox label="后端"></el-checkbox>
          <el-checkbox label="人工智能"></el-checkbox>
          <el-checkbox label="Go"></el-checkbox>
          <el-checkbox label="java"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="title_tag">自定义标签</div>
      <div class="put">
        <input
          type="text"
          maxlength="10"
          v-model="other_tag"
          placeholder="限制字数:10"
          class="input_style"
        />
      </div>
      <div class="btn2">
        <button @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment/moment";
import axios from "axios";
import URL from "@/service.config.js";
export default {
  props: ["title", "value"],
  data() {
    return {
      checkList: [],
      other_tag: ""
    };
  },
  methods: {
    close() {
      this.$store.commit("updateisshow", false);
    },
    confirm() {
      let time = moment(new Date()).format("YYYY-MM-DD h:mm:ss");

      /*  this.$router.push("/home"); */
      console.log(this.checkList);
      if (this.other_tag.length != 0) {
        let t = this.checkList.concat(this.other_tag).join("、");
      } else {
        let t = this.checkList.join("、");
      }
      axios({
        url: URL.submitblog,
        method: "post",
        data: {
          author: "孟家炜11",
          tags: "1111122",
          blog: "11122",
          title: "11122",
          createtime: time
        }
      }).then(response => {
        if (response.data.code == 200) this.$router.push("/home");
        this.checkList = [];
        this.$store.commit("updateisshow", false);
      });
    }
  }
};
</script>

<style lang="less" scope >
.main_confirm {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 6;
}

.confirm {
  img {
    position: absolute;
    top: 3px;
    right: 3px;
  }
  img:hover {
    cursor: pointer;
  }
  &:hover::after {
    cursor: pointer;
  }
  .btn2 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  button {
    height: 2rem;
    width: 3rem;
    border: none;
    transition: all 0.6s;
  }
  button:hover {
    cursor: pointer;
    background-color: slategrey;
  }

  .input_style {
    height: 1rem;
    width: 50%;
    border: none;
    font-size: 14px;
    border: 1px skyblue solid;
    border-radius: 4px;
  }
  .check {
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
  background-color: white;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 25%;
  height: 10rem;
  width: 50%;
  border-radius: 3px;
  border: 1px black solid;
  z-index: 999;
  opacity: 1 !important;
  animation: confirm_show 0.2s ease;
}
@keyframes confirm_show {
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>