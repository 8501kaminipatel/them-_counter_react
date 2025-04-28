import React from 'react'
import CounterValue from './CounterValue'
import CounterButtons from './CounterButtons'

const Counter = () => {
    return (
        <>
            <div>
                < CounterValue />
            </div>
            <div>
                <CounterButtons />
            </div>
        </>
    )
}

export default Counter