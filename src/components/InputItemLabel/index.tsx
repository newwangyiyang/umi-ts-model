import React from 'react'
const styles = require('./index.less')


export const InputItemLabel: React.SFC<{required?: boolean}> = props => (
    <div className={styles.itl_wrap}>
        {props.required&&<span className={styles.itl_required}>*</span>}
        <span className={styles.itl_label}>{props.children}</span>
    </div>
)
