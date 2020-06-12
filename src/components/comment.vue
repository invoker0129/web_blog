<template>
  <div class="comment">
    <span style="color:red">评论留言:</span>
    <div style="background-color: #eee;" v-for="(item,index) in comments" :key="index">
      <div class="main_comment">
        {{item.name}}{{item.content}}
        <span class="time">{{item.time}}</span>
        <button class="btn" style @click="showres(index)">回复</button>
      </div>
      <div class="re" v-show="index4==index&&index3==-1">
        <span style="font-size:12px;margin-right:10px">回复</span>
        {{item.name}}
        <input v-model="childcomment" type="text" />
        <button class="btn" @click="add(item.name)">确认</button>
      </div>
      <div class="response" v-for="(item2,index2) in item.res" :key="index2">
          <span style="display:inline-block;width:50%">
        {{item2.name}}
        <span style="font-size:12px;margin-left:8px;margin-right:8px">回复</span>
        {{item2.to}}:{{item2.content}}</span>
        <span class="time">{{item2.time}}</span>
        <button class="btn" @click="show2(index2,index,item2.name)" style>回复</button>
        <div class="re" style="background-color:#eee;width:100%" v-show="index2==index3&&index==index4">
          <span style="font-size:12px;margin-right:10px">回复:</span>
          {{item2.name}}
          <input v-model="childcomment" type="text" />
          <button @click="add2(item2.name)" class="btn">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        index4:-1, //主评论
      index3:-1,  //子评论
      childshow: true,
      show: false,
      childcomment: "",
 
      comments: [
        {
          name: "高冷的小明1:",
          content: "很棒",
          time: "2020-1-1 10:00:00",
          res: [{ name: "小明",to:'高冷的小明', content: "确实", time: "2020-3-2 20:02:02" },{ name: "小明111",to:'高冷的小明',  content: "确实", time: "2020-3-2 20:02:02" }]
        },
         {
          name: "高冷的小明2:",
          content: "很棒",
          time: "2020-1-1 10:00:00",
          res: [{ name: "小明",to:'高冷的小明',  content: "确实", time: "2020-3-2 20:02:02" },{ name: "小明111",to:'高冷的小明',  content: "确实", time: "2020-3-2 20:02:02" }]
        }
      ]
    };
  },
  methods: {
    showres(index) {
     this.index3=-1
    this.index4=index
    },
    add(name) {
      this.comments[this.index4].res.push({
        name: sessionStorage.name,
        to:name,
        content: this.childcomment,
        time: new Date().toLocaleString()
      });
      this.index4=-1
      this.childcomment=''
    },
    add2(name){
          this.comments[this.index4].res.push({
        name: sessionStorage.name,
        to:name,
        content: this.childcomment,
        time: new Date().toLocaleString()
      });
      this.index4=-1
      this.childcomment=''
    },
    show2(index,index2){
        this.index3=index
        this.index4=index2
    }
  }
};
</script>

<style lang="less" scoped>
.comment {
  border-radius: 30px;
  width: 100%;
  margin: 30px auto;
  .main_comment {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
    font-size: 14px;
    height: 25px;
    line-height: 25px;
  }
 
  .response {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
    padding-left: 20px;
    line-height: 25px;
  
  }
  .time {
    position: absolute;
    right: 50px;
    font-size: 10px;

    display: inline-block;
  }
  .btn {
    position: absolute;
    right: 3px;
    top: 5px;
    background-color: rgb(101, 230, 101);
    border: none;
  }
  .btn:hover {
    cursor: pointer;
  }
   .re {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    position: relative;
    height: 25px;
    width: 100%;
    input {
      height: 80%;
      width: 60%;
      border: none;
    }
  }
}
</style>