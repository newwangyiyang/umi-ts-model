import axiosForm from '@/utils/axiosForm'

// customer/getWechatAuthorizationInfo 根据code获取用户的微信信息
export const getWechatAuthorizationInfo = (code: string) => axiosForm.post('customer/getWechatAuthorizationInfo', {code, typeId: '012001'})

// 微信js-sdk /wxjavapay/getWxJssdk
export const getWxJssdk = (url: string) => axiosForm.post('wxjavapay/getWxJssdk', {url})

// 获取当前订单的状态 /wxjavapay/getOrderStatus
export const getOrderStatus = (customerId: string) => axiosForm.post('wxjavapay/getOrderStatus', {customerId, typeId: '012001'})

// message/sendMessageCode 发送验证码
export const sendMessageCode = (mobilePhone: string) => axiosForm.post('message/sendMessageCode', {mobilePhone})

// logInOut/outsideLogin  登录
export interface loginParamsIF {
    openid: string,
    nickname: string,
    headimgurl: string,
    mobilePhone: string,
    messageCode: string,
    outsideType: "021001",
    typeId: '012001'
}
export const outsideLogin = (json: loginParamsIF) => axiosForm.post('logInOut/outsideLogin', json)


// 支付接口 /wxjavapay/createOrderBy12Dep
export interface payParamsIf {
    customerId: string
    ip: string
    openId: string
    typeId: '012001'
}
export const createOrderBy12Dep = (json: payParamsIf) => axiosForm.post('/wxjavapay/createOrderBy12Dep', json)
