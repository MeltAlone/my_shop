# 美味随行

## 项目简介
- 使用Vue全家桶和stylus和mint-ui组件库实现的移动端Web应用，是一个根据当前位置推荐附近美食的web应用。
- 项目使用vue-cli搭建采用了组件化、工程化的开发模式。
- 数据来源是根据XX外卖接口文档，部分接口文档中没有的数据是使用Mock.js拦截Ajax请求返回的本地模拟数据。

## 结构目录
### 路由划分
一级路由
- /home主页，包括顶部、轮播图（swiper）、附近店铺列表（better-scroll）
- /shop店铺主页
- /search搜索页，关键字搜索店铺
- /order订单页
- /center个人中心
- /login登录页
二级路由（查看店铺详情时）
- /goods商品列表
- /ratings评价列表
- /info详情
