<!--
 * @Author: Meng Jiawei
 * @Date: 2020-06-12 02:51:03
 * @LastEditTime: 2020-06-12 23:33:41
 * @FilePath: \blog\src\views\personalpicture.vue
--> 
<template>
  <div class="photo">
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:8080/file/post"
      :data="d"
      :on-success="sucess"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div class="box">
      <div class="img" v-for="(item,index) in imgurl" :key="index">
        <el-image
          class="i"
          :preview-src-list="imgurl"
          style="width:200px;height:200px;"
          :fit="contain"
          :src="item"
          lazy
        ></el-image>
        <el-button class="btn" type="primary" @click="de(index)">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import URL from '@/service.config.js'
export default {
  created() {
    axios({
      url: "http://127.0.0.1:8080/file/getall",
      method: "get",
      params: {
        username: sessionStorage.username
      }
    }).then(response => {
      this.imgurl = response.data.data;
      console.log(response);
    });
  },
  data() {
    return {
      contain: "fill",
      imgurl: [],
      d: { username: sessionStorage.username }
    };
  },
  methods: {
    sucess(res, file, filelist) {
      console.log(filelist);
      console.log(res);
    },
    de(index){
    
        axios({
            url:URL.deletepic,
            method:'get',
            params:{
                url:this.imgurl[index]
            }
        }).then(response=>{
            console.log(response)
             if(response.data.code==200){
                this.$toast("删除成功")
                this.imgurl.splice(index,1)
            }else{
                this.$toast("删除失败")
            } 
        }).catch(err=>{
            console.log(err)
        });
    }
  }
};
</script>

<style lang="less" scoped>
.photo {
  width: 80%;
  margin: 4rem auto;
}
.box {

  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.img{
    position: relative;
    margin-left: 10px;
    transition: all .6s;
}
.img:hover{
    .btn{
        z-index:2;
    }
}
.btn{
   position: absolute;
  top:50%;
  left:50%;
    z-index: -1;
    transform: translate(-50%,-50%);
}
</style>