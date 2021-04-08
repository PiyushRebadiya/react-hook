import React, { useReducer } from 'react'

const initialState = 5;

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET': return 0;
        default: throw new Error('Unexpected action');
      }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}> Decrement </button>
            <button onClick={() => dispatch({ type: "RESET" })}> Rest </button>
        </div>
    )
}

export default UseReducerHook
