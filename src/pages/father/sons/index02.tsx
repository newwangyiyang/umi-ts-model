import React, {useState, useEffect} from 'react'
import _ from 'lodash'

const l: React.SFC = () => {
    const [count, setcount] = useState({name: '王一扬', age: 200});
    useEffect(() => {
        console.log(count.age)
    }, [count.age])
    return (
        <div>
            <h2>{count.name}</h2>
            <button
            onClick={() => {
                const o = _.eq(count.name, '王一扬') ? {name: '木子', age: 200} : {name: '王一扬', age: 200}
                setcount(o)
            }}
            >++++</button>
        </div>
    ) 
}
export default l
