import axios from 'axios'
// 该qs模块需额外在 tools.d.ts进行引入
import qs from 'qs'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

//已form表单进行提交
const axiosForm = axios.create({
  baseURL: 'http://www.todaifu.com:3435/',
  timeout: 20000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
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

//POST传参序列化
axiosForm.interceptors.request.use((config) => {

  removePending(config)
  config.cancelToken = new cancelToken((c) => {
    pending.push({ url: config.url + '&request_type=' + config.method, cancel: c })
  })

  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});
//code状态码200判断
axiosForm.interceptors.response.use((res) => {
  removePending(res.config)
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});

export default axiosForm;
