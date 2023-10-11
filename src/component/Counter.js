import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement
} from '../state/actions/index.js'

const Counter = () => {
  const dispatch=useDispatch()
  const counterval =  useSelector((state)=>state.count)
  return (
    <div>
      
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>{counterval}</h1>
    </div>
  )
}

export default Counter
