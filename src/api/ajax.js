// 进一步封装axios之间返回所需数据

import axios from 'axios'
export default function (url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if(type === "GET"){
      let dataStr = '';
      Object.keys(options.data).forEach(key => {
        dataStr += `${key}=${data[key]}&`
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.length - 1)
        url = `${url}?${dataStr}`
      }
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
