<template>
    <div class="count">
        <div class="block">
             账号:{{count}}
        </div>
        <div class="block">
            修改密码
        </div>
        <div class="block">
             <el-button type="primary" size="mini">退出登录</el-button>
        </div>
        
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count:'547783781'
            }
        },
    }
</script>

<style lang="less" scoped>
.count{
    margin-top: 30px;
    width:100%;
    .block{
        margin-top:10px;
    }
    .block:hover{
        cursor: pointer;
        color:white
    }
}
</style>