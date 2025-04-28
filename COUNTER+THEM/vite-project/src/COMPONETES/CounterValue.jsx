import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {

    const {count} =useSelector((state)=>state.counterReducer)
  return (
    <div>
    <h2>Counter Value:{count} </h2>
  </div>
  )
}

export default CounterValue