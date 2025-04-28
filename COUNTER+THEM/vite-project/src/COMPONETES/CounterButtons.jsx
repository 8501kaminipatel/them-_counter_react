import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, REDUCE } from '../REDUX/action';

const CounterButtons = () => {

    const dispatch = useDispatch();
    const {count} =useSelector((state)=>state.counterReducer)
    return (
        <>
            <button onClick={() => dispatch({ type: ADD})}>ADD</button>
            <button onClick={() => dispatch({ type: REDUCE})} disabled={count <= 0} >REDUCE</button>
        </>
    )
}

export default CounterButtons