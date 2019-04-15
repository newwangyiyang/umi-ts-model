import React, { useState, useEffect, MouseEvent } from 'react'
import { FuncComponentIF } from '@/interfaces/propsIF';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


const FuncConst: React.SFC<FuncComponentIF> = (props) => {
    const [fState, setFState] = useState({ // 利用useState来初始化fState的数据， 并利用setFState进行state中数据的重置
        name: '你是我的夜',
        num: 100
    })
    useEffect(() => { // 用来调用接口数据， 监听数据变化及用户操作
        console.log('goog')
    }, [fState.name, fState.num])
    useEffect(() => {
        console.log(fState.num)
    }, [fState.num])
    return (
        <WingBlank size="md">
            <WhiteSpace />
            <Button>触发</Button>
            <WhiteSpace />
            <Button type="primary" onClick={(e: MouseEvent) => { console.log(e) }}>触发</Button>
            <WhiteSpace />
            <h1>{fState.name}</h1>
            <WhiteSpace />
            <h2>{fState.num}</h2>
            <button 
            onClick={
                () => {
                // 对state数据进行更新
                setFState({...fState, num: ++fState.num})
            }}
            >唱歌num</button>
        </WingBlank>
    )
}


export default FuncConst








