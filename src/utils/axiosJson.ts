import axios from 'axios';
import { AxiosResponse, AxiosRequestConfig } from 'axios'

//以application/json进行提交
const axiosJson = axios.create({
    baseURL: 'http://localhost:8082/',
    timeout: 30000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// 取消重复请求
let pending: Array<{
  url: string,
  cancel: Function
}> = []
const cancelToken = axios.CancelToken
const removePending = (config: AxiosRequestConfig) => {
  for (let p in pending) {
    let item: any = p
    let list: any = pending[p]
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url + '&request_type=' + config.method) {
      // 执行取消操作
      list.cancel()
      // 从数组中移除记录
      pending.splice(item, 1)
    }
  }
}



// request interceptor
axiosJson.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  removePending(config)
  config.cancelToken = new cancelToken((c) => {
    pending.push({ url: config.url + '&request_type=' + config.method, cancel: c })
  })
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})


axiosJson.interceptors.response.use((res) => {
    removePending(res.config)
    if (res.status !== 200) {
      throw new Error('请求错误');
    }
    return res;
  }, (error) => {
    return Promise.reject(error);
});

export default axiosJson

