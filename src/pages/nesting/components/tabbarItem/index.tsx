import React from 'react'
import { TabbarItemPropsIF } from '@/interfaces/propsIF';
const styles = require('./index.less')


const TabbarItem: React.SFC<TabbarItemPropsIF> = props => {
    
    return (
        <div 
        className={styles.tabbar_item_wrap}
        style={{
            backgroundImage: `url(${props.iconUrl})`
        }}
        />
    )
}

export default TabbarItem