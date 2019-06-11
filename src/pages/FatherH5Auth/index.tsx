import React, { useEffect, useState } from 'react'
import getParams from '@/utils/getParams';
import { connect } from 'dva';
import { FatherH5ModelIF } from '@/models/FatherH5'
import router from 'umi/router';
import { reloadAuthorized } from '@/utils/Authorized'
import { getWechatAuthorizationInfo, getWxJssdk, getOrderStatus } from '@/api/FatherH5Api';
import { Toast } from 'antd-mobile';

const URL_FOR_CODE = `https://www.tdaifu.cn/taodoctor/get-weixin-code.html?appid=wx944b482b1c088969&scope=snsapi_userinfo&state=wangyiyang&redirect_uri=https://www.tdaifu.cn/FatherH5For12/`


const FatherH5Auth: React.SFC<{dispatch: Function, FatherH5: FatherH5ModelIF}> = props => {
    const { dispatch } = props
    const [ code, setCode ] = useState(getParams('code'))
    useEffect(() => {
        if(!code) {
            window.location.href = URL_FOR_CODE
            return
        }
        getUserInfoByCode(code as string)
        getSignForJSSDK(window.location.href.split('#')[0])
    }, [ code ])

    // 根据code获取用户基本信息
    const getUserInfoByCode = async (code: string) => {
        try {
            const res: Ajax.AxiosResponse = await getWechatAuthorizationInfo(code)
            const r: Ajax.AjaxResponse = res.data
            if(r.statusCode === 1) {
                dispatch({
                    type: 'FatherH5/INIT_WX_STATE',
                    payload: {
                        openid: r.object.openid,
                        nickname: r.object.nickname,
                        headimgurl: r.object.headimgurl,
                    }
                })
                const customerId = r.object.customerId
                // 添加权限信息
                reloadAuthorized('user')
                if(customerId) {
                   await isPayById(customerId)
                } else {
                    router.replace({pathname: '/FatherH5Login'})
                }
            } else {
                Toast.info(r.message)
            }
        } catch {
            window.location.href = URL_FOR_CODE
        }
    } 

    const getSignForJSSDK = async (url: string) => {
        const res: Ajax.AxiosResponse = await getWxJssdk(url)
        const r: Ajax.AjaxResponse = res.data
        initWeixinConfig(r.obj)
        shareBtn()

    }
    // 初始化微信js-sdk
    const initWeixinConfig = (signature: any) => { // 1、初始化微信js-sdk
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx944b482b1c088969', // 必填，公众号的唯一标识
            timestamp: signature.timestamp, // 必填，生成签名的时间戳
            nonceStr: signature.nonceStr, // 必填，生成签名的随机串
            signature: signature.signature,// 必填，签名
            jsApiList: [ 'updateAppMessageShareData', 'updateTimelineShareData', 'chooseWXPay'] // 必填，需要使用的JS接口列表
        });
    }
    // 初始化用户的分享链接
    const shareBtn = () => { // 2、用户分享链接设置
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({ 
                title: '爸爸，您辛苦啦', // 分享标题
                desc: '爸爸，您辛苦啦！感恩父亲节', // 分享描述
                link: 'https://www.tdaifu.cn/FatherH5For12/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.buchang.com/imgs/dadPic.png', // 分享图标
                success: function () {}
            })
            wx.updateTimelineShareData({ 
                title: '爸爸，您辛苦啦', // 分享标题
                desc: '爸爸，您辛苦啦！感恩父亲节', // 分享描述
                link: 'https://www.tdaifu.cn/FatherH5For12/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.buchang.com/imgs/dadPic.png', // 分享图标
                success: function () {}
            })
        })
    }
    // 判断用户是否已经支付成功
    const isPayById = async (customerId: string) => {
        const res: Ajax.AxiosResponse = await getOrderStatus(customerId)
        const r: Ajax.AjaxResponse = res.data
        if(r.obj === '000001') { // 表明订单已支付
            router.replace({pathname: '/FatherH5Pay'})
        } else {
            router.replace({pathname: '/FatherH5Login'})
        }
    }
    return (
        <div></div>
    )
}

// 微信登录授权页面
export default connect(
    ({FatherH5}: {FatherH5: FatherH5ModelIF}) => ({FatherH5})
)(FatherH5Auth)
