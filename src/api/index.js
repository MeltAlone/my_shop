// 封装接口请求函数方便页面中进行请求
// 依旧返回一个promise对象

import ajax from './ajax'

// 1、根据经纬度获取位置详情

export const getAddress = geo => {
  ajax(`/position/${geo}`)
}
// 2、获取食品分类列表

export const getAddress = () => {
  ajax(`/index_category`)
}
// 3、根据经纬度获取商铺列表

export const getAddress = ({ longitude, latitude }) => {
  ajax(`/shops`,{ longitude, latitude })
}
// 4、根据经纬度和关键字搜索商铺列表

export const getAddress = () => {

}
// 5、获取一次性验证码

export const getAddress = () => {

}
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
