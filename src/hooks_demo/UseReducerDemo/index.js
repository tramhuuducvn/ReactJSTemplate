import React, {useState, useReducer} from 'react'

// useState
// 1: Init state
// 2: Action setState

// useReducer
// 1: Init state: 0
// 2: Actions: Up(state + 1) Down(state - 1)
// 3: Reducer
// 4: Dispatch

// Step 1: Init state
const initState = 0;

// Step 2: Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Step 3: Reducer
const reducer = (state, action)=>{
  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid Action!')
  }
}

const UseReducerDemo = () => {
  const [count, doAction] = useReducer(reducer, initState);

  return (
    <div style={{padding: 30}}>
      <h1>{count}</h1>
      <button
        onClick={()=> doAction(DOWN_ACTION)}
      >
        Down
      </button>

      <button
        onClick={()=> doAction(UP_ACTION)}
      >
        Up
      </button>
    </div>
  )
}

export default UseReducerDemo;