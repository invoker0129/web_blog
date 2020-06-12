# blog



本项目是基于vue+element ui+ssm实现的，平常在csdn或者是有道云笔记上也会写写小笔记，所以就打算做一个个人的小博客，之前写过一个移移动端的app也是用vue做的但是我不是很满意，所以这次做成web端的并且是响应式的，用到的技术就是vue全家桶，使用脚手架开发的单页面应用，后台也做了一部分用的是ssm框架开发的，实现了博客的基本功能，到时候也会发到github上，前端内容是做了挺多，但是很多都没有跟后端结合，所以只能看到前端的一个效果,而且因为我想象力也不足够，所以ui并不是做得很好。。





## 项目安装

下载完成后

```
npm install
```

### 运行

```
npm run serve
```

运行后你会看到首页

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpyniupo2j31hc0r11kx.jpg)

点击go进入主界面

这边在进入之前其实还有一个加载界面直到加载完成才会呈现出博客。

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpyrc2az6j31gs0pjtin.jpg)

首先这是个响应式的使用的媒体查询来实现的，width变小后会适应了移动端的样式

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpysrpwmqj30kd0oj778.jpg)

这边的博客是从后端获取的，我没有模拟数据，所以如果只下载了这个前端项目，那么一开始进去啥都没有的。

要查看博客一定要先登陆，这边会判断sessionstorage中是否存在username没有则会让你先登录或者注册

## 个人相册

个人相册这边就只有两个简答的上传和删除功能，布局也只是用了下flex布局而已，没有考虑过多。。。（实在不知道做成什么样子。。。。）

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpz9iejxxj317h0lv4qp.jpg)

## 登录注册界面

登陆注册就简单的输入用户名或者密码

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpyw0qf7mj315d0lv47c.jpg)

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpywett1zj30m20kb0ye.jpg)

## 查看博客

这边评论功能是只在前端实现了，并没有和后端结合起来（其实是我太懒了，做这个还要设计下数据库。。）

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpyye1nngj311v0n8jwk.jpg)



## 写博客

使用的富文本编辑器是mavon-eidtor

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpz0kevm9j31dr0pz778.jpg)

## 个人主页

这里使用了嵌套路由来实现个人空间

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpz290scdj30vi0ljjy5.jpg)

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpz713q7kj31040gx42w.jpg)

## 背景的变换

背景用到了vuex当做全局变量来保存的

这两个背景都是有动效的

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpz61eay0j30ta0icth6.jpg)

## 总结

这边遇到的问题就是el的轻提醒组件出现了bug也不知道是不是我使用的问题，最后也没解决，所以就自己造了一个轮子。。怪丑的。。

![](http://ww1.sinaimg.cn/large/005ZSj0Gly1gfpzd2n0x9j30lv05374f.jpg)

就长这样。。

还有就是没有UI真的好难啊。。我这脑子里完全不知道要做成啥样子的。。卒。。



### 打包

```
npm run build
```

这个项目目前也还没有部署，之前部署了一个移动端的到时候会发到GitHub上。

#### 如有问题可以加我qq：547783781

(●'◡'●)





