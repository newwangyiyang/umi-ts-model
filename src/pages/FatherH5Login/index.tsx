import React, { useState, useEffect, useRef } from 'react';
import { RcFormPropsIF } from '@/interfaces/params';
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import VER from '@/components/VER';
import { PHONEREGEXP, CODEREGEXP } from '@/utils/constance';
import { createForm } from 'rc-form'
import router from 'umi/router';
import { sendMessageCode, outsideLogin, createOrderBy12Dep, payParamsIf } from '@/api/FatherH5Api';
import { connect } from 'dva';
import { FatherH5ModelIF } from '@/models/FatherH5';
import _ from 'lodash'


export interface FatherH5LoginPropsIF {
    form: RcFormPropsIF
    dispatch: Function
    FatherH5: FatherH5ModelIF
}

const styles = require('./index.less')

const FatherH5Login: React.SFC<FatherH5LoginPropsIF> = props => {
    const { form: {getFieldDecorator, getFieldError, getFieldValue, validateFields}, FatherH5: wxObj, dispatch }  = props
    const intervalRef = useRef<any>()// 间歇定时器id， 在userEffect返回清除函数， 防止内存泄露
    // 验证码变量
    const [codeTemp, updateCodeTemp] = useState({
        codeText: '获取验证码',
        canCode: true,
        codeTime: 60
    })

    // 验证码按钮控制
    const codeAction = () => {
        updateCodeTemp({...codeTemp, canCode: false, codeText: `60 s`})
        const timer = setInterval(() => {
            let time = codeTemp.codeTime
            // 此处目的是为了立马获取到state更细后的值
            updateCodeTemp((p) => {
                time = p.codeTime
                return {...p}
            })
            if(time < 1) {
                updateCodeTemp({
                    canCode: true,
                    codeTime: 60,
                    codeText: '重新获取'
                })
                clearInterval(timer)
            } else {
                updateCodeTemp((pp) => ({...pp, codeTime: --time, codeText: `${pp.codeTime} s`}))
            }
            intervalRef.current = timer
        }, 1000)
    }
    // 获取验证码
    const getCode = (canCode: boolean) => { // 获取验证码
        if(!canCode) return false
        validateFields(['phone'], {force: true}, async (err: null | object) => {
            if(!err) {
                // 请求接口
                codeAction();
                const res: Ajax.AxiosResponse = await sendMessageCode(getFieldValue('phone'))
                const r: Ajax.AjaxResponse = res.data
                Toast.info(r.message)
            }
        })
    }
    // 提交用户的基本信息
    const subAllInfo = _.debounce(() => {
        validateFields({force: true}, async (err: object | null) => {
            if(!err) {
                const res: Ajax.AxiosResponse = await outsideLogin(
                    {
                        openid: wxObj.openid,
                        nickname: getFieldValue('username'),
                        headimgurl: wxObj.headimgurl,
                        mobilePhone: getFieldValue('phone'),
                        messageCode: getFieldValue('codeNum'),
                        outsideType: "021001",
                        typeId: '012001'
                    }
                )
                const r: Ajax.AjaxResponse = res.data
                if(r.statusCode === 1) {
                    dispatch({
                        type: 'FatherH5/INIT_USERID',
                        payload: r.object.id
                    })

                    await payOrderFor200(
                        {
                            customerId: r.object.id,
                            ip: '12.123.12.123',
                            openId: wxObj.openid,
                            typeId: '012001'
                    })
                } else {
                    Toast.info(r.message)
                }
            }
        })
    }, 1000, {leading: true, trailing: false})
    // 调用支付接口
    const payOrderFor200 = async (json: payParamsIf) => {
        const res: Ajax.AxiosResponse = await createOrderBy12Dep(json)
        const r: Ajax.AjaxResponse = res.data
        const obj = r.obj
        wx.ready(function() {
            wx.chooseWXPay({
              timestamp: obj.timeStamp,
              nonceStr: obj.nonceStr, // 支付签名随机串，不长于 32 位
              package: obj.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              signType: obj.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: obj.paySign, // 支付签名
              success: function(res: any) {
                // 支付成功后的回调函数
                if (res.errMsg == "chooseWXPay:ok") {
                  //支付成功
                  router.replace({pathname: '/FatherH5Pay'})
                } else {
                  console.log(res.errMsg);
                }
              },
              cancel: function() {
                //支付取消
                console.log("支付取消");
              }
            });
        });
    }


    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [ intervalRef ])
    return (
        <div className={styles.login_wrap}>
            <img className={styles.login_bg} src={require('@/assets/img/bg.png')} alt=""/>
            <div className={styles.login_active}>
                <List>
                    {
                        getFieldDecorator('username', {
                            initialValue: '',
                            rules: [
                                {required: true,message: '姓名为必填项'}
                            ],
                            
                        })(
                            <InputItem
                            clear
                            type="text"
                            className={styles.input_text}
                            placeholder="请输入您的姓名"
                            />
                        )
                    }
                    <VER>{(getFieldError('username') || []).join(';')}</VER>
                </List>
                <List>
                    {
                        getFieldDecorator('phone', {
                            initialValue: '',
                            rules: [
                                {required: true,message: '手机号为必填项'},
                                {pattern: PHONEREGEXP, message: '请填写正确的手机号'}
                            ],
                            
                        })(
                            <InputItem
                            clear
                            type="number"
                            className={styles.input_text}
                            placeholder="请输入您的手机号"
                            >
                            </InputItem>
                        )
                    }
                    <VER>{(getFieldError('phone') || []).join(';')}</VER>
                </List>
                <List>
                    {
                        getFieldDecorator('codeNum', {
                            initialValue: '',
                            rules: [
                                {required: true,message: '验证码为必填项'},
                                {pattern: CODEREGEXP, message: '请填写正确的验证码'}
                            ],
                            
                        })(
                            <InputItem
                            clear
                            type="number"
                            className={styles.input_text}
                            extra={<Button style={{backgroundColor: '#D55A1C', color: '#fff'}} onClick={() => {getCode(codeTemp.canCode)}} disabled={!codeTemp.canCode} size="small" inline>{codeTemp.codeText}</Button>}
                            placeholder="请输入验证码"
                            >
                            </InputItem>
                        )
                    }
                    <VER>{(getFieldError('codeNum') || []).join(';')}</VER>
                </List>

                <WhiteSpace size="lg" />
                <img onClick={subAllInfo} className={styles.sub_btn} src={require('@/assets/img/subBtn.png')} />
            </div>

            
        </div>
    )
}

export default connect(
    ({FatherH5}: {FatherH5: FatherH5ModelIF}) => ({FatherH5}))
(createForm()(FatherH5Login))
