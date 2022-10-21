import axios from "./axios";
// import qs from 'qs'

export const getData = (params) => {
  return axios.request({
    url: '/home/getData',
    method: 'get',
    data: params
  })
}

export const reqGetMall = (data) => {
  return axios.request({
    url: '/mall/getMall',
    method: 'post',
    data:{
      "area": data
    }
  })
}

export const reqEditMall = (params) => {
  return axios.request({
    url: '/mall/editMall',
    method: 'post',
    data: params,
  })
}

export const reqGetOrder = (data) => {
  return axios.request({
    url: '/order/getOrder',
    method: 'post',
    data:{
      "area": data
    }
  })
}

export const reqLogin = (params) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: params,
  })
}

// export const getMenu = (params) => {
//   return axios.request({
//     url: '/permission',
//     method: 'post',
//     data: params,
//   })
// }