declare module 'classnames'
declare module 'qs'
declare module 'rc-form'
// 将axios的返回值定义到全局ajax下
declare namespace Ajax {
    // axios 返回数据
    export interface AxiosResponse {
      data: AjaxResponse
    }
  
    // 请求接口数据
    export interface AjaxResponse {
      code: number,
      data: any,
      msg: string
    }
}