import React, { useState } from 'react'
import { connect } from 'dva';
import { GlobalModelIF } from '@/interfaces/modelIF'
import { ShowGlobalModelPropsIF } from '@/interfaces/propsIF';
import { Card, WingBlank, WhiteSpace, Button, List } from 'antd-mobile';
import dayjs from 'dayjs'

const styles = require('./index.less')

const ShowGlobalModel: React.SFC<ShowGlobalModelPropsIF> = props => {
    const { dispatch, global } = props
    return (
        <WingBlank size="lg" className={styles.global_wrap}>
            <WhiteSpace size="lg" />
            <Card>
                <Card.Header
                    title={global.name}
                    thumb={global.headerUrl}
                    extra={<span>userId: {global.userId}</span>}
                />
                <Card.Body>
                    <div>openId: =>     {global.openId}</div>
                </Card.Body>
                <Card.Footer content={`年龄: ${global.age}`} extra={<div>{dayjs(global.createtime).format('YYYY-MM-DD HH:mm:ss')}</div>} />
            </Card>
            <WhiteSpace size="lg" />
            <Button 
            size="large" 
            type="primary" 
            onClick={() => {
                dispatch({
                    type: 'global/ADD_AGE',
                    payload: ++global.age
                })
            }}
            >增加年龄</Button>
            <WhiteSpace size="sm" />
            <Button 
            size="large" 
            type="warning" 
            onClick={async () => {
                await dispatch({
                    type: 'global/getListData'
                })
            }}
            >获取ListModel层数据</Button>
            <List renderHeader={'后台获取的数据是'} renderFooter={'数据已加载完毕'}>
                {
                    global.list.map(v => {
                        return <List.Item
                                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                                    onClick={() => {}}
                                    extra={v.hdcSort + 1}
                                    align="middle"
                                    multipleLine
                                    platform="android"
                                    key={v.hdcId}
                                >
                                    {v.hdcName}
                                    <List.Item.Brief>{v.hdcId}</List.Item.Brief>    
                                </List.Item>
                    })
                } 
            </List>
        </WingBlank>
    )
}

export default connect(
    ({global}: {global: GlobalModelIF}) => ({global})
)(ShowGlobalModel)
