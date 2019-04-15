import React, { useEffect } from 'react'
import { ListModelPropsIF } from '@/interfaces/propsIF';
import { WingBlank, List, WhiteSpace } from 'antd-mobile';
import _ from 'lodash'
import { connect } from 'dva';
import { ListModelModelIF } from '@/interfaces/modelIF';

const MyListModel: React.SFC<ListModelPropsIF> = props => {

    const { dispatch, listModel } = props 
    
    useEffect(
        () => {
            dispatch({type: 'listModel/getListData'})
        }, [] // 当useEffect第二个参数为空数组时，useEffect的效果是componentDidMounted
    )

    return (
        <WingBlank size="sm">
            <WhiteSpace />
            <List renderHeader={'后台获取的数据是'} renderFooter={'数据已加载完毕'}>
                {
                    listModel.listData.map(v => {
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
    ({listModel}: {listModel: ListModelModelIF}) => ({listModel})
)(MyListModel)

