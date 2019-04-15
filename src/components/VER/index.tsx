import React from 'react'
const styles  = require('./index.less')

const VER: React.SFC = props => {
    return (<div className={styles.error_wrap}>{props.children}</div>)
}
export default VER