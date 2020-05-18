<template>
    <div>
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
            <div class="pagination">
        <el-pagination class="pa" background :page-size="10"  layout="prev, pager, next" :total="allpage"></el-pagination>
      </div>
            
    </div>
</template>

<script>
import Blog from '../Blog'
    export default {
        data() {
            return {
                allpage: 210,
            }
        },
        components: {
            Blog,
        },
    }
</script>

<style lang="less" scoped>
 .pagination {
      width: 100%;   
      margin-top: 20px;
      margin-left: -40px;
      margin-bottom: 30px;
      
    }
</style>