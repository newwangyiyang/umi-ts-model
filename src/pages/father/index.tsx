import React from 'react';
import { FatherStateIF } from '@/interfaces/stateIF';
const styles = require('./index.less')


export default class Father extends React.Component<{}, FatherStateIF> {
    static defaultProps = {
        name: '王一扬',
        age: 27
    }
    readonly state = {
        name: '',
        age: 32
    }
    public render() {
        return (
            <div className={styles.father_wrap}>
                <h1 className={styles.fa_tit}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                {/* 嵌套子路由 */}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
