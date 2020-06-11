/*
 * @Author: Meng Jiawei
 * @Date: 2020-05-02 18:40:17
 * @LastEditTime: 2020-05-25 19:42:25
 * @FilePath: \blog\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home/blogpreview',
    name:'Blogpreview',
    component:()=>import ('../views/Blogpreview.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/write',
    name: 'Write',
    component: () => import('../views/writeblog'),
  },
  {
    path: '/home/personal',
    name: 'Personal',
    component: () => import('../views/personal'),
    children: [
      {
        path: '',
        name: 'message',
        component: () => import('../components/personalcomponents/personalMessage')
      },
      {
        path: '/home/personal/Blog',
        name: 'Blog',
        component: () => import('../components/personalcomponents/personalBlog')
      },
      {
        path: '/home/personal/Count',
        name: 'Count',
        component: () => import('../components/personalcomponents/personalCount')
      },
      {
        path: '/home/personal/Talk',
        name: 'Talk',
        component: () => import('../components/personalcomponents/personalTalk')
      }
    ]
  },
  {
    path: '/home/login',
    name: 'name',
    component: () => import('../views/Login')
  },
  {
    path: '/home/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
