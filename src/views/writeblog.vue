<template>
  <div class="writeBlog">
    <div class="title">
      <el-input v-model="text" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="submit">发布</el-button>
    </div>
    <div class="tags">
      <el-select
        class="se"
        v-model="value1"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签,可自定义"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="main_write">
      <mavon-editor :toolbars="toolbars" class="mavon_editor" v-model="value" @change="print"></mavon-editor>
    </div>
  </div>
</template>

<script>
import * as moment from "moment/moment";
import axios from "axios";
import URL from "@/service.config.js";
/* :toolbarsFlag='false'  :subfield="false" defaultOpen= "preview" */
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.commit("updateisshow", false);
    next();
  },
  data() {
    return {
      options: [
        {
          value: "前端",
          label: "前端"
        },
        {
          value: "后端",
          label: "后端"
        },
        {
          value: "Python",
          label: "Python"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        },
        {
          value: "Java",
          label: "Java"
        }
      ],
      value1: [],
      value: "",
      text: "",
      show: true,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        trash: true, // 清空
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },

  methods: {
    print(value, render) {
      console.log(value);
      console.log(render);
    },
    submit() {
      if (!this.text) {
        this.$toast("文章标题不能为空");
        return;
      } else if (!this.value) {
        this.$toast("文章内容不能为空");
        return;
      } else if (this.value1.length == 0) {
        this.$toast("标签不能为空");
      } else {
        let l=new Date().getTime()
        let tagss = this.value1.join("、");
        axios({
          url: URL.submitblog,
          method: "post",
          data: {
            author: sessionStorage.username,
            tags: tagss,
            blog: this.value,
            title: this.text,
            name: sessionStorage.name,
            logo:l
          }
        }).then(response => {
          if (response.data.code == 200) {
            this.$router.push("/home");
          }
        });
      }
    }
  }
};
</script>

<style lang="less"  scope>
.se {
  width: 20rem;
}
.title_text {
  font-size: 24px;
}
.writeBlog {
  width: 80%;
  margin: 5rem auto;

  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    .title_box {
      box-shadow: -2px -2px 2px #000;
      height: 30px;
      width: 90%;
      font-size: 24px;
      border-top-left-radius: 5px;
      border: none;
    }
    .btn {
      background-color: #98d1ef;
      border-top-right-radius: 5px;
      width: 10%;
      height: 30px;
      border: none;
      font-size: 1.5rem;
    }
    .btn:hover {
      cursor: pointer;
    }
  }
  .main_write {
    margin-top: 3px;
    position: relative;
    z-index: 5;
  }
  .mavon_editor {
    font-family: "Times New Roman", Times, serif;
    min-height: 600px;
  }
}
.tags {
  margin-top: 2px;
}
</style>