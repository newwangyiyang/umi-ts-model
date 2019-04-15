import React from 'react'
import router from 'umi/router'

import { LoginStateIF } from '@/interfaces/stateIF';
import { LoginPropsIF } from '@/interfaces/propsIF';

import { WingBlank, WhiteSpace, Button, List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form'
import VER from '@/components/VER'
import ILT from '@/components/InputLT'
const styles = require('./index.less')

class Login extends React.Component<LoginPropsIF, LoginStateIF> {
    readonly state = { // 定义state， 必须跟LoginStateIF定义数据类型一致
        userphone: 0,
        usercode: 0,
        codeText: '获取验证码',
        canCode: true,
        codeTime: 60
    }
    static defaultProps = { // 初始化props的内容
        content: '蓝色大海神马的反馈都是看好',
        size: 100
    }
    public componentWillMount() {
        // 生命周期函数
        document.title = '登录页面'
    }
    private getCode(canCode: boolean) { // 获取验证码
        if(!canCode) return false
        // 请求接口
        this.setState({canCode: false, codeText: `60 s`})
        const timer = setInterval(() => {
            let time = this.state.codeTime
            if(time <= 1) {
                this.setState({
                    canCode: true,
                    codeTime: 60,
                    codeText: '重新获取'
                })
                clearInterval(timer)
                
            } else {
                this.setState({
                    codeTime: --time,
                    codeText: `${time} s`
                })
            }
        }, 1000)
    }
    public render() {
        const { getFieldProps, getFieldError, getFieldValue, validateFields } = this.props.form
        return (
            <div className={styles.login_wrap}>
                <header className={styles.head_wrap}>
                    <img className={styles.wrap_img} src={require('@/assets/img/loginBg.png')} alt=""/>
                </header>
                <WhiteSpace size="xl" />
                <WingBlank>
                <List renderHeader={'系统登录'} className="my-list">
                <InputItem
                    {...getFieldProps('userphone', {
                        // initialValue: 'little ant',
                        rules: [
                            { required: true, message: '登录手机号不能为空' },
                            { pattern: /^1\d{10}$/g, message: '请输入正确的手机号' }
                        ],
                    })}
                    clear
                    type="number"
                    placeholder="请输入登录手机号"
                    onBlur={() => {
                        this.setState({userphone: getFieldValue('userphone')})
                    }}
                    >
                    <ILT />手机号
                </InputItem>
                <VER>{(getFieldError('userphone') || []).join(',')}</VER>
                <InputItem
                    className={styles.my_input}
                    {...getFieldProps('usercode', {
                        // initialValue: 'little ant',
                        rules: [
                            { required: true, message: '验证码不能为空' },
                            { pattern: /^\d{4}$/g, message: '请输入正确的验证码' }
                        ],
                    })}
                    clear
                    type="number"
                    placeholder="请输入验证码"
                    onBlur={() => {
                        this.setState({usercode: getFieldValue('usercode')})
                    }}
                    extra={<Button onClick={() => {this.getCode(this.state.canCode)}} disabled={!this.state.canCode} type="primary" size="small" inline>{this.state.codeText}</Button>}
                    >
                    <ILT />验证码
                </InputItem>
                </List>
                <VER>{(getFieldError('usercode') || []).join(',')}</VER>
                <WhiteSpace size="xl" />
                <Button 
                    size="large" 
                    type="primary"
                    onClick={() => {
                        validateFields((err: null | object) => {
                            if(!err) { // 校验成功
                                // 请求后台接口
                                //并跳转页面 并传递/:id => abc
                                router.push({pathname: '/list/abc', query: {name: '王一扬'}})
                            }
                        })
                    }}
                >
                    登录
                </Button>
                <WhiteSpace size="lg" />
                <Button 
                    onClick={() => {
                        validateFields(['usercode'], {force: true}, (err: null | object) => {
                            if(!err) {
                                Toast.info('验证码参数校验成功')
                                router.push({pathname: '/listModel'})
                            }
                        })
                    }} 
                    size="small" 
                    inline 
                    type="ghost"
                >局部参数校验</Button>
                <Button 
                    onClick={() => {
                        validateFields(['userphone'], {force: true}, (err: null | object) => {
                            if(!err) {
                                Toast.info('手机参数校验成功')
                                router.push({pathname: '/ShowGlobalModel'})
                            }
                        })
                    }} 
                    size="small" 
                    inline 
                    type="ghost"
                >获取全局model</Button>
                </WingBlank>
            </div>
        )
    }
}

export default createForm()(Login)
