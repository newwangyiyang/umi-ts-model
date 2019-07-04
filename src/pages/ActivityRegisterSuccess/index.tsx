import React from 'react'
import { Result, Icon } from 'antd-mobile';
const styles = require('./index.less')


export interface ActivityRegisterSuccessProps {
    
}
 
const ActivityRegisterSuccess: React.SFC<ActivityRegisterSuccessProps> = () => {
    return ( 
        <div className={styles.s_wrap}>
            <Result 
            img={<Icon size="lg" type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
            title="提交成功"
            message="所提交内容已成功提交"
            />
        </div>
    );
}
 
export default ActivityRegisterSuccess;
