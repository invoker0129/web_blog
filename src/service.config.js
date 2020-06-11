/*
 * @Author: Meng Jiawei
 * @Date: 2020-05-17 20:17:56
 * @LastEditTime: 2020-05-25 19:58:31
 * @FilePath: \blog\src\service.config.js
 */ 
//路由配置文件
const Base="http://localhost:8080/"
const URL={
    register:Base+'user/save',
    login:Base+'user/login',
    submitblog:Base+'blog/submit',
    getpage:Base+'blog/page',
    getblog:Base+'blog/getblog',
    getpersonalblog:Base+'blog/getpersonalblog'
}
module.exports=URL