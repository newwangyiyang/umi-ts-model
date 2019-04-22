import React from 'react'
import { TabbarItemPropsIF } from '@/interfaces/propsIF';
const styles = require('./index.less')


const NyTabbarItem: React.SFC<TabbarItemPropsIF> = props => {
    
    return (
        <div 
        className={styles.tabbar_item_wrap}
        style={{
            backgroundImage: `url(${props.iconUrl})`
        }}
        />
    )
}

export default NyTabbarItem
