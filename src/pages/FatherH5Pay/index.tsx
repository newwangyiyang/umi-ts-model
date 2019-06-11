import React from 'react';

export interface FatherH5PayPropsIF {
    
}

const styles = require('./index.less')
 
const FatherH5Pay: React.SFC<FatherH5PayPropsIF> = props => {
    return ( 
        <div className={styles.pay_wrap}>
            <div className={styles.pay_top}>
                <img className={styles.top_img} src={require('@/assets/img/payDui.png')} alt=""/>
                <p className={styles.top_text}>恭喜您，支付成功！</p>
            </div>
            <div className={styles.pay_bottom}>
                <img className={styles.bottom_img} src={require('@/assets/img/payEWM.png')} alt=""/>
                <p className={styles.b_p1}>扫描二维码下载涛大夫用户端</p>
                <p className={styles.b_p2}>涛大夫，准时预约服务平台</p>
            </div>
        </div>
     );
}
 
export default FatherH5Pay;
