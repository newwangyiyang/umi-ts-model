import React, { useEffect, useState } from 'react'
import { connect } from 'dva';
import { DvaDemoIF, Global01IF, Global02IF } from '@/interfaces/modelIF';
import dayjs from 'dayjs'

import { Button, DatePicker, List, Toast, Modal } from 'antd-mobile'

const dvaDemo: React.SFC<{d: DvaDemoIF, dispatch: Function, g: Global01IF, gg: Global02IF}> = (props) => {
    const {d, dispatch, g, gg} = props
    const [date, setdate] = useState(new Date)
    useEffect(() => {
        dispatch({type: 'global01/getUrl', payload: '王一扬111'})
    }, [])
    return (
        <div>
            <h1>{dayjs(d.dvaDemoTime).format('YYYY-MM-DD HH:mm:ss')}</h1>
            <h2>{d.dvaDemoName}</h2>
            <h3>{g.name01}</h3>
            <h4>{gg.name02}</h4>
            <button onClick={() => {
                dispatch({
                    type: 'dvaDemo/CHANGESTATE',
                    payload: '木子aaa'
                })
            }}>change</button>
            <Button onClick={() => {
                Modal.alert('Delete', 'Are you sure???', [
                    { text: 'Cancel', onPress: () => console.log('cancel') },
                    { text: 'Ok', onPress: () => console.log('ok') },
                ])
            }}>showLayer</Button>
            <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                <DatePicker
                    value={date}
                    onChange={date => setdate(date)}
                    minuteStep={2}
                    >
                    <List.Item arrow="horizontal">Datetime</List.Item>
                </DatePicker>
            </List>
        </div>
    )
}

export default connect(
    ({dvaDemo, global01, global02}: {dvaDemo: DvaDemoIF, global01: Global01IF, global02: Global02IF}) => {
        return {d: dvaDemo, g: global01, gg: global02}
    }
)(dvaDemo)

