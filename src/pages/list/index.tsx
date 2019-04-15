import React, { useState, useEffect } from 'react'
import { ListUrlRouterPropsIF } from '@/interfaces/propsIF';
import { WingBlank, List, WhiteSpace, Toast } from 'antd-mobile';
import { getAllHcData } from '@/api/list';
import { ListItemStateIF } from '@/interfaces/stateIF';
import _ from 'lodash'

let myList: ListItemStateIF[] = []


const MyList: React.SFC<ListUrlRouterPropsIF> = props => {
    const id = props.match.params.id
    const name = props.location.query.name

    const [listData, setListData] = useState(myList)
    
    useEffect(
        () => {
            (async () => {
                const { data }: {data: Ajax.AjaxResponse} = await getAllHcData()
                if(_.eq(data.code, 0)) {
                    setListData(data.data)
                } else {
                    Toast.info(data.msg)
                }
            })()

        }, [ listData[0] ]
    )

    return (
        <WingBlank size="sm">
            <WhiteSpace />
            <List renderHeader={'通过url传递的参数'}>
                <List.Item extra={id}>
                    传递的params参数为
                </List.Item>
                <List.Item extra={name}>    
                    传递的query参数为
                </List.Item>
            </List>
            <WhiteSpace />
            <List renderHeader={'后台获取的数据是'} renderFooter={'数据已加载完毕'}>
                {
                    listData.map(v => {
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

export default MyList

