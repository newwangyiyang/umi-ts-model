import React from 'react'
import { DavDemo01IF } from '@/interfaces/modelIF';
import { connect } from 'dva';

const dvaDemo01: React.SFC<{dd: DavDemo01IF}> = (props) => {
    const {dd} = props
    return (
        <div>
            <h1>321</h1>
            <h2>{dd.str}</h2>
        </div>
    )
}

export default connect(({dvaDemo01}: {dvaDemo01: DavDemo01IF}) => {
    return {dd: dvaDemo01}
})(dvaDemo01)