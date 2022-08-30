import './App.css';
import {useState, useCallback, useMemo, useRef, useReducer} from 'react';
import React from "react";
import Content from "./Content";

// useState
// 1. Init state: 0
// 2. Action: Up (state +1) / Down (state -1)


// useReducer
// 1. Init state: 0
// 2. Action: Up (state +1) / Down (state -1)
// 3. Reducer
// 4. Dispatch: kich hoat 1 action

//Init state
const initState = 0;

//Acitons
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

//Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    );
}

export default App;