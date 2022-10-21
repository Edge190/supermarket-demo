import Mock from 'mockjs'

import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'
import mallApi from './mockServeData/mall'

Mock.mock(/home\/getData/,'get', homeApi.getStatisticalData)
Mock.mock(/user\/add/, 'post',userApi.createUser)
Mock.mock(/user\/edit/, 'post',userApi.updateUser)
// Mock.mock('/api/user/getUser', userApi.getUserList)

Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'get', userApi.deleteUser)
//商品列表相关
Mock.mock("/api/mall/getMall", 'get', mallApi.getMallList)

Mock.mock("/api/mall/edit", 'post', mallApi.updateMall)

// 权限相关
Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)