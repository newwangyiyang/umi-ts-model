import React from 'react'
import { List, InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { createForm } from 'rc-form'
import { RcFormPropsIF } from '@/interfaces/params';
import VER from '@/components/VER';
import { InputItemLabel } from '@/components/InputItemLabel'
import { addActivityRegister } from '@/api/activityRegisterApi';
import router from 'umi/router';

const styles = require('./index.less')

export interface ActivityRegisterProps {
    form: RcFormPropsIF
}
 
const ActivityRegister: React.SFC<ActivityRegisterProps> = props => {

    const { form: { getFieldDecorator, getFieldError, getFieldValue, validateFields } } = props

    // 提交申报表
    const aRegisterSub = () => {
        validateFields(async (err: null | any) => {
            if(!err) {
                const {data}: {data: Ajax.AjaxResponse} = await addActivityRegister(
                    {
                        arDept: getFieldValue('arDept'),
                        arChairman: getFieldValue('arChairman'),
                        arGroupLeader: getFieldValue('arGroupLeader'),
                        arFiller: getFieldValue('arFiller'),
                        arPhone: getFieldValue('arPhone'),
                        arEmail: getFieldValue('arEmail'),
                        arAddress: getFieldValue('arAddress'),
                        arCaseName: getFieldValue('arCaseName')
                    }
                )
                console.log(data)
                if(data.code === 0) {
                    router.replace('/ActivityRegisterSuccess')
                } else {
                    Toast.info(data.msg)
                }
            }
        })
    }


    return ( 
        <div className={styles.ar_wrap}>
            <List>
                {
                    getFieldDecorator('arDept', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '申报单位为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入申报单位"
                        >
                            <InputItemLabel required>申报单位</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arDept') || []).join(';')}</VER>
                {
                    getFieldDecorator('arChairman', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '主任委员为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入主任委员"
                        >
                            <InputItemLabel required>主任委员</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arChairman') || []).join(';')}</VER>
                {
                    getFieldDecorator('arGroupLeader', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '志愿组组长为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入志愿组组长"
                        >
                            <InputItemLabel required>志愿组组长</InputItemLabel>
                        </InputItem>
                    )
                }
                <span className={styles.input_msg}>区域脑心同治走基层志愿组组长</span>
                <VER>{(getFieldError('arGroupLeader') || []).join(';')}</VER>
                {
                    getFieldDecorator('arFiller', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '填报人为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入填报人"
                        >
                            <InputItemLabel required>填报人</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arFiller') || []).join(';')}</VER>
                {
                    getFieldDecorator('arPhone', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '联系电话为必填项'},
                            {pattern: /^1\d{10}$/g, message: '请输入正确的手机号'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入联系电话"
                        >
                            <InputItemLabel required>联系电话</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arPhone') || []).join(';')}</VER>
                {
                    getFieldDecorator('arEmail', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '联系邮箱为必填项'},
                            {pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,message: '请输入正确的邮箱地址'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入联系邮箱"
                        >
                            <InputItemLabel required>联系邮箱</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arEmail') || []).join(';')}</VER>
                {
                    getFieldDecorator('arAddress', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '联系地址为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入联系地址"
                        >
                            <InputItemLabel required>联系地址</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arAddress') || []).join(';')}</VER>
                {
                    getFieldDecorator('arCaseName', {
                        initialValue: '',
                        rules: [
                            {required: true,message: '案例名称为必填项'}
                        ],
                        
                    })(
                        <InputItem
                        clear
                        type="text"
                        className={styles.input_text}
                        placeholder="请输入案例名称"
                        >
                            <InputItemLabel required>案例名称</InputItemLabel>
                        </InputItem>
                    )
                }
                <VER>{(getFieldError('arCaseName') || []).join(';')}</VER>
            </List>
            <WhiteSpace size="lg" />
            <WingBlank>
                <Button type="primary" onClick={aRegisterSub}>提交</Button>
            </WingBlank>
            <WhiteSpace />
            <WingBlank>
                <p className={styles.tips_msg}>
                    备注: 如案例有文本、相关图片、音频、视频、以及其他附件，请发送至邮箱：naoxintongzhi@163.com，邮件主题注明“走基层典型案例征集”。
                </p>
            </WingBlank>
        </div>
    );
}
 
export default createForm()(ActivityRegister)
