<!--
 * @Author: Meng Jiawei
 * @Date: 2020-05-11 16:59:16
 * @LastEditTime: 2020-06-13 00:53:39
 * @FilePath: \blog\src\components\personalcomponents\personalMessage.vue
--> 
<template>
  <div class="person_message">
    <div class="person_main1">
      <div>
        昵称:
        <input
          style="background-color:transparent;border:none;width:7.8rem"
          maxlength="10"
          type="text"
          v-model="name"
          id
        />
      </div>
    </div>
    <div class="person_main1">
      性别:
      <el-select size="mini" style="width:100px;" v-model="sex" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="person_main1">
      生日:
      <el-date-picker
        style="width:130px;"
        size="mini"
        v-model="value1"
        type="date"
        placeholder="选择日期"
      ></el-date-picker>
    </div>
    <div class="person_main1">
        <el-button @click="save()" type="primary" size="mini">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
     model:{
        prop:'name',
        event:'change',
    }, 
  data() {
    return {
      value1:'1998-11-17',
      sex: "男",
      name: "高冷的小明",
      options: [
        { value: "boy", label: "男" },
        { value: "girl", label: "女" }
      ]
    };
  },
    methods: {
        save() {
            this.$emit('change',this.name)
        }
    },
};
</script>

<style lang="less" scoped>
.person_message {
  margin-left: 20px;
  width: 100%;
  .person_main1 {
    width: 100%;
    margin-top: 20px;
  }
}
</style>